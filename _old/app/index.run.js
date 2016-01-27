(function() {
  'use strict';

  angular
    .module('theFertilityApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
