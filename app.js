let todo=document.getElementById("todo")
let add=document.getElementById("add")

let todoitems=[]

const loadPreviousTodos=()=>{
    todoitems=JSON.parse(localStorage.getItem("todoContents")) || []
}

const showPreviousTodos=()=>{
    if(todoitems.length !==0)
    {todoitems.forEach((items)=>{

        let main=document.createElement("div")
        main.classList.add("element")
        document.querySelector("body").append(main);
    
        let ele=document.createElement("div")
        ele.innerText=`${items}`;
        ele.classList.add("element-2")
    
        main.appendChild(ele)
    
        let btn=document.createElement("button")
        main.appendChild(btn)
        btn.innerText="Delete"
        btn.classList.add("delete")
    })}
}

loadPreviousTodos();

showPreviousTodos();

const addtoLocalStorage=(content)=>{
    todoitems.push(content) // pushing todos to an array so that array can be added to the local storage for easy retrival with single key
    console.log(todoitems)
    localStorage.setItem("todoContents", JSON.stringify(todoitems))
}

const addTodo=()=>{
    let todocontent=todo.value;
    todo.value="";
    addtoLocalStorage(todocontent);

    let main=document.createElement("div")
    main.classList.add("element")
    document.querySelector("body").append(main);

    let ele=document.createElement("div")
    ele.innerText=`${todocontent}`;
    ele.classList.add("element-2")

    main.appendChild(ele)

    let btn=document.createElement("button")
    main.appendChild(btn)
    btn.innerText="Delete"
    btn.classList.add("delete")
}

document.querySelector("body").addEventListener("click", (e)=>{
    let elementToRemove=e.target.parentNode.firstChild.innerText
    let delEle=e.target.parentNode
    if(delEle.classList.value !== "main" && e.target.classList.value !== "bd" && e.target.classList.value !== "main"){
        delEle.remove()
        const newArray = todoitems.filter((item) => item !== elementToRemove);
        todoitems=newArray
        localStorage.setItem("todoContents", JSON.stringify(todoitems))
    }
})

add.addEventListener("click", addTodo)