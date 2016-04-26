var cerveja = angular.module('cerveja');

function getFocus($timeout) {
  return {
    scope : {
      trigger : '=focus'
    },
    link : function(scope, element) {
      scope.$watch('trigger', function(value) {
        if (value) {
          $timeout(function() {
            element[0].focus();
          });
        }
      });
    }
  };
}

cerveja.directive('focus', getFocus);
