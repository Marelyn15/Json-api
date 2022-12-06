let guardarAct = document.getElementById("enviar-2");
guardarAct.onclick = actualizarPersona;


function actualizarPersona(){

  let iDActual = document.getElementById("nombreOid__input1").value;
  console.log(iDActual);

  let newIdUser = document.getElementById('input-nombreOid1').value;

  let newTitulo = document.getElementById('input-titulo1').value;

  let newCuerpo3 = document.getElementById('input-cuerpo1').value;
  
  const updateUser = {
    title : newIdUser,
    body: newTitulo,
    userId: newCuerpo3
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

function showNewData(){
  
}