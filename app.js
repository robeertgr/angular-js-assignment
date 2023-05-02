(function () {
  "use strict";

  angular
    .module("LunchCheckApp", [])
    .controller("LunchCheckController", LunchCheckController);

  /** @ngInject */
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.quantity = "";

    $scope.checkIfTooMuch = function () {
      if ($scope.quantity === "") {
        $scope.message = "Please enter data first!";
      } else {
        var quantityItems = $scope.quantity.split(",");

        if (quantityItems <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  }
})();
