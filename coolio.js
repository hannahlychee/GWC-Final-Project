var myTable = document.getElementById("myTable")

var AllAssignments = [];


function submitFunction() {
  var rowCount = myTable.rows.length
  // console.log("row count: " + rowCount)
  // var cellCount = myTable.rows[rowCount - 1].cells.length


  for (var i = 0; i < rowCount; i++){
    var currentAssignment = {};
    var currentRow = myTable.rows[i];
    // console.log(currentRow);

    var assignmentName = currentRow.cells[0].children[0].value;
    currentAssignment["assignmentName"] = assignmentName
    var pointsRecieved = currentRow.cells[1].children[0].value;
    currentAssignment["pointsRecieved"] = pointsRecieved
    var totalPoints = currentRow.cells[2].children[0].value;
    currentAssignment["totalPoints"] = totalPoints
    var gradePercentage = currentRow.cells[3].children[0].value;
    currentAssignment["gradePercentage"] = gradePercentage
    AllAssignments.push(currentAssignment);
  }
  var submitMessage =document.getElementById("gradesubmitted")
  submitMessage.insertAdjacentHTML("beforeend" , "Grades successfully submitted! Click 'Find You Grade' next!")

}

allMiniGrades = []
totalGrade = []

function findAverageGrade() {
var count = 0;
  for (var j = 0; j < AllAssignments.length; j++){
    var assignmentPoints = AllAssignments[j]["pointsRecieved"]
    var assignmentTotalPoints = AllAssignments[j]["totalPoints"]
    var percentofGrade = AllAssignments[j]["gradePercentage"]
    var pointScore = assignmentPoints / assignmentTotalPoints
    var partOfTotalGrade = pointScore * percentofGrade
    console.log("look here " + partOfTotalGrade)
    allMiniGrades.push(partOfTotalGrade)
    count = partOfTotalGrade + count
  }
var submitMessage =document.getElementById("gradesubmitted");
submitMessage.style.display = 'none';
console.log("look here for total!" + count)
var goodgrade =document.getElementById("goodgrade")
goodgrade.insertAdjacentHTML("beforeend" , "this is your grade: " + count)

if (count <= 1 && count >= .90){
  var abcd = document.getElementById("abcd")
  abcd.insertAdjacentHTML("beforeend" , "You got an A!")}
else if (count <= .89 && count >= .80){
  var abcd = document.getElementById("abcd")
  abcd.insertAdjacentHTML("beforeend" , "You got a B!")}
else if (count <= .79 && count >= .70){
  var abcd = document.getElementById("abcd")
  abcd.insertAdjacentHTML("beforeend" , "You got a C!")}
else if (count <=	.69 && count >= .60){
  var abcd = document.getElementById("abcd")
  abcd.insertAdjacentHTML("beforeend" , "You got a D!")}
else{
  var abcd = document.getElementById("abcd")
  abcd.insertAdjacentHTML("beforeend" , "Either you're only calculating one assignment or you're not doing well sister...")
}
}


// }
//
// function findLetterGrade(){
//   num = 0
//   count = 0
//   var StudentPoints = AllAssignments[num]["pointsRecieved"]
//   var allPoints = AllAssignments[num]["totalPoints"]
//   var percentScore = StudentPoints/allPoints
//   console.log (percentScore)
//   for (count in AllAssignments){
//
//
//   }

function theAddRowFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input class="cell" type="text" name= "aname" placeholder="assignment name"></td>'
    cell2.innerHTML = '<input class="cell" type = "text" name= "bname" placeholder="points you got on asst"></td>'
    cell3.innerHTML ='<input class="cell" type = "text" name= "cname" placeholder="total points of assignment">'
    cell4.innerHTML = '<input class="cell" type = "text" name= "dname" placeholder="percent of grade (decimal)">'

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
