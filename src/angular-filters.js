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
    })

    .filter('join', function () {
      return function (array, glue) {
        glue = glue || ', ';
        return array.join(glue);
      };
    })

  ;

})(window.angular);