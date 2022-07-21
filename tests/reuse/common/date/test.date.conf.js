const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,

  specs: [
    path.resolve(__dirname, "getToday.spec.js"),
    path.resolve(__dirname, "getTomorrow.spec.js"),
    path.resolve(__dirname, "getNextMonth.spec.js"),
    path.resolve(__dirname, "getPreviousMonth.spec.js"),
    path.resolve(__dirname, "getNextYear.spec.js"),
    path.resolve(__dirname, "getPreviousYear.spec.js"),
    path.resolve(__dirname, "calculate.spec.js"),
    path.resolve(__dirname, "getSpecific.spec.js")
  ],

  exclude: [],

  mochaOpts: {
    timeout: 2000000,
  },
});