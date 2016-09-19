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

var tempDecision = {
  username: "",
  rating: "",
  comment: "",
  alternative_id: "",
  criterion_id: "",
  agreed_decision_id: "",
}

var decisions = [];

/*
    variales for creating a Problem, Alternatives and Criteria
    */
var newProblem = {
  title: "",
  description: "",
  creator: "",
  algorithm_id: "",
  selectedMethod: "",
  obligatoryComments: false,
}

var tempCriterium = {
  title: "temp",
  description: "temp",
  priority: 0,
  problem_id: 0,
}
var arrCriteria = [];

var tempAlternative = {
  title: "temp",
  description: "temp",
  problem_id: 0,
}

var arrAlternatives = [];

var tempHolderID = 0;

var i = 0;
$(document).ready(function(){
  
  
  /*
        S C R I P T   R E L A T E D   T O   E V A L U A T I N G
    */
  
  $(".holder").click(function (e) {
            tempHolderID = e.target.id;
            var holderText = $(this).text();
      $("#eval-dropdown").slideUp("fast", function() {
            
            /* Changes the text of the dropdown button */
            var alternative_id = (e.target.id).split("split")[0];
            var criterion_id = (e.target.id).split("split")[1];
            tempDecision.alternative_id = alternative_id;
            tempDecision.criterion_id = criterion_id;
            $(".btn:first-child").text(holderText);
            $(".btn:first-child").val(holderText);
            $("#eval-dropdown").slideDown("slow");
            console.log(tempHolderID);
            console.log(holderText);
            /* new */
            
            });
     });
    
  $(".set-rating").click(function(){
      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());
      
      $("#"+tempHolderID).text($(this).text());
      $("#"+tempHolderID).val($(this).text());
      tempDecision.rating = $(this).text();
      decisions.push({alternative_id: tempDecision.alternative_id, criterion_id: tempDecision.criterion_id, rating: tempDecision.rating});
      for(var i=0; i<decisions.length-1; i++)
      {
          if (decisions[i].alternative_id == tempDecision.alternative_id && decisions[i].criterion_id == tempDecision.criterion_id)
          {
              decisions.splice(i, 1);
              break;
          }
      }
      
      
      // Showing message: "Your evaluation was saved" after choosing an evaluation
      $("#eval-success-msg").slideDown("slow", function() {
   //     document.getElementById("demo").innerHTML = decisions;
        $("#eval-success-msg").slideUp(2100);
      });
   });




 // T H E   S C R I P T   F O R   V I E W S   A B O U T   C R E A T I N G   S T U F F   B E G I N N S   H E R E !!!! <<----     
      function addProblemToResult(){
        newProblem.title = document.getElementById("problem_title").value;
        newProblem.description = document.getElementById("problem_description").value;
        newProblem.creator = document.getElementById("problem_creator").value;
        if($('#problem_obligatoryComments').is(':checked')) 
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
        if(document.getElementById("criterion_title").value.toString().length>0) {
            tempCriterium.title = document.getElementById("criterion_title").value;
            tempCriterium.description = document.getElementById("criterion_description").value;
            tempCriterium.priority = document.getElementById("criterion_priority");
            document.getElementById("criterion_title").value = '';
            document.getElementById("criterion_description").value = '';
            arrCriteria[arrCriteria.length] = {
              title: tempCriterium.title,
              description: tempCriterium.description,
              priority: tempCriterium.priority,
            }
            $("<div class=\"row\" id=\"crit"+(arrCriteria.length-1)+"\">  <div class=\"col-sm-1 sidenav sidewhite\">  </div>  <div class=\"col-sm-8 text-centre\"> <div class=\"titleCrit\">"
                              + tempCriterium.title.toString()  +
                              "</div> </div>  <div class=\"col-sm-2 text-centre\">      <div class=\"btn btn-danger btn-lg remove-criterion\" id=\"remove-crit"+(arrCriteria.length-1)+"\" style=\"border-radius: 50%; display: none;\">          <span class=\"glyphicon glyphicon-minus\"  ></span>      </div>  </div>  <div class=\"col-sm-1 sidenav sidewhite\">  </div></div>").insertBefore("#row-input-crit").fadeIn("slow");
            $(".btn-danger").delay(855).fadeIn("slow");
            }
      });
      
      $("#crit0").click(function(){
     //    var tempID = $(this).id;
         console.log("tempID");
      });
      
      $("#add-alternative").click(function() {
        if(document.getElementById("alternative_title").value.toString().length>0) {
            tempAlternative.title = document.getElementById("alternative_title").value;
            tempAlternative.description = document.getElementById("alternative_description").value;
            document.getElementById("alternative_title").value = '';
            document.getElementById("alternative_description").value = '';
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