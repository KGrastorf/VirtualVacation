angular.module("vvApp")
.service("mainServ", function($http){
  this.getDest = function() {
      return $http({
          method: "GET",
          url: "/dest"
      }).then(function(response) {
          return response.data;
      });
  };

  this.newDest = function(attr) {
      return $http({
          method: "POST",
          url: "/dest",
          data: attr
      }).then(function(response) {
          console.log(response);
          return response.data;
      });
  };

  this.changeDest = function(attr) {
      return $http({
          method: "PUT",
          url: "/dest/" + attr._id,
          data: attr
  }).then(function(response) {
          return response;
      });
  };

  this.deleteDest = function(attr) {
      return $http({
          method: "DELETE",
          url: "/dest/" + attr._id
  }).then(function(response) {
          return response;
      });
  };


  });
