
const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/test-resources/sap/m/demokit/cart/webapp/index.html",

  suites: {
    testLearn:[path.resolve(__dirname, "./filters1.spec.js")]
  },
  params: {
    auth: {
      formType: "plain"
    }
  },
  specs: [path.resolve(__dirname, "./filters1.spec.js")]
});
