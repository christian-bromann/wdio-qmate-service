const reuseLibrary = require("../../reuse/index");
const dataExchangeCommands = require("./utils/dataExchangeCommands");
/**
 * Gets executed just before initializing the webdriver session and test framework. It allows you
 * to manipulate configurations depending on the capability or spec.
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that are to be run
 */
module.exports = async function (config, capabilities, specs) {
  // Add core reuse library
  await reuseLibrary.load();
  // import data into browser.params.import
  await dataExchangeCommands.readParams();
};