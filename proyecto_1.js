/* --Declaramos el array para acumular los nombres */
let names = [];

/*------ Funcion addName ------*/

function addName(event) {
    
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Chato, te falta el nombre");
        document.getElementById("name").focus();
    } else if ((event.type == "click") || (event.keyCode === 13)) {
        names.push(name);
        let textarea = document.getElementById("people");
        textarea.value = names.join("\n");
        console.log(names);
        document.getElementById("name").value = "";
        document.getElementById("name").focus();
    }
}

/*------ Función delete ------*/
function deleteName() {
    names = [];
    let textarea = document.getElementById("people");
    let name = document.getElementById("name");
    textarea.value = "";
    name.value = "";
}
/*------ Función generate ------*/
let newTeam = [];
function createTeams() {
    let numberOfTeams = parseInt(document.getElementById("teamSize").value); // cogemos el valor de los equipos
    let count = names.length
    if (numberOfTeams < 2 || numberOfTeams > (count/2)) {
        alert("Introduce un valor entre 2 y "+ parseInt(count/2)); //falta el contador
    } else {
        while (names.length > 0) {
            for (let i = 0; i < names.length; i++) {
                let random = Math.floor(Math.random()*(names.length-1)); // formula aleatoria             
                let selection = names[random]; // lo selecciona un nombre del array names [posicion random]
                newTeam.push([selection]) // vamos a meter la posicion i y el nombre random 
                //console.log(newTeam);
                names.splice(random, 1); // borra el que hemos metido
            }
        }
        //console.log(newTeam) comprobamos que se meten en el array  
            
        for (let i = 0; i < numberOfTeams; i++) {
            let container = document.getElementById("teams");

            //Creamos div 
            let div = document.createElement("div");
            div.id = "newDiv";
            div.classList = "new-div";
            container.appendChild(div);

            //Creamos h3 (titulos de los equipos)
            let titleTeam = document.createElement("h3");
            titleTeam.id = "newTitle";
            titleTeam.classList = "new-title";
            titleTeam.innerHTML = `GRUPO ${i + 1}`;
            div.appendChild(titleTeam);

            //Creamos p de cada nombre
            for (let j = i; j < newTeam.length; j += numberOfTeams) {
                    let individual = document.createElement("p");
                    individual.id = "newIndividual"
                    individual.classList = "new-individual"
                    individual.innerHTML = newTeam[j]; //si no ponemos el 1 nos dice el valor
                    div.appendChild(individual);
               
            }
        }
    }
}
console.log(createTeams())
/*------ Función reset ------*/
function reset() {
    let container = document.getElementById("teams");
    //console.log(container)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    names = newTeam;
    newTeam = [];
    //console.log(newTeam)
}