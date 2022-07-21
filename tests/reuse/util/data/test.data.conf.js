const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/",

  params: {
    import: {
      data: "./data/"
    }
  },

  specs: [
    path.resolve(__dirname, "getData.spec.js"),
    path.resolve(__dirname, "getSecureData.spec.js"),
    path.resolve(__dirname, "decrypt.spec.js")
  ]
});