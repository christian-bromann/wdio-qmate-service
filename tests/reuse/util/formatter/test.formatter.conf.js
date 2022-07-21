const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/",

  specs: [
    path.resolve(__dirname, "addRemoveLeadingZeros.spec.js"),
    path.resolve(__dirname, "extractNumberFromString.spec.js"),
    path.resolve(__dirname, "formatDate.spec.js"),
    path.resolve(__dirname, "sliceStringAfter.spec.js"),
    path.resolve(__dirname, "sliceStringAt.spec.js"),
    path.resolve(__dirname, "stringifyJSON.spec.js"),
    path.resolve(__dirname, "trimString.spec.js")
  ]
});