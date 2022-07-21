const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 3,
  bail: 1,
  baseUrl: "https://www.sap.com/",

  specs: [
    path.resolve(__dirname, "navigateToApplication.spec.js")
  ],

  services: [
    ["chromedriver", {
      port: 4444
    }]
  ]
});
