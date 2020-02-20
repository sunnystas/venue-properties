define({ "api": [
  {
    "type": "get",
    "url": "/bookings/:propId",
    "title": "Get bookings",
    "version": "0.1.0",
    "group": "Bookings",
    "description": "<p>Get all bookings of a property</p>",
    "success": {
      "fields": {
        "Result 200": [
          {
            "group": "Result 200",
            "type": "string",
            "optional": false,
            "field": "propertyId",
            "description": "<p>An id of a property</p>"
          },
          {
            "group": "Result 200",
            "type": "array",
            "optional": false,
            "field": "bookings",
            "description": "<p>An array of bookings of a property</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"propertyName\": \"Some property name\",\n  \"bookings\": [\n    {\n      \"id\": 1,\n      \"title\": \"Booking title\",\n      \"dateStart\": 2020-02-20,\n      \"dateEnd\": 2020-02-20\n    },\n    {\n      \"id\": 2,\n      \"title\": \"Booking title\",\n      \"dateStart\": 2020-02-20,\n      \"dateEnd\": 2020-02-20\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"error\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Bookings",
    "name": "GetBookingsPropid"
  },
  {
    "type": "post",
    "url": "/booking",
    "title": "Create a booking",
    "version": "0.1.0",
    "group": "Bookings",
    "description": "<p>Create a booking for a property</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "propertyId",
            "description": "<p>Unique id of the property from the external HERE API</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Name/title of a booking</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateStart",
            "description": "<p>Start date for a booking</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateEnd",
            "description": "<p>End date for a booking</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"propertyId\": 1,\n  \"title\": \"Some title\",\n  \"dateStart\": \"2020-02-20\",\n  \"dateEnd\": \"2020-02-20\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Result 200": [
          {
            "group": "Result 200",
            "type": "json",
            "optional": false,
            "field": "object",
            "description": "<p>An object of a newly created booking for the property</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"bookingId\": 1,\n  \"propertyName\": \"Some property name\",\n  \"title\": \"Booking title\",\n  \"dateStart\": \"2020-02-20\",\n  \"dateEnd\": \"2020-02-20\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"error\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Bookings",
    "name": "PostBooking"
  },
  {
    "type": "get",
    "url": "/properties?at=LAT,LONG",
    "title": "Get properties",
    "version": "0.1.0",
    "group": "Properties",
    "description": "<p>Get all properties at a given location (LAT,LONG)</p>",
    "success": {
      "fields": {
        "Result 200": [
          {
            "group": "Result 200",
            "type": "array",
            "optional": false,
            "field": "properties",
            "description": "<p>An array of properties objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"properties\": [\n    {\n      \"id\": \"804u8x8x-1b5c53d440484368b1794653005bafa8\",\n      \"title\": \"Some title\",\n      \"position\": [\n        47.90899,\n        33.39279\n      ],\n      \"address\": \"Some address\",\n      \"href\": \"https://places.sit.ls.hereapi.com/places/v1/places/804u8x8x-bfc601f1985443bbb16fdaa7af6bff9b;context=Zmxvdy1pZD1hZDk3MjNlOC01YjJmLTVlMGEtODZjYS1mOTAyOTE2NGU2MGFfMTU4MjE5Mzg4ODgzN182NzYyXzczODUmcmFuaz0w?app_id=P6IrYvzip4zi88vqi9tA&app_code=AUmAgVJEcVaJ6Eh2JblTBA\"\n    },\n    {\n      \"id\": \"804u8x8x-1b5c53d440484368b1794653005bafa8\",\n      \"title\": \"Some title\",\n      \"position\": [\n        47.90899,\n        33.39279\n      ],\n      \"address\": \"Some address\",\n      \"href\": \"https://places.sit.ls.hereapi.com/places/v1/places/804u8x8x-bfc601f1985443bbb16fdaa7af6bff9b;context=Zmxvdy1pZD1hZDk3MjNlOC01YjJmLTVlMGEtODZjYS1mOTAyOTE2NGU2MGFfMTU4MjE5Mzg4ODgzN182NzYyXzczODUmcmFuaz0w?app_id=P6IrYvzip4zi88vqi9tA&app_code=AUmAgVJEcVaJ6Eh2JblTBA\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"error\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Properties",
    "name": "GetPropertiesAtLatLong"
  }
] });
