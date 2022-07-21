const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/#/entity/sap.m.MultiComboBox/sample/sap.m.sample.MultiComboBox",
  params: {
    auth: {
      formType: "plain"
    }
  },
  suites: {
    testLearn: "multicombobox.spec.js",
  },
  specs: [path.resolve(__dirname, "multicombobox.spec.js")]
});
