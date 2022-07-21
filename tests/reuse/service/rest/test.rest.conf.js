const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  bail: 1,
  baseUrl: "http://localhost:3000",
  
  specs: [
    path.resolve(__dirname, "post.spec.js"),
    path.resolve(__dirname, "get.spec.js"),
    path.resolve(__dirname, "init.spec.js"),
    path.resolve(__dirname, "patch.spec.js"),
    path.resolve(__dirname, "delete.spec.js")
  ],
  
  mochaOpts: {
    timeout: 2000000
  }
});