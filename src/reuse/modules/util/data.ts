"use strict";
/**
 * @class data
 * @memberof util
 */
export class Data {
  
  /**
   * @function getData
   * @memberOf util.data
   * @description Returns the data object with the given filename (JSON, stored in data folder).
   * @param {String} filename - The name of the data file.
   * @returns {String} The data object.
   * @example const data = util.data.getData("myTest");
   */
  getData(filename: string): string {
    if (browser.config.params && browser.config.params.import && browser.config.params.import.data) {
      if (browser.config.params.import.data[filename]) {
        return browser.config.params.import.data[filename];
      } else {
        throw new Error(`Function 'getData' failed. No file with name ${filename} found'`);
      }
    } else {
      throw new Error(`Function 'getData' failed. No data path defined in config.`);
    }
  }

  /**
   * @function getSecureData
   * @memberOf util.data
   * @description Returns and encrypts the data object with the given filename (JSON, stored in data folder). Will return the local file object if private key is not accessible.
   * @param {String} filename - The name of the data file (without suffix '.secure' or '.local').
   * @returns {String} The encrypted or local data object.
   * @example const secureData = util.data.getSecureData("myTest");
   */
  getSecureData(filename: string): string {
    const privateKeyFound = global.util.data.privateKeyFound === true;

    if (privateKeyFound) {
      filename = `${filename}.secure`;
    } else {
      filename = `${filename}.local`;
    }

    if (browser.config.params && browser.config.params.import && browser.config.params.import.data) {
      if (browser.config.params.import.data[filename]) {
        const data = browser.config.params.import.data[filename];

        if (privateKeyFound) {
          this._decryptRecursively(data);
        }

        return data;
      } else {
        throw new Error(`Function 'getSecureData' failed. File '${filename}.json' not found'`);
      }
    } else {
      throw new Error(`Function 'getSecureData' failed. No data path defined in config.`);
    }
  }

  /**
   * @function decrypt
   * @memberOf util.data
   * @description Decrypts the passed input data.
   * @param {String} data - The encrypted data to decrypt.
   * @returns {String} The decrypted data.
   * @example const decrypted = util.data.decrypt("d704004c262faa8ef4bdcf34c8a94883e15524872c7bef334d26a391a1934cf47338b749d99426980ee4cc7a81deaef21439c6894ab0324cdb29b9b6332635baca442651c5d37847f52bb90b8868e037271a7d456024b39b65fdf4dc62e8d82a3d5683a72e4324c59d339742fc79749f0ee74abef916d38e306218adc48e3547a2b346962249320c962d22cb46d9998de36d8219a2496c0997d0fc389f76fb1431a9b57c317886e9c9795c0a09ad98d9fa0b7687d10814dc7973397f3f72a227a04ead4c3d1d428c096a51922ffc4d7afc3952df1c130def5c5fb3e834605cbf1454885966cc65c77046343f4c678e74931fb2dd6cac8dae17837cf674f288d6550dd7fa6b01f5b7ea68aa6bd27d79dd5d53edb5fd4b4edce824bd31b3939352ad7a71a16bab8c54025c2bb92c54e022fcd23ff08bc54a17fc50d00dc3b884cadbfdefe1e75901fdf80e7324ad02a891f2c4863fa120ca238520b79126c65a03");
   */
  decrypt(data: string) {
    return global.util.data.decrypt(data); // Function is defined under: scripts\hooks\utils\decryption.js
  }

  private _decryptRecursively(data: any): any {
    for (const key in data) {
      if (typeof data[key] === "object") {
        data[key] = this._decryptRecursively(data[key]);
      } else if (typeof data[key] === "string") {
        data[key] = global.util.data.decrypt(data[key]);
      }
    }
    return data;
  }
}
export default new Data();
