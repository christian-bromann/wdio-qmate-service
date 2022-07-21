const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "specs/sapCloud.spec.js")
  ],
  exclude: [],

  reporters: ["spec"],

  params: {
    auth: {
      formType: "sapcloud-form",
      username: "PURCHASER",
      password: "Welcome1!"
    }
  },
  
  baseUrl: "https://hbr-715.wdf.sap.corp/ui"
});