// ADD A "Add Project" button to add new projects
// Clicking the project reveals all of it's array (todo) items and hides the others
// Same logic as tab-switching in restaurant project

import ToDoList from "./toDoList"
import "./style.css"

const currentProject = []
const projectOne = []
const projectTwo = []

function ui() {
    const container = document.querySelector(".container")
    const header = document.querySelector(".header")
    const sideBar = document.querySelector(".sideBar")

    const addProject = document.createElement("button")
    addProject.textContent = "Add Project"
    addProject.classList.add("addProject")
    addProject.addEventListener("click", () => {
        const newProject = document.createElement("button")
        newProject.textContent = "ProjectTwo"
        newProject.addEventListener("click", () => {
            eraseDOM(container)
            project1.classList.remove("focus")
            newProject.classList.add("focus")
            repopulateDOM(projectTwo)
        })
        sideBar.appendChild(newProject)
    })

    const project1 = document.createElement("button")
    project1.textContent = "ProjectOne"
    project1.classList.add("focus")
    project1.addEventListener("click", () => {
        eraseDOM(container)
        repopulateDOM(projectOne)
    })
    
    const addToDoItem = document.createElement("button")
    addToDoItem.textContent = "Add task"
    addToDoItem.classList.add("addToDoItem")
    addToDoItem.addEventListener("click", () => {
        const makeForm = toDoForm()
        header.appendChild(makeForm)
        addToDoItem.style.display = "none"
    })

    sideBar.appendChild(addProject)
    sideBar.appendChild(project1)
    header.appendChild(addToDoItem)
}

