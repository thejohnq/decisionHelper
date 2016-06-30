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

var arrCriteria = new Array();
var tempCriterium = {
  title: "temp",
  description: "temp",
}

var arrAlternatives = new Array();
var tempAlternative = {
  title: "temp",
  description: "temp",
}

var i = 0;
$(document).ready(function(){
  //
      $("#add-criterion").click(function() {
        if(document.getElementById("textcrit").value.toString().length>0) {
            tempCriterium.title = document.getElementById("textcrit").value;
            tempCriterium.description = document.getElementById("description").value;
            document.getElementById("textcrit").value = '';
            document.getElementById("description").value = '';
            tempCriterium.description = document.getElementById("textcrit").value;;
            arrCriteria.push(tempCriterium);
    //        $("#row-input").animate({marginTop: "20px"}, "slow");
            i++;
            $("<div class=\"row\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleCrit\">"
                              + tempCriterium.title.toString()  +
                              "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg remove-criterion\" id=\"crit"+i+"\" style=\"border-radius: 50%; display: none;\">          <span class=\"glyphicon glyphicon-minus\"  ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>").insertBefore("#row-input").fadeIn("slow");
            $("#row-input").animate({marginTop: "0px"}, "slow");
            $(".btn-danger").delay(855).fadeIn("slow");
            }
      });
      
      $(".sidewhite").click(function(){
        alert("The button was clicked.");
    });
      
      $("#add-alternative").click(function() {
        if(document.getElementById("textalt").value.toString().length>0) {
            tempAlternative.title = document.getElementById("textalt").value;
            tempAlternative.description = document.getElementById("alt-description").value;
            document.getElementById("textalt").value = '';
            document.getElementById("alt-description").value = '';
            tempAlternative.description = document.getElementById("textalt").value;;
            arrAlternatives.push(tempAlternative);
    //        $("#row-input").animate({marginTop: "20px"}, "slow");
            $("<div class=\"row\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleAlt\">"
                              + tempAlternative.title.toString()  +
                              "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg\" style=\"border-radius: 50%; display: none;\">          <span class=\"glyphicon glyphicon-minus\"  ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>").insertBefore("#row-input").fadeIn("slow");
            $("#row-input").animate({marginTop: "0px"}, "slow");
            $(".btn-danger").delay(855).fadeIn("slow");
            }
      });
      
      $("#btnToOverview").click(function() {
          
     /*     $.ajax({
            type: "POST",
            url: "/mcd_creating/postCriteria",
            data: { criteriaJSON: JSON.stringify(arrCriteria) },
            success: function() { alert("Success!"); }
          });*/
          $.post("mcd_creating/postCriteria.rb",
            {
                criteriaJSON: JSON.stringify(arrCriteria)
            },
            function(){
                window.location.reload();
          });
          
        //  window.location.href = "/mcd_creating/overview"
      })
      
}); 