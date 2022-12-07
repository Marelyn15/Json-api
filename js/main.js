let container = document.getElementById("container-resultado");

let enviar = document.getElementById("enviar");
enviar.onclick = getPersona;

let borrar = document.getElementById("borrar");
borrar.onclick = deletContent;

let body = document.getElementById("body");


function getPersona(){
   

    const nombre = document.getElementById("nombreOid__input").value;
    
    if(nombre == ""){

        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then((response) => response.json())
        .then((data) => {showPersonas(data)});
    }
   

    else{
        const  url = `https://jsonplaceholder.typicode.com/posts/${nombre}`; 
        fetch(url)
        .then((response) => response.json())
        .then((data) => {showPersona(data)});
        }
     }
 
    function showPersona(persona){
     deletContent();
     
     let Id = document.createElement('h4');
     Id.textContent = 'Id: ';
     let userId = document.createElement('p');
     userId.textContent = persona.id;
     let titulo = document.createElement('h4');
     titulo.textContent = 'Titulo: ';
     let titleUser = document.createElement('p');
     titleUser.textContent = persona.title;
     let cuerpo = document.createElement('h4');
     cuerpo.textContent = 'cuerpo : ';
     let cuerpoUser = document.createElement('p');
     cuerpoUser.textContent = persona.body;
     let IdU = document.createElement('h4');

     let actions = document.createElement('h4');
     actions.textContent = 'Opciones: ';
     let updateButton = document.createElement('button');
     updateButton.textContent = 'Actualizar';
     let deleteButton = document.createElement('button');
     deleteButton.textContent = 'Borrar';

     userId.classList.add('elementosAgregados');
     Id.classList.add('elementosAgregados');
     titulo.classList.add('elementosAgregados');
     titleUser.classList.add('elementosAgregados');
     cuerpo.classList.add('elementosAgregados');
     cuerpoUser.classList.add('elementosAgregados');
     actions.classList.add('elementosAgregados');


     updateButton.classList.add('container__form__botones');
     updateButton.setAttribute('id', 'actualizar');

     deleteButton.classList.add('container__form__botones');
     deleteButton.setAttribute('id', 'delete-4')

     
     container.appendChild(Id);
     container.appendChild(userId);
     container.appendChild(titulo);
     container.appendChild(titleUser);
     container.appendChild(cuerpo);
     container.appendChild(cuerpoUser);
     container.appendChild(actions);


     container.appendChild(updateButton);
     updateButton.onclick = redireccion;


     container.appendChild(deleteButton);
     deleteButton.onclick = borrarPersonas;
     
     
    }

function showPersonas(persona){
    let cuerpo1 = '';
    for(let i = 0; i<persona.length; i++){
        cuerpo1 += `<tr class="elementosAgregados"><td class="id">${persona[i].id} <td>
        ${persona[i].title}</td>
        <td> ${persona[i].body}</td>
        <td> <a href="update.html"  id="nueva-actualizacion"><button value="Actualizar" class="container__form__botones">Actualizar</button></a></td>
        <td><button class="container__form__botones" id="delete-4" onclick="borrarPersonas()">Borrar</button></td>
        </tr>`;
    }
    body.innerHTML = cuerpo1;

}
function deletContent(){
    container.innerHTML = "";
}

function redireccion(){
    window.location.href="./update.html";
}
function borrarPersonas(){

    let idValue = document.getElementsByClassName("id");
    for(let i = 0; i<idValue.length; i++){
        console.log(idValue[i]);
    }
    

    /*
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });*/
}