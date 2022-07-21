const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 4,
  specFileRetries: 2,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/ui/demoapps/demokit/rta/fiori-elements/test/index.html#Shell-home",

  specs: [
    path.resolve(__dirname, "clickBack.spec.js"),
    path.resolve(__dirname, "clickUserIcon.spec.js"),
    path.resolve(__dirname, "expectPageTitle.spec.js"),
    path.resolve(__dirname, "expectShellHeader.spec.js")
  ]
});