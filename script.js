const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
};

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"))

    const inputText = getElement("todo-text").value;
  
    
 if(!todos){
    const todoList = [
        {
            title: inputText,
            completed: false,
        },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
 }
 else{
    const todoList = [
        ...todos,
        {
            title: inputText,
            completed: false,
        },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
 }
 render();
};

const render = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const ul = getElement("todo-list");
    
   
    ul.innerHTML = "";

    todos.forEach((item) => {
        console.log(item)
        const li = document.createElement("li");
        li.innerText = item.title;
        ul.appendChild(li);
    });
};
render();

const handleClearAll = () => {
    localStorage.removeItem("TODOS");
    render();
} 