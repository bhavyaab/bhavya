'use strict';

module.exports = {
  template: require('./my-header.html'),
  controller: ['$log', '$location', MyHeaderController],
  controllerAs: 'myHeaderCtrl',
  bindings:{
    aboutShow: '='
  }
};

function MyHeaderController($log, $location) {
  $log.debug('MyHeaderController');

}
