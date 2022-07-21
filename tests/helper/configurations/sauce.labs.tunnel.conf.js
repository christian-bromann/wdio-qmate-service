const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.base;

const defaultBrowserSauceOptions = {
  build: `SauceLab test. Build-${new Date().getTime()}`,
  screenResolution: "1600x1200",
  tunnelIdentifier: "sap-intranet", // Note: name, not an ID
  parentTunnel: "S-A-P"
};

exports.config = qmateProfiles.merge(profile, {
  services: ["sauce", "shared-store"],
  capabilities: [
    {
      browserName: "firefox",
      platformName: "Windows 10",
      browserVersion: "latest",
      "sauce:options": {
        ...defaultBrowserSauceOptions,
      }
    },
    {
      browserName: "MicrosoftEdge",
      platformName: "Windows 10",
      browserVersion: "latest",
      "sauce:options": {
        ...defaultBrowserSauceOptions,
      },
    },
    {
      browserName: "safari",
      platformName: "macOS 11",
      browserVersion: "latest",
      "sauce:options": {
        ...defaultBrowserSauceOptions
      }
    }]
});