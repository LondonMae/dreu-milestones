var updates = {
  "Week One": "Before heading to Delaware Dr. Mauriello and I discussed the research project that I will be working with along with the tools and frameworks that we will be using for my part of the research project. My first task was to make an executable using the .NET framework that will track user keystrokes along with the timing of those keystrokes and also certain tasks that the user has open in task manager like how may tabs they are using in Chrome. The goal with this data is to test this with the facial recognition software to see if we can get better results about when a user becomes stressed. Because I already knew C#, the .NET framework was easy to navigate and I coded a simple command line application before getting to the research lab. My next steps will be better managing and storing the data.",
  "Week Two": "I arrived in Delaware on Sunday night and started working in the actual lab on Monday. In the begginning of the week I got my bearings around campus and toured the lab space. I countinued the work from before arriving to delaware and I met everybody else working in the lab. My tasks included extending the keylogger to store computed attributes such as average delay time (time between end of one action and start of another), keys per minute, and average length of keystroke. I coded an additional python script to store the collected keyboard actions in a csv file and stored the additional computed attributes in another CSV file. I also read three interesting research papers, focusing on limitations with facial recognition to predict emotions and the use of context to improve these predictions. My next tasks involve implementing a mouse logger in a similar way to the keylogger and looking more into past research on the use of context to improve emotion detection. \n Update: I implemented the mouse logger as well, and I ran the key and mouse logger in parallel using pythons multiprocessing library to see how it will be implemented. It was cool to see my code coming together in the test file. Next week I will try to run more tests on the individual functions to make sure the computations are correct and also add options to look at the attributes over intervals of time rather than other the entire session. We also discussed visualizing the data.", "Week Three": "This week in the lab we are working on integrating all of our technologies into one executable so we can begin small pilot testing. I set up visualizations of my key and mouse logging data, which provided interesting insight. I could also use these visualizations to confirm that my attributes produced accurate numbers/to test my code. One issue I ran into was the way I initially implemented the mouse and keyboard listeners. This was a simple fix as I used a blocking method for the listeners instead of my non-blocking method. Because the threading of the listeners caused my application to slow down, I learned a lot about daemon threads and threading with python in general, which was fun to research. To make sure my code was optimized, I ran some tests on the cpu usage of my computer before and after running my application in the background. I let my code run on myself throughout the workday, which gave me a large dataset to visualize and test with. I am excited to get into the testing phase since most of the engineering phase is starting to piece together. Outside of the lab, I've been exploring Delaware and the east coast. Over the weekend I took a short trip to New York. I spent most of my time walking around Lower Manhattan and Brooklyn, eating food, and people watching. I haven't spent much time on the east coast, so it was a nice break/adventure away from work!",
  "Week Four": "We are starting to run all of the technologies together, which includes the facial recognition and my loggers. Before combing the facial recognition, I created an executable and ran it on myself over the entire workday, whcih showed more interesting graphs over a longer time period. The next day while I worked on formatting the EXE for all components, I ran the logger EXE again. This time I manually logged when I changed a task and maintained a mini journal so I could subjectively recognize any correlations between the task I was doing at the time and any deviations in computer behavior. Once we have all of the technologies combined, I plan to test this on myself and run the data through Weka to find any correlations between my logs and the facial recognition, as well as combine or reduce any redundant or unimportant features that I have collected. We talked about running logistic regression, simple correlation analysis, random forest, etc...\n\nFor a random life update, I plan on checking out some of the beaches in Delaware this weekend! I have spent my days after work exploring more of the state parks. I'm hoping to find some nature-filled beach hikes this weekend.",
  "Week Five":"This week we are really wrapping up the engineering side and starting to test our executable on members in the lab. I was really excited to get the executable working on MacOS as well, since they originally planned to only test on Windows users. Now we will have a bigger pool of people to test on. Getting the executable to compile was frustrating since a lot of the errors were Python library compatibility issues with PYinstaller. This made it harder to debug than other programming issues because the code worked in the command line and the pyinstaller tracebbacks weren't always easy to follow. But, during this process I learned about virtual environments, which I used to test and compile using different versions without modifying the environment set up on my laptop. I think this will pe helpful for furter developemnt because I did not know much about setting up virtual environments before this. We also have the full application working with th eGUI, which allows the user to start and stop their logging without accessing the command line. Since we are now able to test, I think my next steps are to gather attributes and a emotion classes from the facial recognition over an interval into a csv file which I can put in .aarf format for Weka. Although our final product will use class levels submitted by the user, comparing the emotion prediction of the facial recognition the the computer context behaviors may give us some insigt. Before getting the data in Weka, I will spend a while cleaning through the data and storing attributes over an interval. I will also have to think about how to match a class label, since the data used is over a time interval. As of now, I think I will use the emotion most often predicted over the time interval as the class labbel, but this will likely change over time. One thing that might be interesting to measure is the frequency of emotion changes over an interval and how that may relate to less stable moods."
};

var weeks = ["Week One", "Week Two", "Week Three", "Week Four", "Week Five"];

var curr_slide = 0

function displayUpdate(key) {
  var curr =  document.getElementById("stuff");
  var next = document.getElementById("journal");
  var update = document.getElementById("update");
  update.innerHTML = "<h1> " + key + " </h1>";
  curr_slide = weeks.indexOf(key)
  update.innerHTML += "<p>" + updates[key] + "</p>";
  console.log(next.innerHTML);
  curr.style.display="none";
  next.style.display = "inline"
  update.style.display = "inline"
}

function displayMain() {
  var curr =  document.getElementById("journal");
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

function nextWeek(i) {
  curr_slide += i;
  if (curr_slide >= weeks.length) {
    curr_slide = 0;
  }
  if (curr_slide < 0) {
    curr_slide = weeks.length-1;
  }

  var key = weeks[curr_slide];
  update.innerHTML = "<h1> " + key + " </h1>";
  curr_slide = weeks.indexOf(key)
  update.innerHTML += "<p>" + updates[key] + "</p>";
  console.log(next.innerHTML);

}

window.onload = generateTable;
