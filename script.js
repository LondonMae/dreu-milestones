var updates = {
  "Week One": "Before heading to Delaware Dr. Mauriello and I discussed the research project that I will be working with along with the tools and frameworks that we will be using for my part of the research project. My first task was to make an executable using the .NET framework that will track user keystrokes along with the timing of those keystrokes and also certain tasks that the user has open in task manager like how may tabs they are using in Chrome. The goal with this data is to test this with the facial recognition software to see if we can get better results about when a user becomes stressed. Because I already knew C#, the .NET framework was easy to navigate and I coded a simple command line application before getting to the research lab. My next steps will be better managing and storing the data."
};

function generateTable() {
  var table = document.getElementById("weeks");
  var row_count = 0;
  var tr;
  for(var key in updates) {
    row_count++;
    row_count%=5;
    if (row_count == 1) {
      tr = document.createElement("tr");
    }
      var td = document.createElement("td");
      td.innerHTML = key;
       tr.appendChild(td);
      if (row_count == 0) {
         table.appendChild(tr);
       }
   }
     table.appendChild(tr);

}

window.onload = generateTable;
