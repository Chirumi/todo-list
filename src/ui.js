import ToDoList from "./toDoList"
import "./style.css"

const project = []

function ui() {
    const container = document.querySelector(".container")
    
    const addToDoItem = document.createElement("button")
    addToDoItem.textContent = "Add task"
    addToDoItem.classList.add("addToDoItem")
    addToDoItem.addEventListener("click", () => {
        const makeForm = toDoForm()
        container.appendChild(makeForm)
        addToDoItem.style.display = "none"
    })

    container.appendChild(addToDoItem)
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
        project.push(newTask)

        document.querySelector(".addToDoItem").style.display = "block"
        submitBtn.style.display = "none"

        // Appends todo item to DOM
        const itemContainer = document.createElement("div")
        const itemTitle = document.createElement("div")
        itemTitle.textContent = newTask.title
        const itemDesc = document.createElement("div")
        itemDesc.textContent = newTask.description
        itemContainer.appendChild(itemTitle)
        itemContainer.appendChild(itemDesc)

        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("dueDate").value = ""
        document.getElementById("priority").value = ""

        document.querySelector(".container").appendChild(itemContainer)
    })

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(priorityContainer)
    form.appendChild(submitBtn)

    return form
}

export default ui()