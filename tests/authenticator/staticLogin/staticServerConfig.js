const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 1,
  bail: 1,

  services: [
    ["chromedriver", { port: 4444 }],
    ["static-server", {
      port: 34005,
      folders: [
        { mount: "/custom.html", path: path.resolve(__dirname, "./html/custom.html") },
        { mount: "/fiori.html", path: path.resolve(__dirname, "./html/fiori.html") },
        { mount: "/home.html", path: path.resolve(__dirname, "./html/home.html") },
        { mount: "/sapCloud.html", path: path.resolve(__dirname, "./html/sapCloud.html") }
      ]
    }]
  ]
});