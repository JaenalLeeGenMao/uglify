/* how to use */

/**
 * TAKE NOTE
 * IMPORTANT!!
 * Please make sure to change
 * all config.api.clientUrl and config.endpoints.serverUrl
 * all config.api.serverUrl and config.endpoints.serverUrl
 */

/*
 * const baseConfig = require('gandalf').config;
 *
 * var options = {
 *   development: {
 *     port: 3000,
 *     endpoints: {
 *       clientUrl: '',
 *       serverUrl: 'http://jaenal.mola.tv',
 *       api: 'http://mola.lukitomo.com/v2',
 *       auth: 'http://jaenal.mola.tv/accounts/_',
 *       domain: 'http://jaenal.mola.tv',
 *       setting: {
 *         timeout: 10000,
 *         maxRedirects: 1
 *       }
 *     }
 *   },
 *   staging: {
 *     port: 3000,
 *     endpoints: {
 *       clientUrl: '',
 *       serverUrl: 'https://staging.mola.tv',
 *       api: 'https://staging.mola.tv/api/v2',
 *       auth: 'http://staging.mola.tv/accounts/_',
 *       domain: 'https://staging.mola.tv',
 *       setting: {
 *         timeout: 10000,
 *         maxRedirects: 1
 *       }
 *     }
 *   },
 *   production: {
 *     port: 3000,
 *     endpoints: {
 *       clientUrl: '',
 *       serverUrl: 'https://www.mola.tv',
 *       api: 'https://mola.tv/api/v2',
 *       auth: 'https://www.mola.tv/accounts/_',
 *       domain: 'https://www.mola.tv',
 *       setting: {
 *         timeout: 10000,
 *         maxRedirects: 1
 *       }
 *     }
 *   }
 * }
 *
 * baseConfig.updateConfig(options);
 * var mainConfig = baseConfig.default[process.node.NODE_ENV || "development"];
 */

const Config = module.exports = {
  default: {
    development: {
      port: 3000,
      endpoints: {
        clientUrl: '',
        serverUrl: 'http://jaenal.mola.tv',
        api: 'http://mola.lukitomo.com/api/v2',
        auth: 'http://jaenal.mola.tv/accounts/_',
        domain: 'http://jaenal.mola.tv',
        setting: {
          timeout: 10000,
          maxRedirects: 1
        }
      }
    },
    staging: {
      port: 3000,
      endpoints: {
        clientUrl: '',
        serverUrl: 'https://staging.mola.tv',
        api: 'https://staging.mola.tv/api/v2',
        auth: 'http://staging.mola.tv/accounts/_',
        domain: 'https://staging.mola.tv',
        setting: {
          timeout: 10000,
          maxRedirects: 1
        }
      }
    },
    production: {
      port: 3000,
      endpoints: {
        clientUrl: '',
        serverUrl: 'https://mola.tv',
        api: 'https://mola.tv/api/v2',
        auth: 'https://mola.tv/accounts/_',
        domain: 'https://mola.tv',
        setting: {
          timeout: 10000,
          maxRedirects: 1
        }
      }
    }
  },
  updateConfig: (Obj) => {
    Object.keys(Obj).forEach(key => {
      Config.default[key] = { ...Config.default[key], ...Obj[key] }
    });
  }
};
