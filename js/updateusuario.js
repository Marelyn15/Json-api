let guardarAct = document.getElementById("enviar-2");
guardarAct.onclick = actualizarPersona;

let borrarAct = document.getElementById("borrar-2");
borrarAct.onclick = deletContent;

let container3 = document.getElementById("resultado4");

function actualizarPersona(){

  let iDActual = document.getElementById("nombreOid__input1").value;
  
  let newIdUser = document.getElementById('input-nombreOid1').value;

  let newTitulo = document.getElementById('input-titulo1').value;

  let newCuerpo3 = document.getElementById('input-cuerpo1').value;
  
  const updateUser = {
    userId: newIdUser,
    body: newCuerpo3,
    title : newTitulo
    
    
  }
  fetch(`https://jsonplaceholder.typicode.com/posts/${iDActual}`, {
  method: 'PUT',
  body: JSON.stringify(updateUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => showNewData(json));
}

function showNewData(updateUser){

  
  let Id = document.createElement('h4');
  Id.textContent = 'ID: ';
  let userId = document.createElement('p');
  userId.textContent = updateUser.id;
  let titleIdUser = document.createElement('h4');
  titleIdUser.textContent = 'UserId: ';
  let iDUser = document.createElement('p');
  iDUser.textContent = updateUser.userId;
  let titulo = document.createElement('h4');
  titulo.textContent = 'Titulo: ';
  let titleUser = document.createElement('p');
  titleUser.textContent = updateUser.title;
  let cuerpo = document.createElement('h4');
  cuerpo.textContent = 'cuerpo : ';
  let cuerpoUser = document.createElement('p');
  cuerpoUser.textContent = updateUser.body;

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
  
  container3.appendChild(Id);
  container3.appendChild(userId);
  container3.appendChild(titleIdUser);
  container3.appendChild(iDUser)
  container3.appendChild(titulo);
  container3.appendChild(titleUser);
  container3.appendChild(cuerpo);
  container3.appendChild(cuerpoUser);

  container3.appendChild(updateButton);
  updateButton.onclick = redireccion;

  container3.appendChild(deleteButton);
}

function deletContent(){
  container3.innerHTML = "";
}