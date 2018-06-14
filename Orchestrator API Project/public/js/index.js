$(document).ready(function() {
  $("#uipathButton").click(function() {

    var params = {
      "tenancyName": "NikhilAshodariya1",
      "usernameOrEmailAddress": "admin",
      "password": "Bhai@123"
    };

    $.ajax({
      type: "POST",
      url: "https://platform.uipath.com/api/account/authenticate",
      data: JSON.stringify(params),
      contentType: "application/json",
      dataType: "json",
      success: authenticate,
      error: function(data) {
        console.log("error in login");
        console.log(data);
      }
    });

  });
});

function authenticate(data) {
  console.log("successful Login");
  console.log(data);

  var returnedData = JSON.parse(JSON.stringify(data));

  // console.log(returnedData["error"]);
  // console.log(data["error"]);
  if (returnedData["error"] == null) {
    console.log("no error");
    executeRobot(returnedData);

  }

}

function executeRobot(returnedData) {
  var result = returnedData["result"];

  var params = {
    "startInfo": {
      "ReleaseKey": "5774ab5d-2937-4817-98df-a11f602fa68f",
      "Strategy": "Specific",
      "RobotIds": [
        14479
      ],
      "NoOfRobots": 0,
      "Source": "Manual"
    }
  };

  $.ajax({
    type: "POST",
    url: "https://platform.uipath.com/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
    data: JSON.stringify(params),
    contentType: "application/json",
    dataType: "json",
    headers: {
      'Authorization': `Bearer ${result}`
    },
    success: function(data){
      console.log(data);
      console.log("robot executing");
    },
    error: function(data) {
      console.log("error in login");
      console.log(data);
    }
  });

}
