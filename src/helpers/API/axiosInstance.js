import axios from 'axios';
import { notify } from 'components';

const baseURL = process.env.REACT_APP_BASE_URL + '/';

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

/**
 * @author Navit Choudhary
 * @param {any} data Response to send
 * @returns {Object} response
 */
export const generateSuccess = (data) => {
  return {
    success: true,
    data: data
  };
};

/**
 * @author Navit Choudhary
 * @param {String} errorMessage Error Message
 * @returns {Object}
 */
export const generateError = (errorMessage) => {
  return {
    success: false,
    data: errorMessage
  };
};

/**
 * @author Navit Choudhary
 * @param {String} errorMessage Error Message
 * @returns {Object}
 */
export const generateErrorAndNotify = (errorMessage) => {
  notify(errorMessage);
  return {
    success: false,
    data: errorMessage
  };
};

/**
 * @author Navit Choudhary
 * @description Error Helper
 * 
 * @param {any} error 
 * @param {String} variant 
 * @returns {Object}
 */
export const errorHelper = (error, variant) => {
  if (error.response === undefined) {
    return generateErrorAndNotify("Network Error");
  }
  if (error.response.statusCode === 401) {
    if (variant === "login") {
      return generateErrorAndNotify("Invalid Credentials");
    }
    return generateErrorAndNotify("You may have been logged out");
  }
  if (error.response.data.statusCode === 401) {
    if (variant === "login") {
      return generateErrorAndNotify("Invalid Credentials");
    }
    return generateErrorAndNotify("You may have been logged out");
  }
  if (error.response.status === 401) {
    if (variant === "login")
      return generateErrorAndNotify("Invalid Credentials");
    return generateErrorAndNotify("You may have been logged out");
  }
  if (error.response.data.message !== "") {
    return generateErrorAndNotify(error.response.data.message);
  }
  if (error.response.statusText !== "") {
    return generateErrorAndNotify(error.response.statusText);
  }
};

export const performCallback = (callback, data) => {
  if (callback instanceof Function) {
    if (data !== undefined)
      return callback(data);
    callback();
  }
};