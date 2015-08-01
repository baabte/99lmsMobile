angular.module('candidate').controller('LoginCtrl',['login','$scope','$rootScope','localStorageService','$state',function(login,$scope,$rootScope,localStorageService,$state){
$scope.data={};
// $scope.data.socialData = '';
$scope.data.from_where="direct";
$scope.data.domainName = 'baabtra.99lms.com';
$scope.loginFn = function() {
	var promise = login.fnloginService($scope.data);
	promise.then(function (response) {
		// console.log($scope.logData);
		$scope.logData=angular.fromJson(JSON.parse(response.data));

		      if(angular.equals($scope.logData,null)){
        			navigator.notification.alert(
						'Invalid username or password, Please try again. ',// message
						    function(a){console.log(a)},// callback
						    'Sorry..!', // title
						    'Ok'// buttonName
						);
      			}
      			else if(angular.equals($scope.logData.ActiveUserData,undefined)){
      				// console.log($scope.logData.ActiveUserData.roleMappingObj);
      				navigator.notification.alert(
						'Invalid username or password, Please try again. ',// message
						    function(a){console.log(a)},// callback
						    'Sorry..!', // title
						    'Ok'// buttonName
						);	
      			}

      			else if(!angular.equals($scope.logData.ActiveUserData.roleMappingObj.fkRoleId,3)){
      				// console.log($scope.logData.ActiveUserData.roleMappingObj);
      				navigator.notification.alert(
						'Invalid username or password, Please try again. ',// message
						    function(a){console.log(a)},// callback
						    'Sorry..!', // title
						    'Ok'// buttonName
						);	
      			}
      			else{
      				if($scope.logData.result==='true') {
			   	  var logdata=$scope.logData.ActiveUserDataId.$oid.concat($scope.logData.userLoginId);
			  	  // localStorageService.add('logDatas',logdata);
			  	  localStorage['ls.logDatas']=logdata;
			  	  localStorageService.add('activeUserData',$scope.logData);
			  	  $rootScope.userinfo=$scope.logData;//if login is ok put it in the login info variable.
		            // console.log($rootScope.userinfo);
		           
		          		$state.go('home');
					}else{
						navigator.notification.alert(
					'Invalid username or password, Please try again. ',// message
					    function(a){console.log(a)},// callback
					    'Sorry..!', // title
					    'Ok'// buttonName
					);
					}		
      			}
			
	});
	promise.error(function (response) {
		console.log('err');
	});
};

}]);