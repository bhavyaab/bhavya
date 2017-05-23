'use strict';
require('./about._scss');
module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'AboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');

}
