/*
fetch('http://api.weatherstack.com/current?access_key=ce5b2ca79d190280448dd08c04aac341&query=Colima')
  .then(response => response.json())
  .then(json => console.log(json.current.temperature))

  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  */

  let btnUsers= document.getElementById("btnusers");
  btnUsers.addEventListener('click',()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      //let users=document.getElementById("users");
      let selectuser=document.getElementById("selectuser");
      console.log(json);
      let lista="";
      for(let i=0;i<json.length;i++)
      {
        lista+="<option value='"+json[i].id+"'>" + json[i].name + "</option>";
        selectuser.innerHTML=lista;
      }
    });
  
  })

 /* let btnuser= document.getElementById("btnuser");
  btnuser.addEventListener('click',()=>{
    let id=document.getElementById("txtuser").value;
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((response) => response.json())
    .then((json) => console.log(json));
  })
  */
  
  let select=document.getElementById("selectuser");
  select.addEventListener('change',()=>
  {
    let userId=document.getElementById("selectuser").value;
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((response)=> response.json())
    .then((json)=> {
    console.log(json)
    let info=document.getElementById("info");
    let listainfo="";
      for(let i=0;i<json.length;i++)
      {
        listainfo+="<h3>" + json[i].title + "</h3>" + 
        "<p>" + json[i].body + "</p>";
        info.innerHTML=listainfo + '<button class="comments" type="button" id="btncomments" onclick="comments()" >Ver comments</button>';
      }
  });
  
 })

 
 let comments=function()
 {

  fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) =>
                {
                    console.log(json);
                });
 }
 