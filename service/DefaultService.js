'use strict';


/**
 * *EN* Retrieve `GreenPowerIndex` for a location or an account  *DE* Abfrage des `Grünstromindex` für einen Standort oder einen Kunden in Deutschland 
 *
 * plz String Valid zipcode in Germany
 * returns inline_response_200
 **/
exports.coreGsiGET = function(plz) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "forecast" : [ {
    "epochtime" : 1.5494904E9,
    "timeStamp" : 1.5494904E12,
    "eevalue" : 57.0,
    "energyprice" : -0.0195
  }, {
    "epochtime" : 1.5494904E9,
    "timeStamp" : 1.5494904E12,
    "eevalue" : 57.0,
    "energyprice" : -0.0195
  } ],
  "location" : {
    "zip" : "69256",
    "city" : "Mauer (Baden)"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

