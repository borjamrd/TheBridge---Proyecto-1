/* --Declaramos el array para acumular los nombres */
let names = [];

/*------ Funcion addName ------*/

function addName() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Chato, te falta el nombre");
    } else {
        names.push(name);
        let textarea = document.getElementById("people");
        textarea.value = names.join("\n");
        document.getElementById("name").value = "";
        document.getElementById("name").focus();
    }
}

/*------ Función delete all------*/
function deleteName() {
    names = [];
    let textarea = document.getElementById("people");
    let name = document.getElementById("name");
    textarea.value = "";
    name.value = "";
}

/*------ Function delete -----*/
function deleteMember() {
    names.pop();
    let textarea = document.getElementById("people");
    textarea.value = names.join("\n");
}

/*------ Función generate ------*/
let newTeam = [];
function createTeams() {
    let numberOfTeams = parseInt(document.getElementById("teamSize").value); // cogemos el valor de los equipos
    if (numberOfTeams < 2 || numberOfTeams > names.length) {
        alert(`Introduce un valor entre 2 y ...`); //falta el contador
    } else {
        while (names.length > 0) {
            /* for (let i = 0; i < names.length; i++) { -----no le veo sentido a este for, con el while ya recorre todo*/
            let random = Math.floor(Math.random()*(names.length-1)); // formula aleatoria             
            let selection = names[random]; // lo selecciona un nombre del array names [posicion random]
            newTeam.push([selection]) // vamos a meter la posicion i y el nombre random //al quitar el for no hace falta
            names.splice(random, 1); // borra el que hemos metido
            /* } */
        }

        for (let i = 0; i < numberOfTeams; i++) {
            let container = document.getElementById("teams");

            //Creamos div 
            let div = document.createElement("div");
            div.id = "newDiv";//no tiene sentido darle el mismo id a todos los div, para dar estilos tenemos la clase y los id debería ser únicos
            div.classList = "new-div";
            container.appendChild(div);

            //Creamos h3 (titulos de los equipos)
            let titleTeam = document.createElement("h3");
            titleTeam.id = "newTitle";//lo mismo con este id
            titleTeam.classList = "new-title";
            titleTeam.innerHTML = `GRUPO ${i + 1}`;
            div.appendChild(titleTeam);

            //Creamos p de cada nombre
            for (let j = i; j < newTeam.length; j += numberOfTeams) {
                let individual = document.createElement("p");
                individual.id = "newIndividual"; //lo mismo con este id
                individual.classList = "new-individual";
                individual.innerHTML = newTeam[j]; //si no ponemos el 1 nos dice el valor
                div.appendChild(individual);
            }
        }
    }
}
/*------ Función reset ------*/
function reset() {
    let container = document.getElementById("teams");
    //console.log(container)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    names = newTeam; //reinicializamos el array con los nombres de los participantes para poder volver a generar equipos
    newTeam = [];
}



