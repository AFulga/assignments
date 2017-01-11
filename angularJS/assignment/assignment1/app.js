(function(){
	var app = angular.module("LunchCheck", []);
	app.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$injector = "$scope";
	function LunchCheckController($scope){
		$scope.items = "";
		$scope.message ="";

		$scope.setMessage = function(){

			var count = 0;
			var item = $scope.items.split(",");
			for(var i=0;i<item.length;i++)
			{
				if(item[i].replace(/ /g,"").length>0)
					count++;
			}
			console.log(count);
			if(count>0)
			{
				if(count<=3)
					$scope.message = "Enjoy!";
				else
					$scope.message = "Too much!";
			}
			else
				$scope.message = "Please enter data first";
		}
	}
})();