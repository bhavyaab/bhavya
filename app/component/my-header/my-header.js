'use strict';

module.exports = {
  template: require('./my-header.html'),
  controller: ['$log', '$location', MyHeaderController],
  controllerAs: 'myHeaderCtrl',
  bindings:{
    isCollapsedHorizontal: '='
  }
};

function MyHeaderController($log, $location) {
  $log.debug('MyHeaderController');


  this.showAbout = function(){
    var element = document.querySelector('.about');
    if(this.isCollapsedHorizontal){
      element.classList.add('fade-in-left');
      element.classList.remove('fade-out-left');
      console.log('class added');
    } else {
      console.log('class removed!!');
      element.classList.remove('fade-in-left');
      element.classList.add('fade-out-left');
    }
    this.isCollapsedHorizontal = !this.isCollapsedHorizontal;
  };
}
