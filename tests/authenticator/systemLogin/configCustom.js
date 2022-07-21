const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "specs/custom.spec.js")
  ],
  exclude: [],

  params: {
    auth: {
      formType: "custom",
      username: "PURCHASER",
      password: "Welcome2!",
      usernameFieldSelector: "#USERNAME_BLOCK input",
      passwordFieldSelector: "#PASSWORD_BLOCK input",
      logonButtonSelector: "#LOGIN_LINK"
    }
  },
  
  reporters: ["spec"],
  baseUrl: "https://qs9-715.wdf.sap.corp/ui"
});