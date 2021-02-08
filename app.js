function add_todo(){
    var inp = document.getElementById("inp")
    if(inp.value != ""){
    var main = document.getElementById("subdiv3")
    var text = inp.value
    var div = document.createElement("div")
    var final_text = document.createTextNode(text)
    div.appendChild(final_text)
    var inner_div = document.createElement("div")
    inner_div.setAttribute("class", "inner_div")
    var delete_btn = document.createElement("button")
    var delete_btn_text = document.createTextNode("Delete")
    delete_btn.appendChild(delete_btn_text)
    delete_btn.setAttribute("class", "small_btn")
    delete_btn.setAttribute("onclick", "delete_todo()")
    var edit_btn = document.createElement("button")
    var edit_btn_text = document.createTextNode("Edit")
    edit_btn.appendChild(edit_btn_text)
    edit_btn.setAttribute("class", "small_btn")
    edit_btn.setAttribute("onclick", "edit_todo()")
    inner_div.appendChild(delete_btn)
    inner_div.appendChild(edit_btn)
    div.appendChild(inner_div)
    div.setAttribute("class", "div")
    main.appendChild(div)
    inp.value = ""
    }
}

function delete_all(){
    var subdiv3 = document.getElementById("subdiv3")
    subdiv3.innerHTML = ""
}
function delete_todo(){
    var todo = event.target
    var inner_div = todo.parentNode
    var div = inner_div.parentNode
    div.remove()
}
function edit_todo(){
    var todo = event.target
    var inner_div = todo.parentNode
    var div = inner_div.parentNode
    var todo_text = div.firstChild.nodeValue
    var new_text = prompt("Edit", todo_text)
    div.firstChild.nodeValue = new_text
}