const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 3,
  bail: 1,

  services: [
    ["chromedriver", {
      port: 4444
    }]
  ],

  specs: [
    path.resolve(__dirname, "navigateToSystemAndApplication.spec.js"),
    path.resolve(__dirname, "navigateToSystemAndApplicationAndRetry.spec.js"),
    path.resolve(__dirname, "expectUnsupportedNavigationPopup.spec.js"),
  ],

  exclude: [],

  mochaOpts: {
    timeout: 2000000,
  },
});