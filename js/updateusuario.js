let borrarActualizacion = document.getElementById("borrar-2");
borrarActualizacion.onclick = deletContent;

let guardarActualizacion = document.getElementById("enviar-2");
guardarActualizacion.onclick = actualizarUser;




function actualizarUser(){
 
    let newIdUser = document.getElementById('input-nombreOid1').value;

    let newTitulo = document.getElementById('input-titulo1').value;
  
    let nuewcuerpo3 = document.getElementById('input-cuerpo1').value;

 const usuarioActualizado = {
    title : newTitulo,
    body: nuewcuerpo3,
    userId: newIdUser
 }
 fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify(usuarioActualizado),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}