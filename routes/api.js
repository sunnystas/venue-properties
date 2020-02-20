var express = require('express');
var router = express.Router();

/**
 * @api {get} /properties?at=LAT,LONG Get properties
 * @apiVersion 0.1.0
 * @apiGroup Properties
 *
 * @apiDescription Get all properties at a given location (LAT,LONG)
 *
 * @apiSuccess (Result 200) {array} properties An array of properties objects
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "properties": [
 *          {
 *            "id": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *            "title": "Some title",
 *            "position": [
 *              47.90899,
 *              33.39279
 *            ],
 *            "address": "Some address",
 *            "href": "https://places.sit.ls.hereapi.com/places/v1/places/804u8x8x-bfc601f1985443bbb16fdaa7af6bff9b;context=Zmxvdy1pZD1hZDk3MjNlOC01YjJmLTVlMGEtODZjYS1mOTAyOTE2NGU2MGFfMTU4MjE5Mzg4ODgzN182NzYyXzczODUmcmFuaz0w?app_id=P6IrYvzip4zi88vqi9tA&app_code=AUmAgVJEcVaJ6Eh2JblTBA"
 *          },
 *          {
 *            "id": "804u8x8x-1b5c53d440484368b1794653005bafa8",
 *            "title": "Some title",
 *            "position": [
 *              47.90899,
 *              33.39279
 *            ],
 *            "address": "Some address",
 *            "href": "https://places.sit.ls.hereapi.com/places/v1/places/804u8x8x-bfc601f1985443bbb16fdaa7af6bff9b;context=Zmxvdy1pZD1hZDk3MjNlOC01YjJmLTVlMGEtODZjYS1mOTAyOTE2NGU2MGFfMTU4MjE5Mzg4ODgzN182NzYyXzczODUmcmFuaz0w?app_id=P6IrYvzip4zi88vqi9tA&app_code=AUmAgVJEcVaJ6Eh2JblTBA"
 *          }
 *        ]
 *      }
 *
 * @apiError (Error 500) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "error": "Server Error"
 *     }
 */
router.get('/properties', function(req, res, next) {
  res.json({});
});

/**
 * @api {get} /bookings/:propId Get bookings
 * @apiVersion 0.1.0
 * @apiGroup Bookings
 *
 * @apiDescription Get all bookings of a property
 *
 * @apiSuccess (Result 200) {string} propertyId An id of a property
 * @apiSuccess (Result 200) {array} bookings An array of bookings of a property
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "propertyName": "Some property name",
 *        "bookings": [
 *          {
 *            "id": 1,
 *            "title": "Booking title",
 *            "dateStart": 2020-02-20,
 *            "dateEnd": 2020-02-20
 *          },
 *          {
 *            "id": 2,
 *            "title": "Booking title",
 *            "dateStart": 2020-02-20,
 *            "dateEnd": 2020-02-20
 *          }
 *        ]
 *      }
 *
 * @apiError (Error 500) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "error": "Server Error"
 *     }
 */
router.get('/bookings/:propId', function(req, res, next) {
  res.json({});
});

/**
 * @api {post} /booking Create a booking
 * @apiVersion 0.1.0
 * @apiGroup Bookings
 *
 * @apiDescription Create a booking for a property
 *
 * @apiParam {string} propertyId Unique id of the property from the external HERE API
 * @apiParam {string} title Name/title of a booking
 * @apiParam {date} dateStart Start date for a booking
 * @apiParam {date} dateEnd End date for a booking
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "propertyId": 1,
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
 *        "bookingId": 1,
 *        "propertyName": "Some property name",
 *        "title": "Booking title",
 *        "dateStart": "2020-02-20",
 *        "dateEnd": "2020-02-20"
 *      }
 *
 * @apiError (Error 500) {json} 500 Server Error
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "error": "Server Error"
 *     }
 */
router.post('/booking', function(req, res, next) {
  res.json({});
});

module.exports = router;
