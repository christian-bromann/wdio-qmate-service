const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.sauceTunnel;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 3,
  bail: 1,
  baseUrl: "http://localhost:34099/ui",

  services: [
    ["chromedriver", {
      port: 4444
    }],
    ["static-server", {
      port: 34099,
      folders: [{
        mount: "/ui",
        path: path.resolve(__dirname, "./website/main.html")
      }, ]
    }]
  ],

  specs: [
    // path.resolve(__dirname, "navigateToApplication.spec.js"),
    path.resolve(__dirname, "navigateToApplicationAndRetry.spec.js"),
    // path.resolve(__dirname, "navigateToApplicationWithQueryParams.spec.js"),
    // path.resolve(__dirname, "navigateToApplicationWithQueryParamsAndRetry.spec.js")
  ],

  exclude: [],

  mochaOpts: {
    timeout: 2000000,
  },
});