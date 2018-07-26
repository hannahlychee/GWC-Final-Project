var myTable = document.getElementById("myTable")

function submitFunction() {
  var rowCount = myTable.rows.length
  var cellCount = myTable.rows[rowCount - 1].cells.length
}


function theFunction() {
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
