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
//= require bootstrap
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*
    variables needed for evaluating stuff
    */

var tempEvaluation = {
  altID: "",
  critID: "",
  rating: "",
}

var evaluations = [];

/*
    variales for creating a Problem, Alternatives and Criteria
    */
var newProblem = {
  title: "",
  description: "",
  selectedMethod: "",
  obligatoryComments: false,
}

var tempCriterium = {
  title: "temp",
  description: "temp",
}
var arrCriteria = [];

var tempAlternative = {
  title: "temp",
  description: "temp",
}

var arrAlternatives = [];

var i = 0;
$(document).ready(function(){
  
  $(".holder").click(function (e) {
      $("#eval-dropdown").slideUp("fast", function() {
            
            /* Changes the text of the dropdown button */
            $(".btn:first-child").text("Evaluate");
            $(".btn:first-child").val("Evaluate");
            $("#eval-dropdown").slideDown("slow");
            var altID = (e.target.id).split(">>>split<<<")[0];
            var critID = (e.target.id).split(">>>split<<<")[1];
            tempEvaluation.altID = altID;
            tempEvaluation.critID = critID;
            });
     });
    
  $(".set-rating").click(function(){
      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());
      tempEvaluation.rating = $(this).text();
      evaluations.push({altID: tempEvaluation.altID, critID: tempEvaluation.critID, rating: tempEvaluation.rating});
      for(var i=0; i<evaluations.length-1; i++)
      {
          if (evaluations[i].altID == tempEvaluation.altID && evaluations[i].critID == tempEvaluation.critID)
          {
              evaluations.splice(i, 1);
              break;
          }
      }
      
      $("#eval-success-msg").slideDown("slow", function() {
        $("#eval-success-msg").slideUp(2100);
        console.log(evaluations.length)
      });
   });  

 // T H E   S C R I P T   F O R   V I E W S   A B O U T   C R E A T I N G   S T U F F   B E G I N N S   H E R E !!!! <<----     
      function addProblemToResult(){
        newProblem.title = document.getElementById("mcd").value;
        newProblem.description = document.getElementById("comment").value;
        if($('#radioObligatory').is(':checked')) 
            newProblem.obligatoryComments = true;
        $("#resultProblemTitle").html(newProblem.title);
        $("#resultProblemDescription").html(newProblem.description);
      }
      
      function addAlternativesToResult(){
        var outputAlternatives = "";
        for (var i = 0; i < arrAlternatives.length; i++) {
          outputAlternatives= outputAlternatives + "<span class=\"resulting-alternatives\">"+arrAlternatives[i].title+"</span>";
        }
        $("#resultAlternatives").html(outputAlternatives);
      }
      
      function addCriteriaToResult(){
        var outputCriteria = "";
        for (var i = 0; i < arrCriteria.length; i++) {
          outputCriteria += "<span class=\"resulting-criteria\">"+arrCriteria[i].title+"</span>";
        }
        $("#resultCriteria").html(outputCriteria);
      }
      
      $("#add-criterion").click(function() {
        if(document.getElementById("textcrit").value.toString().length>0) {
            tempCriterium.title = document.getElementById("textcrit").value;
            tempCriterium.description = document.getElementById("description").value;
            document.getElementById("textcrit").value = '';
            document.getElementById("description").value = '';
            arrCriteria[arrCriteria.length] = {
              title: tempCriterium.title,
              description: tempCriterium.description,
            }
            $("<div class=\"row\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleCrit\">"
                              + tempCriterium.title.toString()  +
                              "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg remove-criterion\" id=\"crit"+i+"\" style=\"border-radius: 50%; display: none;\">          <span class=\"glyphicon glyphicon-minus\"  ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>").insertBefore("#row-input-crit").fadeIn("slow");
            $(".btn-danger").delay(855).fadeIn("slow");
            }
      });
      
  /*    $(".btn").click(function(){
        alert("The button was clicked.");
    });*/
      
      $("#add-alternative").click(function() {
        if(document.getElementById("textalt").value.toString().length>0) {
            tempAlternative.title = document.getElementById("textalt").value;
            tempAlternative.description = document.getElementById("alt-description").value;
            document.getElementById("textalt").value = '';
            document.getElementById("alt-description").value = '';
            arrAlternatives[arrAlternatives.length] = {
              title: tempAlternative.title,
              description: tempAlternative.description,
            };
            $("<div class=\"row\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleAlt\">"
                              + tempAlternative.title.toString()  +
                              "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg\" style=\"border-radius: 50%; display: none;\">          <span class=\"glyphicon glyphicon-minus\"  ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>").insertBefore("#row-input").fadeIn("slow");
            $(".btn-danger").delay(855).fadeIn("slow");
            }
      });
      
      $("#btnBackToProblem").click(function() {
          $("#createAlt").slideUp("slow", function(){
            $("#createProb").slideDown("slow");  
          });
      });
      
      $("#btnToAlternatives").click(function() {
          $("#createProb").slideUp("slow", function(){
            $("#createAlt").slideDown("slow");  
          });
      });
      
      $("#btnBackToAlternatives").click(function() {
          $("#createCrit").slideUp("slow", function(){
            $("#createAlt").slideDown("slow");  
          });
      });
      
      $("#btnToCriteria").click(function() {
          $("#createAlt").slideUp("slow", function(){
            $("#createCrit").slideDown("slow");  
          });
      });
      
      $("#btnBackToCriteria").click(function() {
          $("#overview").slideUp("slow", function(){
            $("#createCrit").slideDown("slow");  
          });
      });
      
      $("#btnToOverview").click(function() {
        addProblemToResult();
        addAlternativesToResult();
        addCriteriaToResult();
          $("#createCrit").slideUp("slow", function(){
            $("#overview").slideDown("slow");  
          });
      });     
}); 