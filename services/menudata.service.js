(function() {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];

    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function(response) {;
                return response.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + '?category=' + categoryShortName)
            }).then(function(response) {
                console.log("only response",response)
                console.log("only response.data",response.data)
                return response.data;
            });
        };
    }
})();
