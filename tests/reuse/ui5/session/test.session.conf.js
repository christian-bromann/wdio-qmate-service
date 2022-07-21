const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 5,

  specs: [
    path.resolve(__dirname, "loginFiori.spec.js"),
    path.resolve(__dirname, "loginSapCloud.spec.js"),
    path.resolve(__dirname, "logout.spec.js"),
    path.resolve(__dirname, "login.spec.js"),
    path.resolve(__dirname, "switchUser.spec.js"),
  ],

  params: {
    logUI5Version: false
  },

  mochaOpts: {
    timeout: 2000000,
  },
});