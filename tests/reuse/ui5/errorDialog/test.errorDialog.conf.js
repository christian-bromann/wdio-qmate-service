const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,

  specs: [
    path.resolve(__dirname, "clickClose.spec.js"),
    path.resolve(__dirname, "expectToBeVisible.spec.js")
  ],

  exclude: [],


  mochaOpts: {
    timeout: 2000000,
  },
});