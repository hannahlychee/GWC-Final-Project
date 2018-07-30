var myTable = document.getElementById("myTable")

var AllAssignments = [];
var rowCount = myTable.rows.length

function submitFunction() {
  var cellCount = myTable.rows[rowCount - 1].cells.length
  var currentAssignment = {};

  for (var i = 0; i < rowCount; i++){
    var currentRow = myTable.rows[i];
    var assignmentName = currentRow.cells[0].children[0].value;
    currentAssignment["assignmentName"] = assignmentName
    var pointsRecieved = currentRow.cells[1].children[0].value;
    currentAssignment["pointsRecieved"] = pointsRecieved
    var totalPoints = currentRow.cells[2].children[0].value;
    currentAssignment["totalPoints"] = totalPoints
    var gradePercentage = currentRow.cells[3].children[0].value;
    currentAssignment["gradePercentage"] = gradePercentage
    console.log(AllAssignments)
    AllAssignments.push(currentAssignment)
    // for (var j = 0; j < currentRow.cells.length; j++){
    //   var currentCellValue = currentRow.cells[j].children[0].value;
    //   console.log(currentCellValue)
  }
}

allMiniGrades = []
totalGrade = []

function findAverageGrade() {
  i = 0
  var assignmentPoints = AllAssignments[i]["pointsRecieved"]
  var assignmentTotalPoints = AllAssignments[i]["totalPoints"]
  var percentofGrade = AllAssignments[i]["gradePercentage"]
  var pointScore = assignmentPoints / assignmentTotalPoints
  var partOfTotalGrade = pointScore * percentofGrade
  console.log("look here " + partOfTotalGrade)
  console.log("What this assignment is worth: " + pointScore)
  i = i + 1
  allMiniGrades.push(partOfTotalGrade)

  for (var j = 0; j < rowCount; j++){
    agrade = allMiniGrades[j]



  }

}

function findLetterGrade(){
  num = 0
  count = 0
  var StudentPoints = AllAssignments[num]["pointsRecieved"]
  var allPoints = AllAssignments[num]["totalPoints"]
  var percentScore = StudentPoints/allPoints
  console.log (percentScore)
  for (count in AllAssignments){
    

  }
}






function theAddRowFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" name= "fname"  placeholder="asst name">';
    cell2.innerHTML = '<input type="text" name= "lname"  placeholder="points received on asst">';
    cell3.innerHTML = '<input type="text" name= "lname" placeholder="total points of asst">';
    cell4.innerHTML = '<input type="text" name= "lname" placeholder="percent of grade">';
}







function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//
// var classInfo = {}
// var allClassEntries = []
//
// var submitButton = document.getElementById("submitButton")
// submitButton.onclick = getFormData
//
// function getFormData() {
//   var numOfClasses  = document.getElementsByName("numofclasses").value;
// }
