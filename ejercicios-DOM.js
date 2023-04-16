let parrafoNuevo = document.getElementById("parrafo");
parrafoNuevo.textContent = "Hola Mundo";

let newList = document.getElementsByClassName("destacado");
newList[0];

for (let i = 0; i < newList.length; i++) {
  newList[i].style = "background-color: yellow;";
}

let elementosEspecificos = document.getElementsByTagName("li");

console.log(elementosEspecificos.length);

let query = document.querySelectorAll("p");
query.style = "fontSize:40px";
