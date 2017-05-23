'use strict';

module.exports = {
  template: require('./my-header.html'),
  controller: ['$log', '$location', MyHeaderController],
  controllerAs: 'myHeaderCtrl'
};

function MyHeaderController($log, $location) {
  $log.debug('MyHeaderController');

}