function eraseDOM(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function inputMaker(input, type, idName) {
    const inputContainer = document.createElement("div")
    
    const label = document.createElement("div")
    label.for = input
    label.textContent = input

    const textBox = document.createElement("input")
    textBox.type = type
    textBox.id = idName
    textBox.name = input

    inputContainer.appendChild(label)
    inputContainer.appendChild(textBox)

    return inputContainer
}

function repopulateDOM(arr) {
    arr.forEach(e => {
        const checkBox = checkBoxMaker()
        const itemContainer = document.createElement("div")
        const itemDetails = document.createElement("div")
        itemDetails.addEventListener("click", () => {
            const dialog = document.createElement("dialog")
            dialog.addEventListener("click", () => {
                document.querySelector(".container").removeChild(dialog)
            })
            const dialogFormContainer = document.createElement("div")
            dialogFormContainer.addEventListener("click", (e) => {
                e.stopPropagation()
            })
            const dialogForm = document.createElement("form")
            const dialogTitle = document.createElement("input")
            dialogTitle.value = e.title
            const dialogDesc = document.createElement("input")
            dialogDesc.value = e.description
            const dialogDueDate = document.createElement("input")
            dialogDueDate.type = "date"
            dialogDueDate.value = e.dueDate
            const dialogPriority = document.createElement("select")
            dialogPriority.value = e.priority
            const dialogPriorityOne = document.createElement("option")
            dialogPriorityOne.value = "1"
            dialogPriorityOne.textContent = 1
            const dialogPriorityTwo = document.createElement("option")
            dialogPriorityTwo.value = "2"
            dialogPriorityTwo.textContent = 2
            const dialogPriorityThree = document.createElement("option")
            dialogPriorityThree.value = "3"
            dialogPriorityThree.textContent = 3
            if (e.priority == "1") {
                dialogPriorityOne.setAttribute("selected", "selected")
            }
            else if (e.priority == "2") {
                dialogPriorityTwo.setAttribute("selected", "selected")
            }
            else {
                dialogPriorityThree.setAttribute("selected", "selected")
            }
            const editBtn = document.createElement("button")
            editBtn.textContent = "Edit"
            editBtn.type = "button"
            editBtn.addEventListener("click", () => {
                e.title = dialogTitle.value
                e.title = dialogTitle.value
                itemTitle.textContent = e.title
        
                e.description = dialogDesc.value
                itemDesc.textContent = e.description
        
                e.dueDate = dialogDueDate.value
        
                e.priority = dialogPriority.value
                itemPriority.textContent = e.priority
            })

            dialogPriority.appendChild(dialogPriorityOne)
            dialogPriority.appendChild(dialogPriorityTwo)
            dialogPriority.appendChild(dialogPriorityThree)

            dialogForm.appendChild(dialogTitle)
            dialogForm.appendChild(dialogDesc)
            dialogForm.appendChild(dialogDueDate)
            dialogForm.appendChild(dialogPriority)
            dialogForm.appendChild(editBtn)
            dialogFormContainer.appendChild(dialogForm)
            dialog.appendChild(dialogFormContainer)
            document.querySelector(".container").prepend(dialog)
            dialog.showModal()
        })
        const itemTitle = document.createElement("div")
        itemTitle.textContent = e.title
        const itemDesc = document.createElement("div")
        itemDesc.textContent = e.description
        const itemPriority = document.createElement("div")
        itemPriority.textContent = e.priority
        
        itemDetails.appendChild(itemTitle)
        itemDetails.appendChild(itemDesc)
        itemDetails.appendChild(itemPriority)
        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(itemDetails)

        document.querySelector(".container").appendChild(itemContainer)
    });
}

function toDoForm() {
    const form = document.createElement("form")

    const title = inputMaker("Title", "input", "title")
    const description = inputMaker("Description", "input", "description")
    const dueDate = inputMaker("Due date", "date", "dueDate")

    // Priority drop-down
    const priorityContainer = document.createElement("div")
    const priorityLabel = document.createElement("label")
    priorityLabel.for = "priority"
    priorityLabel.textContent = "Priority"
    const priority = document.createElement("select")
    priority.name = "priority"
    priority.id = "priority"
    const priorityOne = document.createElement("option")
    priorityOne.value = "1"
    priorityOne.textContent = 1
    const priorityTwo = document.createElement("option")
    priorityTwo.value = "2"
    priorityTwo.textContent = 2
    const priorityThree = document.createElement("option")
    priorityThree.value = "3"
    priorityThree.textContent = 3

    priority.appendChild(priorityOne)
    priority.appendChild(priorityTwo)
    priority.appendChild(priorityThree)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(priority)

    const submitBtn = document.createElement("button")
    submitBtn.classList.add("submitBtn")
    submitBtn.textContent = "Add task"
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const newTask = new ToDoList(document.getElementById("title").value, document.getElementById("description").value, document.getElementById("dueDate").value, document.getElementById("priority").value)
        const selectedProject = document.querySelector(".focus")
        if (selectedProject.textContent == "ProjectOne") {
            projectOne.push(newTask)
        }
        else if (selectedProject.textContent == "ProjectTwo") {
            projectTwo.push(newTask)
        }

        document.querySelector(".addToDoItem").style.display = "block"
        submitBtn.style.display = "none"

        // Appends todo item to DOM
        const checkBox = checkBoxMaker()
        const itemContainer = document.createElement("div")
        const itemDetails = document.createElement("div")
        itemDetails.addEventListener("click", () => {
            // Expand to-do item to edit/see
            const dialog = document.createElement("dialog")
            dialog.addEventListener("click", () => {
                document.querySelector(".container").removeChild(dialog)
            })
            const dialogFormContainer = document.createElement("div")
            dialogFormContainer.addEventListener("click", (e) => {
                e.stopPropagation()
            })
            const dialogForm = document.createElement("form")
            const dialogTitle = document.createElement("input")
            dialogTitle.value = itemTitle.textContent
            const dialogDesc = document.createElement("input")
            dialogDesc.value = itemDesc.textContent
            const dialogDueDate = document.createElement("input")
            dialogDueDate.type = "date"
            dialogDueDate.value = newTask.dueDate
            const dialogPriority = document.createElement("select")
            dialogPriority.value = priority.textContent
            const dialogPriorityOne = document.createElement("option")
            dialogPriorityOne.value = "1"
            dialogPriorityOne.textContent = 1
            const dialogPriorityTwo = document.createElement("option")
            dialogPriorityTwo.value = "2"
            dialogPriorityTwo.textContent = 2
            const dialogPriorityThree = document.createElement("option")
            dialogPriorityThree.value = "3"
            dialogPriorityThree.textContent = 3
            if (newTask.priority == "1") {
                dialogPriorityOne.setAttribute("selected", "selected")
            }
            else if (newTask.priority == "2") {
                dialogPriorityTwo.setAttribute("selected", "selected")
            }
            else {
                dialogPriorityThree.setAttribute("selected", "selected")
            }

            const editBtn = document.createElement("button")
            editBtn.textContent = "Edit"
            editBtn.type = "button"
            editBtn.addEventListener("click", () => {
                newTask.title = dialogTitle.value
                itemTitle.textContent = newTask.title

                newTask.description = dialogDesc.value
                itemDesc.textContent = newTask.description

                newTask.dueDate = dialogDueDate.value

                newTask.priority = dialogPriority.value
                itemPriority.textContent = newTask.priority
            })

            dialogPriority.appendChild(dialogPriorityOne)
            dialogPriority.appendChild(dialogPriorityTwo)
            dialogPriority.appendChild(dialogPriorityThree)
            
            dialogForm.appendChild(dialogTitle)
            dialogForm.appendChild(dialogDesc)
            dialogForm.appendChild(dialogDueDate)
            dialogForm.appendChild(dialogPriority)
            dialogForm.appendChild(editBtn)
            dialogFormContainer.appendChild(dialogForm)
            dialog.appendChild(dialogFormContainer)
            document.querySelector(".container").prepend(dialog)
            dialog.showModal()
        })
        const itemTitle = document.createElement("div")
        itemTitle.textContent = newTask.title
        const itemDesc = document.createElement("div")
        itemDesc.textContent = newTask.description
        const itemPriority = document.createElement("div")
        itemPriority.textContent = newTask.priority
        
        itemDetails.appendChild(itemTitle)
        itemDetails.appendChild(itemDesc)
        itemDetails.appendChild(itemPriority)
        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(itemDetails)

        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("dueDate").value = ""
        document.getElementById("priority").value = ""

        document.querySelector(".container").appendChild(itemContainer)
        document.querySelector(".header").removeChild(form)
    })

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(priorityContainer)
    form.appendChild(submitBtn)

    return form
}

function checkBoxMaker() {
    const radioBtn = document.createElement("input")
    radioBtn.type = "radio" 
    radioBtn.addEventListener("click", () => {
        radioBtn.parentElement.remove()
    })
    
    return radioBtn
}

export default ui()