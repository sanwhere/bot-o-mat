const form = document.getElementById("robot-form");
const titleElement = document.querySelector("#title");
const robotypeElement = document.querySelector("#robotype");
const cardbody = document.querySelectorAll(".robot-container")[0];
const clear = document.getElementById("clear-robots");

var tasks = [{
    description: 'do the dishes',
    eta: 1000,
}, {
    description: 'sweep the house',
    eta: 3000,
}, {
    description: 'do the laundry',
    eta: 10000,
}, {
    description: 'take out the recycling',
    eta: 4000,
}, {
    description: 'make a sammich',
    eta: 7000,
}, {
    description: 'mow the lawn',
    eta: 20000,
}, {
    description: 'rake the leaves',
    eta: 18000,
}, {
    description: 'give the dog a bath',
    eta: 14500,
}, {
    description: 'bake some cookies',
    eta: 8000,
}, {
    description: 'wash the car',
    eta: 20000,
}, ]

// Listen all Events;
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addRobot);
    document.addEventListener("DOMContentLoaded", function() {
        let robots = Storage.getRobotsFromStorage();
        UI.loadAllRobots(robots);
    });
    cardbody.addEventListener("click", deleteRobot);
    clear.addEventListener("click", clearAllRobots);
    renderTasks(tasks);
}

function addRobot(e) {
    const title = titleElement.value;
    const robotype = robotypeElement.value;
    const url = $("#robotype :selected").map(function() {
        return $(this).attr('src');
    }).get();
    if (title === "") {
        // Error message 
        UI.displayMessages("Give him a name!", "danger");
    } else {
        // New Robot
        const newRobot = new Robot(title, robotype, url);
        UI.addRobotToUI(newRobot); // Add Robot to UI
        Storage.addRobotToStorage(newRobot); // Add Robot to Storage
        UI.displayMessages("Robot has been added succesfully!", "success");
    }
    UI.clearInputs(titleElement);
    e.preventDefault();
}

function deleteRobot(e) {
    console.log(e.target.id);
    if (e.target.id === "delete-robot") {
        UI.deleteRobotFromUI(e.target);
        Storage.deleteRobotFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Robot Deleted Succesfully :(", "success");

    }
}

function clearAllRobots() {
    if (confirm("Oh no! Are you sure?")) {
        UI.clearAllRobotsFromUI();
        Storage.clearAllRobotsFromStorage();
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function stopPulse() {
    var allElements = document.querySelectorAll("#roboImg");
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.animation = "none";
    }
}

function startPulse() {
    var allElements = document.querySelectorAll("#roboImg");
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].getAttribute("data-robot-busy") === "0"){
            allElements[i].style.animation = "shadow-pulse 1s infinite";
        }
    }
}

function dragStart(ev) {
    console.log("dragStart");
    console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
    startPulse();
}

function dragDrop(ev) {
    console.log("dragDrop");
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text"); //Get task id
    const eta = document.querySelector("#" + data).getAttribute("data-task-eta"); //Get eta
    const taskName = document.querySelector("#" + data).querySelector("span").textContent;
    console.log(taskName);
    const robotName = ev.target.parentElement.parentElement.querySelectorAll("td")[1].textContent; //Get Name of the robot
    const robotUrl = ev.target.src; //Get src of the robot photo
    
    const robotWorking = ev.target.parentElement.querySelectorAll("img")[0].src = "images/triple-gears-loading-icon.svg"; //change robot image when busy

    //disable robot drop area when robot busy
    
    console.log(robotName);
    console.log(robotWorking);
    const busy = document.querySelector(".robot-" + robotName).getAttribute("data-robot-busy");
    console.log('BUSY => ' + busy);
    if(busy === "0"){ //if robot is not busy, you can give him a task.
        document.querySelector(".robot-" + robotName).setAttribute("data-robot-busy", "1"); //make robot busy
        console.log('BUSY => ' + document.querySelector(".robot-" + robotName).getAttribute("data-robot-busy"));
        setTimeout(function (taskName, robotName) { //waiting for complete tasks 
            UI.displayMessages(robotName + " completed " + "'" + taskName + "'" + " task succesfully!", "success");
            ev.target.src = robotUrl; //retreve robot image
            //make robot available
            document.querySelector(".robot-" + robotName).setAttribute("data-robot-busy", "0");
            ev.target.parentElement.parentElement.querySelector(".delete-robot-row").querySelector("a").style.display = "";
        }, eta, taskName, robotName);

        ev.target.parentElement.parentElement.querySelector("#roboImg").appendChild(document.getElementById(data));
        //countdown timer start
        ev.target.parentElement.parentElement.querySelector(".delete-robot-row").querySelector("a").style.display = "none";
        var div = document.createElement("div");
        div.innerHTML = "<div id='countdown-"+robotName+"'>" + eta/1000 +" sn" +"</div>";
        ev.target.parentElement.parentElement.querySelector(".delete-robot-row").appendChild(div.firstChild);
        var counter = eta/1000; //convert milisecond to second
        var Countdown = setInterval(function (robotName) {
            document.querySelector("#countdown-" + robotName).textContent = counter-1 + " sn";
            counter = counter-1;
            if (counter <= 0) {
                console.log("DONE!!" + robotName);
                document.getElementById("countdown-" + robotName).remove();
                clearInterval(Countdown);
            }
        }, 1000, robotName);
        //countdown timer finish

    }else{
        //if robot busy, you can not give him a task (do nothing)
    }
  
    stopPulse();
}

function dragEnd(ev) {
    console.log("dragEnd");
    console.log(ev.target.getAttribute("data-task-complete"));
    ev.target.setAttribute("data-task-complete", '1');
    console.log(ev.target.getAttribute("data-task-complete"));
    ev.preventDefault();
    stopPulse();
}

function renderTasks(tasks) { //render button tasks for drag and drop
    for (var i in tasks) {
        document.getElementById("tasks").innerHTML +=
            "<button id='draggable" + i + "'" + "draggable='true' ondragstart='dragStart(event)' data-task-eta='" + tasks[i].eta + "' data-task-complete='0' ondragend='dragEnd(event)' type='button' class='btn btn-info' style='margin:5px;'>" +
            "<span class='task-item'>" + tasks[i].description + "</span>" +
            "</button>";
    }
}