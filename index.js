const path = require('path');

export class Gandalf {
  static getWebpack = () => {
    console.log("webpack");
  }
  static getClient = () => {
    console.log("client");
  }

  static getServer = () => {
    console.log("server");
  }

  static getComponent = component => {
    return path.resolve(__dirname, `src/components/${component}`);
  }

  static getApi = name => {
    return path.resolve(__dirname, `src/api/${name}`);
  }
}
