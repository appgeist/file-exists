const { access, constants } = require('fs');

const { F_OK } = constants;

/**
 * Check if a file exists
 *
 * @param {string} path Filename to check
 * @returns {Promise<boolean>} A Promise that resolves with true or false
 */
module.exports = (path) => new Promise((resolve) => access(path, F_OK, (err) => resolve(!err)));
