var addCtrl = angular.module('addCtrl',['myService']);


addCtrl.controller('addController',['$scope','myappService',function($scope,myappService){
	$scope.nameTxt="";
	$scope.locationTxt="";
	
	
	$scope.customers=myappService.getCustomers();

	 
				 
	$scope.add=	function(){
			if($scope.nameTxt!='' && $scope.locationTxt!='' )
				{
				$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt});
				form.$setPristine();
				form.$setUntouched();
				}else{
				alert("test");
				form.$setDirty();
				}
				}
						  
	

}]);

	 
				 
				 
				 
				 