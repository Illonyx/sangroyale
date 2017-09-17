/*
(function () {
    angular.module('sangRoyaleApp', []).directive('countdown', [
        'Util',
        '$interval',
        function (Util, $interval) {
            return {
                restrict: 'A',
                scope: { date: '@' },
                link: function (scope, element) {
                    var future;
                    future = new Date(scope.date);
                    $interval(function () {
                        var diff;
                        diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                        return element.text(Util.dhms(diff));
                    }, 1000);
                }
            };
        }
    ])

    


}.call(this));
*/

(function () {

  angular
    .module('sangRoyaleApp')

    .directive('countdown', countdown)
    
    .factory('Util', function(){

            return {
                dhms: function(t) {
                    var days, hours, minutes, seconds;
                    days = Math.floor(t / 86400);
                    t -= days * 86400;
                    hours = Math.floor(t / 3600) % 24;
                    t -= hours * 3600;
                    minutes = Math.floor(t / 60) % 60;
                    t -= minutes * 60;
                    seconds = t % 60;
                    var obj = [
                    days + 'd',
                    hours + 'h',
                    minutes + 'm',
                    seconds + 's'
                    ]
                    return obj
                }
            }

    });
    

  countdown.$inject=['Util','$interval']
  function countdown(Util, $interval) {
        
        return {
            restrict: 'A',
            scope: { date: '@' },
            link: function (scope, element) {
                var future;
                future = new Date(scope.date);
                $interval(function () {
                    var diff;
                    diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                    return element.text(Util.dhms(diff));
                }, 1000);
            }
        };
  };

  



})();