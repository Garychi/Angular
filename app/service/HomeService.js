/**
 * Created by Mos on 2016/12/18.
 */
define(['app'],function (app) {

    app.service('HomeService',["$http",(function () {

        function HomeService($http){
            this.$http=$http;
        }

        HomeService.prototype.printData = function () {
            return "service success";
        }

        return HomeService;
    })()]);

});