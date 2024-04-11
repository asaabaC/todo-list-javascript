// Function to add a new task to the to-do list
function addTask() {
    // Retrieving the input field where the user enters a new task
    var taskInput = document.getElementById("taskInput");
    // Retrieving the list element where tasks will be displayed
    var taskList = document.getElementById("taskList");

    // Checking if the input field is empty
    if (taskInput.value === "") {
        // If the input field is empty, display an alert message to prompt the user to enter a task
        alert("Please enter a task");
        return; // Exiting the function if the input field is empty
    }

    // Creating a new list item (<li>) to display the task
    var li = document.createElement("li");
    li.textContent = taskInput.value; // Setting the text content of the list item to the value entered by the user

    // Creating an "Update" button
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update"; // Setting the text content of the button to "Update"
    // Adding a click event listener to the "Update" button
    updateButton.onclick = function() {
        // Prompting the user to enter the updated task text
        var newText = prompt("Enter updated task", li.textContent);
        // Checking if the user entered new text and it's not empty
        if (newText !== null && newText !== "") {
            // Updating the text content of the list item with the new text entered by the user
            li.textContent = newText;
        }
    };

    // Creating a "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; // Setting the text content of the button to "Delete"
    // Adding a click event listener to the "Delete" button
    deleteButton.onclick = function() {
        // Removing the list item from the task list
        taskList.removeChild(li);
    };

    // Creating an "Edit" button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit"; // Setting the text content of the button to "Edit"
    // Adding a click event listener to the "Edit" button
    editButton.onclick = function() {
        // Prompting the user to edit the task text
        var editedText = prompt("Edit task", li.textContent);
        // Checking if the user entered edited text and it's not empty
        if (editedText !== null && editedText !== "") {
            // Updating the text content of the list item with the edited text entered by the user
            li.textContent = editedText;
        }
    };

    // Appending the "Update", "Edit", and "Delete" buttons to the list item
    li.appendChild(updateButton); // Appending the "Update" button
    li.appendChild(editButton); // Appending the "Edit" button
    li.appendChild(deleteButton); // Appending the "Delete" button

    // Appending the list item to the task list
    taskList.appendChild(li);

    // Clearing the input field after adding the task
    taskInput.value = "";
}


//This function takes the task entered by the user, creates a list item (<li>) to display it along with "Update", 
//"Edit", and "Delete" buttons. The buttons have event listeners attached to them to handle updating, editing, 
//and deleting tasks. Finally, the function appends the list item to the task list and clears the input field.