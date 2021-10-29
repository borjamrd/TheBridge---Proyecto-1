/* --Declaramos el array para acumular los nombres y el contador */
let names = [];
let count = 0;
/*------ Funcion addName ------*/

function addName(event) {
    
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Chato, te falta el nombre");
        document.getElementById("name").focus();
    } else if ((event.type == "click") || (event.keyCode === 13)) {
        if (names.includes(name)) {
            let alertContainer = document.getElementById('alertMessage');
            let alert = document.createElement('p');
            alert.innerHTML = "Upps, parece que ese nombre ya está en la lista, introduce otro nombre";
            alert.id = "alertP";
            alertContainer.appendChild(alert);  
            /* alert("Upps, parece que ese nombre ya está en la lista, introduce otro nombre");   */
            setTimeout(() => {
                alertContainer.removeChild(alert);
            }, 1500); 
        }
        else {
            names.push(name);
            count ++;
            document.getElementById('counter').value = count;
            let textarea = document.getElementById("people");
            textarea.value = names.join("\n");
            document.getElementById("name").value = "";
            document.getElementById("name").focus();
        }

    }
}

/*------ Función delete all------*/
function deleteName() {
    names = [];
    count = 0;
    document.getElementById('counter').value = count;
    let textarea = document.getElementById("people");
    let name = document.getElementById("name");
    textarea.value = "";
    name.value = "";
}

/*------ Function delete -----*/
function deleteMember() {
    names.pop();
    count --;
    document.getElementById('counter').value = count;
    let textarea = document.getElementById("people");
    textarea.value = names.join("\n");
}
/*------ Función generate ------*/
let newTeam = [];
function createTeams() {
    let numberOfTeams = parseInt(document.getElementById("teamSize").value); // cogemos el valor de los equipos
    if (numberOfTeams < 2 || numberOfTeams > (count/2)) {
        alert("Introduce un valor entre 2 y "+ parseInt(count/2)); 
    } else {
        while (names.length > 0) {
            let random = Math.floor(Math.random()*(names.length-1)); // formula aleatoria             
            let selection = names[random]; // lo selecciona un nombre del array names [posicion random]
            newTeam.push([selection])  
            names.splice(random, 1); // borra el que hemos metido
        }
        //console.log(newTeam) comprobamos que se meten en el array  
            
        for (let i = 0; i < numberOfTeams; i++) {
            let container = document.getElementById("teams");
            //Creamos div 
            let div = document.createElement("div");
            div.classList = "new-div";
            container.appendChild(div);

            //Creamos h3 (titulos de los equipos)
            let titleTeam = document.createElement("h3");
            titleTeam.classList = "new-title";
            titleTeam.innerHTML = `GRUPO ${i + 1}`;
            div.appendChild(titleTeam);

            //Creamos p de cada nombre
            for (let j = i; j < newTeam.length; j += numberOfTeams) {
                let individual = document.createElement("p");
                individual.classList = "new-individual"
                individual.innerHTML = newTeam[j]; 
                div.appendChild(individual);
            }
        }
    }
}
console.log(createTeams())
/*------ Función reset ------*/
function reset() {
    let container = document.getElementById("teams");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    names = newTeam;//reinicializamos el array con los nombres para poder volver a generar sin volver a introducir los nombres
    newTeam = [];
}