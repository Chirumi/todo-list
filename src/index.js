import Project from "./projects"
import ToDoList from "./toDoList"


const x = new ToDoList("Cook", "Dinner Time!", "Sat Sep 13", "1")
const projectX = new Project("Today")
projectX.projectArr.push(x)

console.log(projectX)