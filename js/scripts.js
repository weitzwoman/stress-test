stressorsArray = [];
symptomsArray = [];
techniquesArray = [];
totalSymptoms = 0;
totalStressors = 0;
totalTechniques = 0;

var stressIndexCalc = function(totalStressors, totalSymptoms, totalTechniques) {
  console.log(typeof(totalStressors));
  console.log(totalStressors + totalSymptoms + totalTechniques);
  var index = totalStressors + totalSymptoms * 2 - totalTechniques;
  return index;
};

$(document).ready(function() {
  $("form#stressTest").submit(function(event) {
//stressors
    $("input:checkbox[name=stress]:checked").each(function() {
      var stressor = $(this).val();
      $("#stressors").append(stressor + "<br>");
      stressorsArray.push(stressor);
    });
    var totalStressors = stressorsArray.length;

//symptoms
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptom = $(this).val();
      $("#symptoms").append(symptom + "<br>");
      symptomsArray.push(symptom);
    });
    var totalSymptoms = symptomsArray.length;

//management techniques
    $("input:checkbox[name=techniques]:checked").each(function() {
      var technique = $(this).val();
      $("#techniques").append(technique + "<br>");
      techniquesArray.push(technique);
    });
//calculate total stressors and display accordingly
    var totalTechniques = techniquesArray.length;
    stressIndex = stressIndexCalc(totalStressors, totalSymptoms, totalTechniques);
    console.log(stressIndex);
//Health Risk
if (totalSymptoms >=3) {
  $("#results").addClass("bg-danger");
  alert("You have three or more unhealthy symptoms. You should consult a physician");
}

//Stress Index
    if (stressIndex >= 9) {
      $("#results").addClass("bg-danger");
    }
    else if (stressIndex < 9 && stressIndex >= 3) {
      $("#results").addClass("bg-warning");
    } else {
      $("#results").addClass("bg-success");
    }

    $("#results").show();
    $("#inputForm").hide();
    event.preventDefault();
  });
});
