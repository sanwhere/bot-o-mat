class Storage { //class
    static addRobotToStorage(newRobot) { //add robot
        let robots = this.getRobotsFromStorage();
        robots.push(newRobot);
        localStorage.setItem("robots", JSON.stringify(robots));
    }

    static getRobotsFromStorage() { //get robot
        let robots;
        if (localStorage.getItem("robots") === null) {
            robots = [];
        } else {
            robots = JSON.parse(localStorage.getItem("robots"));
        }
        return robots;
    }

    static deleteRobotFromStorage(robotTitle) { //delete robot
        let robots = this.getRobotsFromStorage();
        // splice
        robots.forEach(function(robot, index) {
            if (robot.title === robotTitle) {
                robots.splice(index, 1);
            }
        });
        localStorage.setItem("robots", JSON.stringify(robots));
    }

    static clearAllRobotsFromStorage() { //delete all robots
        localStorage.removeItem("robots");
    }

    static addFinishedTaskToStorage(newTask) { //add task
        let tasks = this.getFinishedTasksFromStorage();
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    static getFinishedTasksFromStorage() { //get task
        let tasks;
        if (localStorage.getItem("tasks") === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }
        return tasks;
    }

    static clearAllFinishedTasksFromStorage() { //clear all finished task
        localStorage.removeItem("tasks");
    }

}