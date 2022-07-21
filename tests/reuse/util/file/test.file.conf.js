const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/#/entity/sap.m.UploadCollection/sample/sap.m.sample.UploadCollection", 

  specs: [
    path.resolve(__dirname, "file.spec.js"),
    path.resolve(__dirname, "pdfParser.spec.js")
  ],
  exclude: []
});