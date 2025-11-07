const resetForm = () => {
    document.getElementById('todo-name').value = ''; 
    document.getElementById('todo-date').value = '';
}
btnAdd.addEventListener('click',()=>{
    //recuperation des valeurs saisies
    let todo_name = document.getElementById("todo-name").value
    let todo_date = document.getElementById("todo-date").value
    // verification
    if(!todo_name || !todo_date){ // todo_name != null , undefined, NaN, "",0 , false
        return alert("please complete all the fields")
       
    }
    // call HTTP Request

    // si reussi
    addTodoToList(todo_name,todo_date)
    // vider le formulaire
    resetForm()
})
const addTodoToList = (name, date) => {
    //creation des elements
    const li = document.createElement("li")
    const buttonDelete = document.createElement("button")
    const div = document.createElement("div")
    const span = document.createElement("span")
    const time = document.createElement("time")

    // buttonDelete.setAttribute("onclick", "console.log('ok')")
    buttonDelete.addEventListener("click",()=>{
    //    li.remove()
        buttonDelete.parentElement.remove()
    })
    //liaison pere fils
    li.appendChild(div)
    li.appendChild(buttonDelete)
    div.appendChild(span)
    div.appendChild(time)
    //document.getElementsByClassName("todo-list")[0]
    document.querySelector(".todo-list").appendChild(li)

    // content
    span.innerText = name
    time.innerText = date
    buttonDelete.innerText = "Remove"

    // class attributes
    li.classList.add("todo-item") // li.setAttribute("class","todo-item")
    div.classList.add("todo-info")
    span.classList.add("todo-name")
    time.classList.add("todo-date")
    buttonDelete.classList.add("btn", "btn--ghost", "danger")
    //buttonDelete.setAttribute("style","btn btn--ghost danger")

    // attributes 
    time.setAttribute("time", time)
    buttonDelete.setAttribute("type", "button")
    buttonDelete.setAttribute("aria-disabled", "true")
    buttonDelete.setAttribute("title", "Static template — remove requires JavaScript")
}
function escapeHtml(text) {
    const span = document.createElement('span');
    span.innerText = text;
    return span.innerHTML;
}
const addTodoToList2 = (name, date) => {
    name = escapeHtml(name)
    date = escapeHtml(date)
    const newLi = `
     <li class="todo-item">
        <div class="todo-info">
            <span class="todo-name">${name}</span>
            <time class="todo-date" datetime="${date}">${date}</time>
        </div>
        <button class="btn btn--ghost danger" type="button" aria-disabled="true"
            title="Static template — remove requires JavaScript">Remove</button>
    </li>
    `
    document.querySelector(".todo-list").innerHTML += newLi
}