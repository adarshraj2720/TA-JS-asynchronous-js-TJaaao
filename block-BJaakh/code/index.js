let form = document.querySelector('form')
let todo = document.querySelector('.todo')
let text=document.getElementById('text')
let body=document.querySelector('body')

body.addEventListener('keyup',(event)=>{
    event.preventDefault()
})

let url="https://basic-todo-api.vercel.app/api/todo"

fetch(url).then((res) => res.json()).then((value) => {

    console.log(value.todos)
    createUI(value.todos)
})



function createUI(todolist) {
    
    todolist.forEach(element => {
        
        // let element=todolist.target.elements.text.value
        // console.log(element)
        let ul = document.createElement('ul')
        let checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        let title = document.createElement('p')
        title.innerText = element.title
        let cross = document.createElement('span')
        cross.innerText = "❌"
        ul.append(checkbox, title, cross)
        todo.append(ul)
    });
}


form.addEventListener("keyup",(event)=>{
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
})


let data={
    "todo":{
        "title":"Adarsh",
       isCompleted:true
    }
}

fetch(url + '/6228e57a9d8dcc000993ffae' , {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });


  let data1={
    "todo":{
        "title":"Adarshraj2720",
       isCompleted:true
    }
}

fetch(url , {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data1) // body data type must match "Content-Type" header
  });