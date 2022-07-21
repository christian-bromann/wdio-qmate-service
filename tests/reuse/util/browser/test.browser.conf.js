const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "logCurrentUrl.spec.js"),
    path.resolve(__dirname, "getBrowserName.spec.js"),
    path.resolve(__dirname, "getUI5Version.spec.js"),
    path.resolve(__dirname, "getCurrentUrl.spec.js"),
    path.resolve(__dirname, "getBaseUrl.spec.js"),
    path.resolve(__dirname, "setBaseUrl.spec.js"),
    path.resolve(__dirname, "clearBrowser.spec.js"),
    path.resolve(__dirname, "refresh.spec.js"),
    path.resolve(__dirname, "executeScript.spec.js"),
    path.resolve(__dirname, "getCurrentWindow.spec.js"),
    path.resolve(__dirname, "switchToWindow.spec.js"),
    path.resolve(__dirname, "switchToNewWindow.spec.js"),
    path.resolve(__dirname, "back.spec.js"),

  ],
  exclude: [],

  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/",
});