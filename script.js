var updates = {
  "Week One": "Before heading to Delaware Dr. Mauriello and I discussed the research project that I will be working with along with the tools and frameworks that we will be using for my part of the research project. My first task was to make an executable using the .NET framework that will track user keystrokes along with the timing of those keystrokes and also certain tasks that the user has open in task manager like how may tabs they are using in Chrome. The goal with this data is to test this with the facial recognition software to see if we can get better results about when a user becomes stressed. Because I already knew C#, the .NET framework was easy to navigate and I coded a simple command line application before getting to the research lab. My next steps will be better managing and storing the data.","Week Two": "I arrived in Delaware on Sunday night and started working in the actual lab on Monday. In the begginning of the week I got my bearings around campus and toured the lab space. I countinued the work from before arriving to delaware and I met everybody else working in the lab. My tasks included extending the keylogger to store computed attributes such as average delay time (time between end of one action and start of another), keys per minute, and average length of keystroke. I coded an additional python script to store the collected keyboard actions in a csv file and stored the additional computed attributes in another CSV file. I also read three interesting research papers, focusing on limitations with facial recognition to predict emotions and the use of context to improve these predictions. My next tasks involve implementing a mouse logger in a similar way to the keylogger and looking more into past research on the use of context to improve emotionn detection"
};

function displayUpdate(key) {
  var curr =  document.getElementById("stuff");
  var next = document.getElementById("update");
  next.innerHTML += "<h1 class = 'dropdown'> " + key + " </h1>";
  next.innerHTML += updates[key];
  curr.style.display="none";
  next.style.display = "inline"
}

function displayMain() {
  var curr =  document.getElementById("update");
  var next = document.getElementById("stuff");
  curr.style.display="none";
  next.style.display = "inline"
}

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
      td.setAttribute("id", key);
      console.log(key)
      td.addEventListener("click", function(){ displayUpdate(this.id);
      console.log(this.id)}, false);
       tr.appendChild(td);
      if (row_count == 0) {
         table.appendChild(tr);
       }
   }
     table.appendChild(tr);

}

window.onload = generateTable;
