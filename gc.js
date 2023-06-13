function addRows(){
    var table = document.getElementById("fullTable");
    var row = table.insertRow(-1);
    var assignmentCell = row.insertCell(0);
    var gradeCell = row.insertCell(1);
    var weightCell = row.insertCell(2);
    
    assignmentCell.innerHTML = '<input type="text" class="assignment" />';
    gradeCell.innerHTML = '<input type="number" class="grade" />';
    weightCell.innerHTML = '<input tupe ="number" class ="weight" />';
  
}

function clearAll(){
    null;
}

function calculate(){
    null;
}

document.getElementById('textboxid').style.height="20px";
document.getElementById('textboxid').style.fontSize="14pt";