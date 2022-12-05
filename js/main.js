let container = document.getElementById("container-resultado");

let enviar = document.getElementById("enviar");
enviar.onclick = getPersona;

let borrar = document.getElementById("borrar");
borrar.onclick = deletContent;



function getPersona(){
   

    const nombre = document.getElementById("nombreOid__input").value;
    const  url = `https://jsonplaceholder.typicode.com/posts/${nombre}`; 

   
 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {showPersona(data)});
     
 
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

     userId.classList.add('elementosAgregados');
     Id.classList.add('elementosAgregados');
     titulo.classList.add('elementosAgregados');
     titleUser.classList.add('elementosAgregados');
     cuerpo.classList.add('elementosAgregados');
     cuerpoUser.classList.add('elementosAgregados');

     
     container.appendChild(Id);
     container.appendChild(userId);
     container.appendChild(titulo);
     container.appendChild(titleUser);
     container.appendChild(cuerpo);
     container.appendChild(cuerpoUser);
     
    }


function deletContent(){
    container.innerHTML = " ";
    nombrePlano.innerHTML = " ";
}