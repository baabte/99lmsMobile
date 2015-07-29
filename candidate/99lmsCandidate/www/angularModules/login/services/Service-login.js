angular.module('candidate').service('login',['bbConfig','$http',function(bbConfig,$http){

this.fnloginService=function(data)
	 {
      // console.log(data_to_send);
      return $http({//call to the webservice
      method: 'POST',
      url: bbConfig.BWS+'mobileLogin/',
      data:angular.toJson({"loginData":data}), //passing the login credentials          
      })
	 }; 

}]);