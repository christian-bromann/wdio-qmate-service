const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "specs/plain.spec.js")
  ],
  exclude: [],

  reporters: ["spec"],

  params: {
    auth: {
      formType: "plain"
    }
  },
  
  baseUrl: "https://qs9-715.wdf.sap.corp/ui"
});