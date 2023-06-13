function addRows(){
    var table = document.getElementById("fullTable");
    var row = table.insertRow(-1);
    var assignmentCell = row.insertCell(0);
    var gradeCell = row.insertCell(1);
    var weightCell = row.insertCell(2);
    
    assignmentCell.innerHTML = '<input type="text" class="assignment" />';
    gradeCell.innerHTML = '<input type="number" class="grade" />';
    weightCell.innerHTML = '<input type ="number" class ="weight" />';
  
}

function clearAll(){
    let m = document.getElementById("fullTable");
    // while (m.rows.length > 2) {
    //     m.deleteRow();
    // }
    for (var i = m.rows.length -1; i > 1; i--) {
        m.deleteRow(i);
    }
    m.rows[1].cells[0].innerHTML = '<input type="text" class="assignment" />';
    document.getElementById("finalanswer").innerHTML = "";

}

function calculate(){
    let grades = document.getElementsByClassName("grade");
    let weights = document.getElementsByClassName("weight");
    let currentGrade = 0;
    let currentWeight = 0;
    let total = 0;
    let products = 0;
    let weightTotal = 0;
    for (let i = 0; i < grades.length; i++) {
        currentGrade = parseFloat(grades[i].value);
        currentWeight = parseFloat(weights[i].value);
        products += currentGrade * currentWeight;
        weightTotal += currentWeight;
    }
    total = products/weightTotal;
    document.getElementById("finalanswer").innerHTML = total.toString()+ "%";
    

}


