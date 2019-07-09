const { access, constants } = require('fs');

const { F_OK } = constants;

module.exports = path => new Promise(resolve => access(path, F_OK, err => resolve(!err)));
