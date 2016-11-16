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
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            },
            admin : {
              "disabled" : false,
              "required" : false
            }            
          }
        },
        "qrLastName": {
          "hint": "LASTNAME",
          "defaultColumn": "LastName",
          "prompt": "Last Name",
          "store": true,
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            },
            admin : {
              "disabled" : true,
              "required" : true
            }            
          }
        },
        "qrCompany": {
          "hint": "COMPANY",
          "defaultColumn": "Company",
          "prompt": "Company",
          "store": true,
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            },
            admin : {
              "disabled" : false,
              "required" : true
            }            
          }
        },
        "qrEmail": {
          "hint": "EMAIL",
          "defaultColumn": "Email",
          "prompt": "Email",
          "store": true,
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            },
            admin : {
              "disabled" : true,
              "required" : true
            }            
          }
        },
        "qrSessions": {
          "hint": "",
          "defaultColumn": "",
          "prompt": "Sessions",
          "store": true,
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : false
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            },
            admin : {
              "disabled" : false,
              "required" : false
            }            
          }
        },
        "qrTitle": {
          "hint": "TITLE",
          "defaultColumn": null,
          "prompt": "Title",
          "store": true,
          "pages": {
            attendee : {
              "disabled" : false,
              "required" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true
            }           
          }
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
      "pages": {
            attendee : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            admin : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            }            
          },
      "responses": {
        "qrFavMusic_0": {
          "prompt": "The Boss0",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
        "qrFavMusic_1": {
          "prompt": "Rolling Stones1",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
         "qrFavMusic_3": {
          "prompt": "Beatles3",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
         "qrFavMusic_4": {
          "prompt": "Justin Beebs",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : true
            }            
          }
        },
        "qrFavMusic_2": {
          "prompt": "Led2",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        }
      }
    },
    "qrAttendeeType": {
      "type": "O",
      "defaultColumn": "AttendeeType",
      "hint": null,
      "prompt": "Attendee Type",
      "store": true,
      "pages": {
            attendee : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            admin : {
              "disabled" : false,
              "required" : false,
              "dropdown" : true
            }            
          },
      "textResponseTag": null,
      "responses": {
        "qrAttendeeType_0": {
          "prompt": "Partner",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
        "qrAttendeeType_1": {
          "prompt": "Attendee",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : true
            }            
          }
        },
        "qrAttendeeType_2": {
          "prompt": "VIP",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        }
      }
    },
    "qrTesting": {
      "type": "O",
      "defaultColumn": null,
      "hint": null,
      "prompt": "This is crazy test question",
      "store": true,
      "pages": {
            attendee : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            walkIn : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            },
            admin : {
              "disabled" : false,
              "required" : true,
              "dropdown" : true
            }            
          },
      "textResponseTag": null,
      "responses": {
        "qrTesting_0": {
          "prompt": "Resp1",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
        "qrTesting_1": {
          "prompt": "Resp2",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
        "qrTesting_2": {
          "prompt": "3Resp3",
          "pages": {
            attendee : {
              "disabled" : false
            },
            walkIn : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        },
        "qrTesting_3": {
          "prompt": "Resp4",
          "pages": {
            attendee : {
              "disabled" : false
            },
            admin : {
              "disabled" : false
            }            
          }
        }
      }
    }
  }
};

export default CONFIG;