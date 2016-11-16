const CONFIG = {
  "appConfig": {
    "appTextFont": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
    "appTextColor": "#333333",
    "searchKeys": [
      "Email"
    ],
    "exactMatch": true,
    "showCamera": true,
    "allowWalkIn": true,
    "searchPageText": "Please scan your QR code or enter your email address to check in.",
    "walkInPageText": "My registration wasn't found. I'd like to...",
    "regNotFoundText": "Please visit the help desk to finish your registration process and to receive your name badge.",
    "alreadyPrintedText": "Please proceed to the Help Desk to reprint your badge.",
    "allowReprint": false,
    "thankYouText": "Thanks for joining us today!",
    "thankYouPageTimeout": "2",
    "evaluationUrl": "https://evaluation.validar.com/Evaluations/",
    "evaluationTimeout": "12",
    "evaluationText": "Please scan your QR code or enter your email address to complete your evaluation.",
    "lookupByEmail": true,
    "showEvalCamera": true
  },
  "printMapping": {},
  "fullDefinition": {
    "qrContact": {
      "prompt": "Contact Information",
      "responses": {
        "qrFirstName": {
          "hint": "FIRSTNAME",
          "defaultColumn": "FirstName",
          "prompt": "First Name",
          "store": true,
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false,
              "required": false
            }
          ]
        },
        "qrLastName": {
          "hint": "LASTNAME",
          "defaultColumn": "LastName",
          "prompt": "Last Name",
          "store": true,
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false,
              "required": false
            }
          ]
        },
        "qrCompany": {
          "hint": "COMPANY",
          "defaultColumn": "Company",
          "prompt": "Company",
          "store": true,
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false,
              "required": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false,
              "required": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false,
              "required": false
            }
          ]
        },
        "qrEmail": {
          "hint": "EMAIL",
          "defaultColumn": "Email",
          "prompt": "Email",
          "store": true,
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false,
              "required": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false,
              "required": false
            }
          ]
        },
        "qrTitle": {
          "hint": "TITLE",
          "defaultColumn": null,
          "prompt": "Title",
          "store": true,
          "pages": [
            {
              "formId": "walkInSurvey1Form",
              "disabled": false,
              "required": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false,
              "required": false
            }
          ]
        }
      },
      "type": "T"
    },
    "qrFavMusic": {
      "type": "M",
      "defaultColumn": null,
      "hint": null,
      "prompt": "I like these singers",
      "store": true,
      "pages": [
        {
          "formId": "survey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        },
        {
          "formId": "walkInSurvey1Form",
          "disabled": false,
          "required": true,
          "dropdown": false
        },
        {
          "formId": "adminSurvey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        }
      ],
      "responses": {
        "qrFavMusic_0": {
          "prompt": "The Boss",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrFavMusic_1": {
          "prompt": "Rolling Stones",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrFavMusic_2": {
          "prompt": "Led",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        }
      }
    },
    "qrAttendeeType": {
      "type": "O",
      "defaultColumn": "AttendeeType",
      "hint": null,
      "prompt": "Attendee Type",
      "store": true,
      "pages": [
        {
          "formId": "survey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        },
        {
          "formId": "walkInSurvey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        },
        {
          "formId": "adminSurvey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        }
      ],
      "textResponseTag": null,
      "responses": {
        "qrAttendeeType_0": {
          "prompt": "Partner",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrAttendeeType_1": {
          "prompt": "Attendee",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrAttendeeType_2": {
          "prompt": "VIP",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        }
      }
    },
    "qrTesting": {
      "type": "O",
      "defaultColumn": null,
      "hint": null,
      "prompt": "This is crazy test question",
      "store": true,
      "pages": [
        {
          "formId": "survey1Form",
          "disabled": false,
          "required": true,
          "dropdown": false
        },
        {
          "formId": "walkInSurvey1Form",
          "disabled": true,
          "required": true,
          "dropdown": true
        },
        {
          "formId": "adminSurvey1Form",
          "disabled": false,
          "required": false,
          "dropdown": false
        }
      ],
      "textResponseTag": null,
      "responses": {
        "qrTesting_0": {
          "prompt": "Resp1",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrTesting_1": {
          "prompt": "Resp2",
          "pages": [
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrTesting_2": {
          "prompt": "3Resp3",
          "pages": [
            {
              "formId": "survey1Form",
              "disabled": false
            },
            {
              "formId": "walkInSurvey1Form",
              "disabled": true
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        },
        "qrTesting_3": {
          "prompt": "Resp4",
          "pages": [
            {
              "formId": "walkInSurvey1Form",
              "disabled": false
            },
            {
              "formId": "adminSurvey1Form",
              "disabled": false
            }
          ]
        }
      }
    }
  }
};

export default CONFIG;