(function(angular, undefined) {
  'use strict';

  angular.module('angryjs.filters', [])

    .filter('startFrom', function () {
      return function (input, start) {
        if (input) {
          start = +start;
          return input.slice(start);
        }

        return input;
      };
    });

})(window.angular);