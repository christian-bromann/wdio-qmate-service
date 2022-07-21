const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,

  specs: [
    path.resolve(__dirname, "clickSettingsButton.spec.js"),
    path.resolve(__dirname, "sortColumnAscending.spec.js"),
    path.resolve(__dirname, "sortColumnDescending.spec.js")
  ],

  exclude: [],


  mochaOpts: {
    timeout: 2000000,
  },
});