const Config = module.exports = {
  default: {
    development: {
      setting: {
        timeout: 10000,
        maxRedirects: 1
      },
      endpoints: {
        api: 'http://mola.lukitomo.com/v2',
        auth: 'http://jaenal.mola.tv/accounts/_',
        domain: 'http://jaenal.mola.tv'
      }
    },
    staging: {
      setting: {
        timeout: 10000,
        maxRedirects: 1
      },
      endpoints: {
        api: 'https://api.staging.mola.tv/v2',
        auth: 'http://staging.mola.tv/accounts/_',
        domain: 'https://staging.mola.tv'
      }
    },
    production: {
      setting: {
        timeout: 10000,
        maxRedirects: 1
      },
      endpoints: {
        api: 'https://api.supersoccer.tv/v2',
        auth: 'https://www.mola.tv/accounts/_',
        domain: 'https://www.mola.tv'
      }
    }
  },
  updateConfig: (Obj) => {
    Object.keys(Obj).forEach(key => {
      debugger;
      console.log(key);
      console.log(Obj[key], Config.default[key]);
      Config.default[key] = { ...Config.default[key], ...Obj[key] }
    });
  }
};

/* how to use */
// import { config as baseConfig } from 'gandalf';
//  OR
// const baseConfig = require('gandalf').config;

// var options = {
//   development: {
//     api: {
//       timeout: 10000,
//       maxRedirects: 1
//     },
//     endpoints: {
//       api: 'http://mola.lukitomo.com/v2',
//       auth: 'http://jaenal.mola.tv/accounts/_',
//       domain: 'http://jaenal.mola.tv'
//     }
//   },
//   staging: {
//     api: {
//       timeout: 10000,
//       maxRedirects: 1
//     },
//     endpoints: {
//       api: 'https://api.staging.mola.tv/v2',
//       auth: 'http://staging.mola.tv/accounts/_',
//       domain: 'https://staging.mola.tv'
//     }
//   },
//   production: {
//     api: {
//       timeout: 10000,
//       maxRedirects: 1
//     },
//     endpoints: {
//       api: 'https://api.supersoccer.tv/v2',
//       auth: 'https://www.mola.tv/accounts/_',
//       domain: 'https://www.mola.tv'
//     }
//   }
// }

// baseConfig.updateConfig(options);
// var mainConfig = baseConfig.default[process.node.NODE_ENV || "development"];