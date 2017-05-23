'use strict';

module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'AboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');

}
