// app.js
// Fetch tasks from the backend and populate the task lists

// Sample data for demonstration
const tasks = {
    what: ["Task 1", "Task 2", "Task 3"],
    when: ["Task 1", "Task 2"],
    wig: ["Task 1"],
    lagIndicator: ["Task 1", "Task 2", "Task 3", "Task 4"],
    leadIndicator: ["Task 1", "Task 2"],
    how: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
};

function populateTaskList(section, tasks) {
    const taskList = document.getElementById(`${section}-tasks`);
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(task));
        taskList.appendChild(listItem);
    });
}

populateTaskList("what", tasks.what);
populateTaskList("when", tasks.when);
populateTaskList("wig", tasks.wig);
populateTaskList("lag-indicator", tasks.lagIndicator);
populateTaskList("lead-indicator", tasks.leadIndicator);
populateTaskList("how", tasks.how);