/* eslint-disable import/prefer-default-export */
import baseConfig from '../../config.base';
const config = baseConfig.default[process.env.REACT_APP_ENV || 'production'];
// console.log("ENV: ", process.env.REACT_APP_ENV);
// console.log("CONFIG: ", baseConfig.default);

const endpoints = config.endpoints;

export const AUTH_BASE_ENDPOINT = `${endpoints.auth}`;
