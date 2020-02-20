const express = require('express');
const router = express.Router();
const models = require('../models');
const superagent = require('superagent');

/**
 * @api {get} /properties?at=LAT,LONG Get properties
 * @apiVersion 0.1.0
 * @apiGroup Properties
 *
 * @apiDescription Get all properties at a given location (LAT,LONG)
 *
 * @apiParam {string} at A pair of GEO coordinates LAT,LONG
 *
 * @apiSuccess (Result 200) {array} properties An array of properties objects
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "properties": [
 *          {
 *            "id": 1,
 *            "title": "Some title",
 *            "propertyHereId": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *            "lat": 47.90899,
 *            "lng": 33.39279,
 *            "address": "Some address",
 *            "href": "https://places.sit.ls.hereapi.com/places/v1/places/804u8x8x-bfc601f1985443bbb16fdaa7af6bff9b;context=Zmxvdy1pZD1hZDk3MjNlOC01YjJmLTVlMGEtODZjYS1mOTAyOTE2NGU2MGFfMTU4MjE5Mzg4ODgzN182NzYyXzczODUmcmFuaz0w?app_id=P6IrYvzip4zi88vqi9tA&app_code=AUmAgVJEcVaJ6Eh2JblTBA"
 *            "createdAt": "2020-02-20T17:34:22.509Z",
 *            "updatedAt": "2020-02-20T17:34:22.509Z"
 *          }
 *        ]
 *      }
 *
 * @apiError (Error) {json} 404 Not found
 * @apiError (Error) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *       "status": "Not found"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Server Error
 *     {
 *       "status": "Server Error"
 *     }
 *
 */
router.get('/properties', function(req, res, next) {
  const { at } = req.query;
  superagent
    .get('https://places.sit.ls.hereapi.com/places/v1/browse')
    .query({
      apiKey: 'GbqPQSUhE7Pc8tduPEehQbAwLA8gXsDGueSgeHOU2Fg',
      q: 'hotel',
      at: at
    })
    .then(data => {
      if (!data || data.length === 0) {
        return res.status(404).json({ status: 'Not found' });
      }
      const extractedHotels = data.body.results.items;
      const promises = [];
      extractedHotels.forEach(hotel => {
        promises.push(
          models.Property.findOrCreate({
            where: {
              propertyHereId: hotel.id
            },
            defaults: {
              title: hotel.title,
              lat: hotel.position[0],
              lng: hotel.position[1],
              address: hotel.vicinity,
              href: hotel.href
            }
          })
        );
      });
      return Promise.all(promises).then(function(properties) {
        const propItems = properties.map(prop => prop[0]);
        res.json({ properties: propItems });
      });
    })
    .catch(err => {
      return next(err);
    });
});

/**
 * @api {get} /bookings/:propId Get bookings
 * @apiVersion 0.1.0
 * @apiGroup Bookings
 *
 * @apiDescription Get all bookings of a property
 *
 * @apiParam {string} propId Unique id of the property from the external HERE API
 *
 * @apiSuccess (Result 200) {string} propertyId An id of a property
 * @apiSuccess (Result 200) {array} bookings An array of bookings of a property
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "bookings": [
 *          {
 *            "id": 1,
 *            "title": "Booking title",
 *            "propertyHereId": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *            "dateStart": "2020-02-20",
 *            "dateEnd": "2020-02-20",
 *            "createdAt": "2020-02-20T17:34:22.509Z",
 *            "updatedAt": "2020-02-20T17:34:22.509Z",
 *            "propertyId": 3
 *          }
 *        ]
 *      }
 *
 * @apiError (Error) {json} 404 Not found
 * @apiError (Error) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *       "status": "Not found"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Server Error
 *     {
 *       "status": "Server Error"
 *     }
 *
 */
router.get('/bookings/:propId', function(req, res, next) {
  const { propId } = req.params;
  return models.Property.findOne({
    where: {
      propertyHereId: propId
    }
  }).then(propertyInstance => {
    if (!propertyInstance) {
      return res.status(404).json({ status: 'Not found' });
    }
    return propertyInstance
      .getBookings()
      .then(associatedBookingInstances => {
        return res.status(200).json({ bookings: associatedBookingInstances });
      })
      .catch(err => {
        return next(err);
      });
  });
});

/**
 * @api {post} /booking Add a booking
 * @apiVersion 0.1.0
 * @apiGroup Bookings
 *
 * @apiDescription Add a booking to a property
 *
 * @apiParam {string} propertyId Unique id of the property from the external HERE API
 * @apiParam {string} title Name/title of a booking
 * @apiParam {date} dateStart Start date for a booking
 * @apiParam {date} dateEnd End date for a booking
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "propertyHereId": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *       "title": "Some title",
 *       "dateStart": "2020-02-20",
 *       "dateEnd": "2020-02-20"
 *     }
 *
 * @apiSuccess (Result 200) {json} object An object of a newly created booking for the property
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *        "bookings": [
 *          {
 *            "id": 1,
 *            "title": "Booking title",
 *            "propertyHereId": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *            "dateStart": "2020-02-20",
 *            "dateEnd": "2020-02-20",
 *            "createdAt": "2020-02-20T17:34:22.509Z",
 *            "updatedAt": "2020-02-20T17:34:22.509Z",
 *            "propertyId": 3
 *          }
 *        ]
 *      }
 *
 * @apiError (Error) {json} 404 Not found
 * @apiError (Error) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *       "status": "No such property found"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "status": "Server Error"
 *     }
 *
 */
router.post('/booking', function(req, res, next) {
  const { propertyHereId, title, dateStart, dateEnd } = req.body;
  return models.Property.findOne({
    where: {
      propertyHereId: propertyHereId
    }
  })
    .then(propertyInstance => {
      if (propertyInstance === null) {
        return res.status(404).json({
          status: 'No such property found'
        });
      }
      return models.Booking.create({
        propertyHereId,
        title,
        dateStart,
        dateEnd
      })
        .then(booking => {
          return propertyInstance
            .addBooking(booking)
            .then(propertyInstance => {
              return propertyInstance
                .getBookings()
                .then(associatedBookingInstances => {
                  return res
                    .status(201)
                    .json({ bookings: associatedBookingInstances });
                })
                .catch(err => {
                  return next(err);
                });
            })
            .catch(err => {
              return next(err);
            });
        })
        .catch(err => {
          return next(err);
        });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;
