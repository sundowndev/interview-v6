define({ "api": [
  {
    "type": "POST",
    "url": "/api/auth",
    "title": "Get a token",
    "name": "GetToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email to register</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "item",
            "description": "<p>Result item.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/api/justify",
    "title": "Justify a text",
    "name": "JustifyText",
    "group": "Text",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Input text to justify</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "item",
            "description": "<p>Result item.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/justify.ts",
    "groupTitle": "Text"
  }
] });
