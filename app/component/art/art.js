'use strict';
require('./_art._scss');
module.exports = {
  template: require('./art.html'),
  controller: ['$log', '$location', ArtController],
  controllerAs: 'ArtCtrl'
};

function ArtController($log, $location) {
  $log.debug('ArtController');

}
