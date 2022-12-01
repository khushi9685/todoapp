let form = document.querySelector("form")
let ul = document.querySelector("ul")
let input = document.querySelector("input")
  


form.addEventListener("submit", saveList)
function saveList(e){
    e.preventDefault()
    let Li = document.createElement("li")
   
    Li.innerText = input.value
    Li.className = "list-group-item rounded-0"
    let delBtn = document.createElement("button")
    delBtn.innerText = "Del"
    delBtn.className = "btn btn-danger rounded-0 btn-sm float-end"
    Li.appendChild(delBtn)
    ul.appendChild(Li)
    form.reset()
}
ul.addEventListener("click", remove)
function remove(e){
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement
        ul.removeChild(li)
     }

}