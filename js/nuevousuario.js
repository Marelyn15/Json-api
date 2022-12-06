
let borrarForm = document.getElementById("borrar-1");
borrarForm.onclick = deletContent;

let enviarForm = document.getElementById("enviar-1");
enviarForm.onclick = crearNuevoUsuario;

let container2 = document.getElementById("resultado2")

function crearNuevoUsuario(){

  let idUser = document.getElementById('input-nombreOid').value;

  let titulo = document.getElementById('input-titulo').value;

  let cuerpo3 = document.getElementById('input-cuerpo').value;
  
  const newUser = {
    title : titulo,
    body: cuerpo3,
    userId: idUser
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => showPersona2(data));
  alert("usuario guardado");
}

function showPersona2(newUser){
  deletContent();
  
  let Id = document.createElement('h4');
  Id.textContent = 'UserId: ';
  let userId = document.createElement('p');
  userId.textContent = newUser.id;
  let titulo = document.createElement('h4');
  titulo.textContent = 'Titulo: ';
  let titleUser = document.createElement('p');
  titleUser.textContent = newUser.title;
  let cuerpo = document.createElement('h4');
  cuerpo.textContent = 'cuerpo : ';
  let cuerpoUser = document.createElement('p');
  cuerpoUser.textContent = newUser.body;

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

  
  updateButton.classList.add('container__form__botones');
  updateButton.setAttribute('id', 'actualizar');

  deleteButton.classList.add('container__form__botones');
  deleteButton.setAttribute('id', 'delete')
  
  container2.appendChild(Id);
  container2.appendChild(userId);
  container2.appendChild(titulo);
  container2.appendChild(titleUser);
  container2.appendChild(cuerpo);
  container2.appendChild(cuerpoUser);

  container2.appendChild(updateButton);
  updateButton.onclick = redireccion;

  container2.appendChild(deleteButton);
  
 }
 
 function deletContent(){
  container2.innerHTML = " ";
}



  
