const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.sauceTunnel;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "specs/fiori.spec.js")
  ],
  exclude: [],

  reporters: ["spec"],
  params: {
    auth: {
      formType: "fiori-form",
      username: "PURCHASER",
      password: "Welcome1!"
    }
  },

  baseUrl: "https://qs9-715.wdf.sap.corp/ui"

});