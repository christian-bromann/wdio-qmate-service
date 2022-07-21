const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,

  specs: [
    path.resolve(__dirname, "addRemoveLeadingZeros.spec.js"),
    path.resolve(__dirname, "formatDate.spec.js"),
    path.resolve(__dirname, "extractNumberFromString.spec.js")
  ],
  exclude: [],


  mochaOpts: {
    timeout: 2000000,
  },
});