function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    let list = document.getElementById("studentList");

    let item = document.createElement("li");
    item.innerText = name + " | Age: " + age + " | Course: " + course;

    list.appendChild(item);
}