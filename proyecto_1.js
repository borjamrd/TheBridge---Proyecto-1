/* --Declaramos el array para acumular los nombres */
let names = [];

/*------ Funcion addName ------*/

function addName() {
    let name = document.getElementById("name").value;
    
    if (name == ""){
        alert("Chato, te falta el nombre");
    } else {
        names.push(name);
        let textarea = document.getElementById("people");
        textarea.value = names.join("\n");
        console.log(names);
    }
}

/*------ Función delete ------*/
function deleteName() {
    names = [];
    let textarea = document.getElementById("people");
    let name = document.getElementById("name");
    textarea.value = "";
    name.value ="";
}
/*------ Función generate ------*/
function generate(){
    let number = document.getElementById("teamSize").value
    if ((number > names.length - 1) || (number < 2)){
        alert("Escribe un número entre dos (incluido) y el número de nombres añadidos")
    }else{
        console.log(number)
    }
    /*PATRICIA: que tal, me falta hacer la división en equipos, lo ideal es introducirlo en "n-team"*/
}

/*------ Función reset ------*/
function reset(){

}