/**
 * Created by Mos on 2016/12/16.
 */

define(["HomeService"], function () {

    return ["$scope","HomeService", function ($scope,homeService) {
        $scope.shoppingList = [];
        $scope.reverse = true;
        $scope.dateFormat = "yyyy/MM/dd HH:mm:ss";

        $scope.addItem = function () {
            if ($scope.itemName) {
                var duplicated = false;

                for (var item in $scope.shoppingList) {
                    if ($scope.shoppingList[item].itemName === $scope.itemName) {
                        alert($scope.itemName + '已存在');
                        duplicated = true;
                        break;
                    }
                }

                if (!duplicated) {
                    $scope.shoppingList.push({"itemName": $scope.itemName, "shoppingDate": new Date()});
                }
            }
        };

        $scope.delete = function (item) {
            $scope.shoppingList.splice($scope.shoppingList.indexOf(item), 1);
        };

        $scope.orderByDate = function () {
            $scope.reverse = !$scope.reverse;
        };

        $scope.disabled = function () {
            return $scope.shoppingList.length < 1 ? true : false;
        };

        console.log(homeService.printData());
    }];
});

