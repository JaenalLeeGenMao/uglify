/* how to use */

/**
 * TAKE NOTE
 * IMPORTANT!!
 * Please make sure to change
 * all config.api.clientUrl and config.endpoints.serverUrl
 * all config.api.serverUrl and config.endpoints.serverUrl
 */

/**
 * Installing key dependencies
 * yarn add --dev svg-url-loader url-loader file-loader raw-loader file-loader babel-loader @babel/preset-env @babel/preset-flow @babel/preset-react @babel/plugin-transform-react-constant-elements @babel/plugin-transform-react-inline-elements babel-plugin-transform-react-remove-prop-types @babel/plugin-proposal-decorators @babel/plugin-proposal-function-sent @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-throw-expressions @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-import-meta @babel/plugin-proposal-class-properties @babel/plugin-proposal-json-strings isomorphic-style-loader css-loader postcss-loader null-loader
 *
 * yarn remove svg-url-loader url-loader file-loader raw-loader file-loader babel-loader @babel/preset-env @babel/preset-flow @babel/preset-react @babel/plugin-transform-react-constant-elements @babel/plugin-transform-react-inline-elements babel-plugin-transform-react-remove-prop-types @babel/plugin-proposal-decorators @babel/plugin-proposal-function-sent @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-throw-expressions @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-import-meta @babel/plugin-proposal-class-properties @babel/plugin-proposal-json-strings isomorphic-style-loader css-loader postcss-loader null-loader
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

const Config = (module.exports = {
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
        serverUrl: 'https://stag.mola.tv',
        api: 'https://stag.mola.tv/api/v2',
        auth: 'https://stag.mola.tv/accounts/_',
        domain: 'https://stag.mola.tv',
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
  updateConfig: Obj => {
    Object.keys(Obj).forEach(key => {
      Config.default[key] = { ...Config.default[key], ...Obj[key] };
    });
  }
});
