$(document).ready(function() {
  console.log("page alive");
  $("form#stressTest").submit(function(event) {
    console.log("form submit");
//stressors
    $("input:checkbox[name=stress]:checked").each(function() {
      var stressor = $(this).val();
      $("#outputStress").append(stressor + "<br>");
    });

//management techniques
    $("input:checkbox[name=management]:checked").each(function() {
      var managementTechnique = $(this).val();
      $("#outputManagement").append(managementTechnique + "<br>");
    });
    $("#outputStress").show();
    $("#outputManagement").show();
    $("#inputForm").hide();


    event.preventDefault();
  });
});
