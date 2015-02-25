'use strict';
var resource = require('../apiResources');

var balance = function(config) {
  return resource.resourceActions('balance',
    ['retrieve'], {'key': config['secretKey']}
  );
}

module.exports = balance;