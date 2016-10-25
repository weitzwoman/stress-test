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
      $("#stressOutput").append(stressor + "<br>");
      stressorsArray.push(stressor);
    });
    var totalStressors = stressorsArray.length;

//symptoms
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptom = $(this).val();
      $("#symptomsOutput").append(symptom + "<br>");
      symptomsArray.push(symptom);
    });
    var totalSymptoms = symptomsArray.length;

//management techniques
    $("input:checkbox[name=techniques]:checked").each(function() {
      var technique = $(this).val();
      $("#techniquesOutput").append(technique + "<br>");
      techniquesArray.push(technique);
    });
    var totalTechniques = techniquesArray.length;

    stressIndex = stressIndexCalc(totalStressors, totalSymptoms, totalTechniques);
    console.log(stressIndex);

    if (stressIndex >= 9) {
      alert("high stress");
      $("#highStress").show();
      $("#highStressStressors").append(stressorsArray);
      $("#highStressSymptoms").append(symptomsArray);
      $("#highStressTechniques").append(techniquesArray);
    }

    // $("#stressOutput").show();
    // $("#techniquesOutput").show();

    // $("#inputForm").hide();

    event.preventDefault();
    console.log("stressors: " + stressorsArray)
    console.log("symptoms: " + symptomsArray)
    console.log("techniques: " + techniquesArray)
  });
});
