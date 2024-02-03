function ui() {
    const container = document.querySelector(".container")
    
    const addToDoItem = document.createElement("button")
    addToDoItem.textContent = "Add To-do item"
    addToDoItem.addEventListener("click", () => {
        const form = document.createElement("form")

        const title = inputMaker("Title", "input")
        const description = inputMaker("Description", "input")
        const dueDate = inputMaker("Due date", "date")

        // Priority drop-down
        const priorityContainer = document.createElement("div")
        const priorityLabel = document.createElement("label")
        priorityLabel.for = "priority"
        priorityLabel.textContent = "Priority"
        const priority = document.createElement("select")
        priority.name = "priority"
        priority.id = "priorty"
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

        form.appendChild(title)
        form.appendChild(description)
        form.appendChild(dueDate)
        form.appendChild(priorityContainer)
        container.appendChild(form)
    })

    container.appendChild(addToDoItem)
}

function inputMaker(input, type) {
    const inputContainer = document.createElement("div")
    
    const label = document.createElement("div")
    label.for = input
    label.textContent = input

    const textBox = document.createElement("input")
    textBox.type = type
    textBox.id = input
    textBox.name = input

    inputContainer.appendChild(label)
    inputContainer.appendChild(textBox)

    return inputContainer
}

export default ui()