const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/test-resources/sap/m/demokit/cart/webapp/index.html",

  specs: [
    path.resolve(__dirname, "execute.spec.js"),
    path.resolve(__dirname, "getAggregationProperty.spec.js"),
    path.resolve(__dirname, "getAssociationProperty.spec.js"),
    path.resolve(__dirname, "getBindingContextPathProperty.spec.js"),
    path.resolve(__dirname, "getProperty.spec.js"),
    path.resolve(__dirname, "getPropertyBinding.spec.js")
  ],

  exclude: [],


  mochaOpts: {
    timeout: 2000000,
  },
});