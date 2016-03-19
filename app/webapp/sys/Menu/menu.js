var menuModule;

menuModule = angular.module("menuApp", [])
.config(function(){

    var title = "";

    if (isLocal()) {
        title = "Installed"
    } else {
        title = (window.location.host.split("."))[0];
    }
    $(".settitle").text(title);
});

menuModule.controller("MenuController", ['$scope',
    function($scope){

    	$scope.findall = function() {
	 			getMenu(function(jobj){
				 //  console.log("In getMenu");

   				    if (jobj[0].rtn && jobj[0].db > 0) {
						 jobj.shift();
       	  	             $scope.sites = jobj;
						 $scope.$apply();
    			    }
				 });
			 }

        $scope.findall();


        $scope.showitem = function(site){
            return(site.id != -1);
        }

        $scope.showremove = function(){
            return(isLocal());
        }


		$scope.newurl = function(site){
			location.assign(site.href);
		}


		$scope.delSite = function(site){
			if (!isLocal()) {
				alertmodal("Can remove site only from phone");
			} else {
			    alertmodal("Continue to remove : " + site.app, function() {

				    if (android.removeSite(site.id)){
					    site.id = -1;
					    $scope.$apply();
				    }
			    });
			}
		}

}]);


function isLocal(){

    if (typeof android !== "undefined" &&
        typeof android.removeSite === "function"){
            var target = window.location.hostname + ":" + window.location.port
            return(target == android.subsectHost());
    } else {
        return(false);
    }
}


function alertmodal(str, func){

	generateAlertHtml();

	$("#continueop").off("click").removeClass("hidden");
	$('#modaltitle').removeClass("alert-danger").removeClass("alert-info");
	if (typeof func !== "function"){
		$('#modaltitle').text("Alert").addClass("alert-danger");
		$("#continueop").addClass("hidden")
	} else {
		$('#modaltitle').text("Confirm").addClass("alert-info");
		$("#continueop").one("click", func);
	}

  $('#alertmess').text(str)
  $('#alertmodal').modal('show')
}


function generateAlertHtml(){

	if ($("#alertmodal").length == 0){
		$('body').append(
'<div id="alertmodal" class="modal fade"><div class="modal-dialog"><div class="modal-content"> \
<div class="modal-header"><h4 id="modaltitle" class="modal-title alert-danger" \
style="padding-left: 10px">Alert</h4></div><div class="modal-body"><p id="alertmess"></p> \
</div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal"> \
Close</button><button id="continueop" class="btn btn-primary hidden" \
data-dismiss="modal">Continue</button></div></div></div>/div>'
		);
	}
}