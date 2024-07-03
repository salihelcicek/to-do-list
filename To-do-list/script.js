const txt = document.getElementById("task");
const listContainer = document.querySelector(".listcontainer");




function addTask() {
    if (txt.value.trim() === "") {
        alert("Task cannot be empty");
        return;
    }


    let newTask = document.createElement("li");
    newTask.classList.add("unchecked");
    newTask.innerHTML = `${txt.value.trim()} <span>X</span`;
    newTask.addEventListener("click", function() {
        if (newTask.classList.contains("checked")) {
            newTask.classList.remove("checked");
            newTask.classList.add("unchecked");
        } else {
            newTask.classList.remove("unchecked");
            newTask.classList.add("checked");
        }
    });
    listContainer.appendChild(newTask);

    newTask.querySelector("span").addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the li click event from being triggered
        newTask.remove();
    });
    txt.value = "";
}

document.querySelectorAll(".listcontainer li").forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.classList.contains("checked")) {
            element.classList.remove("checked");
            element.classList.add("unchecked");
        } else {
            element.classList.remove("unchecked");
            element.classList.add("checked");
        }
    });
});
