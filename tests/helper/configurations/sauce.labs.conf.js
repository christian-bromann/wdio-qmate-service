const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.base;

const defaultBrowserSauceOptions = {
  build: `SauceLab test. Build-${new Date().getTime()}`,
  screenResolution: "1600x1200"
};

exports.config = qmateProfiles.merge(profile, {
  // Note: provide browsers in your config (with tunnel, if required)
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
        // ...
      }
    }]
});