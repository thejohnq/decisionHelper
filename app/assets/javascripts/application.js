// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var arrCriteria = [];
var tempCriterium = {
  title: "temp",
  description: "temp",
}
$(document).ready(function(){
  //if(document.getElementById("textcrit").value.length>0)
      $("#add-criterion").click(function() {
        tempCriterium.title = document.getElementById("textcrit").value;
        tempCriterium.description = document.getElementById("description").value;
        document.getElementById("textcrit").value = '';
        document.getElementById("description").value = '';
        tempCriterium.description = document.getElementById("textcrit").value;;
        arrCriteria.push(tempCriterium);
        var output = "<div class=\"row\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleCrit\">"
                          + tempCriterium.title.toString()  +
                          "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg\" style=\"border-radius: 50%\">          <span class=\"glyphicon glyphicon-minus\" ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>";
        $('#wrapper').append(output);
      });
}); 