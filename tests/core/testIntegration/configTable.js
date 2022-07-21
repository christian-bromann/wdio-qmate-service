const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/#/entity/sap.m.Table/sample/sap.m.sample.TableEditable",

  suites: {
    testLearn: "table.spec.js",
  },
  params: {
    auth: {
      formType: "plain"
    }
  },
  specs: [path.resolve(__dirname, "table.spec.js")]
});
