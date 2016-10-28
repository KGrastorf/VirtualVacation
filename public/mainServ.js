angular.module("vvApp")
.service("mainServ", function($http){
  this.getDest = function() {
      return $http({
          method: "GET",
          url: "/attr"
      }).then(function(response) {
          return response.data;
      });
  };

  this.newDest = function(place) {
      return $http({
          method: "POST",
          url: "/attr",
          data: place
      }).then(function(response) {
          console.log(response);
          return response.data;
      });
  };

  this.changeDest = function(place) {
      return $http({
          method: "PUT",
          url: "/attr/" + place._id,
          data: place
  }).then(function(response) {
          return response;
      });
  };

  this.deleteDest = function(place) {
      return $http({
          method: "DELETE",
          url: "/attr/" + place._id
  }).then(function(response) {
          return response;
      });
  };


  });
