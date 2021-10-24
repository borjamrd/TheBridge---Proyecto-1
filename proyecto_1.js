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
        //console.log(names);
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
    
    if (numberOfTeams < 2 || numberOfTeams > names.length) {
        alert(`Introduce un valor entre 2 y ...`); //falta el contador
    } else {
        while (names.length > 0) {
            for (let i = 0; i < names.length; i++) {
                let random = Math.floor(Math.random()*(names.length-1)); // conseguimos un nombre aleatorio                
                let selection = names[random]; // lo selecciona
                newTeam.push([i,selection]) // lo mete como indice
                //console.log(newTeam);
                names.splice(random, 1); // borra el que ha escogido
            }
        }
        console.log(newTeam)
        
        // Numeramos los equipos formados y los formamos
        for (let numb = 0; numb < numberOfTeams; numb++) {
            console.log(`Team number ${numb + 1}`);
            for (let m = numb; m < newTeam.length; m += numberOfTeams) {
                if (newTeam[m][1] != undefined) {    
                    console.log(newTeam[m][1]);
                    break;
                }
            }
        }
            
        for (let i = 0; i < numberOfTeams; i++) {
            let container = document.getElementById("teams");

            //Creamos div 
            let div = document.createElement("div");
            div.id = "newDiv";
            div.classList = "new-div";
            let boxDiv = document.getElementById("n-team");
            container.appendChild(boxDiv);

            //Creamos h3 (titulos de los equipos)
            let titleTeam = document.createElement("h3");
            titleTeam.id = "newTitle";
            titleTeam.classList = "new-title";
            titleTeam.innerHTML = `Team number ${i + 1}`;
            let boxTitle = document.getElementById("h3-team");
            boxTitle.appendChild(titleTeam);

            //Creamos p de cada nombre
            for (let j = i; j < newTeam.length; j += numberOfTeams) {
                if (newTeam[j][1] != undefined) {
                    let individual = document.createElement("p");
                    individual.id = "newIndividual"
                    individual.classList = "new-individual"
                    individual.innerHTML = newTeam[j][1];
                    boxTitle.appendChild(individual);
                }
            }
        }
    }
}
console.log(createTeams())
/*------ Función reset ------*/
function reset() {

}



