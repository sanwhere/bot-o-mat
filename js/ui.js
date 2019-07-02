class UI {
    static addRobotToUI(newRobot) {
        const robotList = document.getElementById("robots");
        robotList.innerHTML += `
             <tr>
                 <td><img ondrop="dragDrop(event)" ondragstart="dragStart(event)" ondragover="allowDrop(event)" ondragexit="dragDrop(event)" src="${newRobot.url}" class="img-fluid img-thumbnail robot-${newRobot.title}" id="roboImg" data-robot-busy="0"></td>
                 <td>${newRobot.title}</td>
                 <td>${newRobot.robotype}</td>
                 <td class="delete-robot-row"><a href="#" id = "delete-robot">&times</a></td>
             </tr>`;
    }

    static clearInputs(element1) {
        element1.value = "";
    }

    static displayMessages(message, type) {
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);
        setTimeout(function() {
            div.remove();
        }, 4000);
    }

    static loadAllRobots(robots) {
        const robotList = document.getElementById("robots");
        robots.forEach(function(robot) {
            robotList.innerHTML += `<tr>
             <td><img ondrop="dragDrop(event)" ondragstart="dragStart(event)" ondragover="allowDrop(event)" ondragexit="dragDrop(event)" src="${robot.url}" class="img-fluid img-thumbnail robot-${robot.title}" id="roboImg" data-robot-busy="0"></td>
             <td>${robot.title}</td>
             <td>${robot.robotype}</td>
             <td class="delete-robot-row"><a href="#" id = "delete-robot">&times</a></td>
         </tr>`;
        });
        //<div id="bubble"><img src="images/triple-gears-loading-icon.svg"></div>
    }

    static deleteRobotFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllRobotsFromUI() {
        const robotList = document.getElementById("robots");
        while (robotList.firstElementChild !== null) { // unless there is a child
            robotList.firstElementChild.remove();
        }
    }

}