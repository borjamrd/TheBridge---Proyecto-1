let myArray = [];
function newName() {
    let name1 = document.getElementById('addName').value; //cogemos los nombres nuevos
    let paragraph = document.createElement('p'); // creamos <p>
    paragraph.textContent = name1; // le damos a <p> el valor los nombres
    paragraph.id = "new-p"; // le ponemos un id para identificarlo
    let box = document.getElementById('old-name'); // le decimos de donde parte
    box.appendChild(paragraph) // lo unimos al documento
    myArray.push(name1)
    //console.log(myArray) Funciona

};
console.log(newName())

function generateTeams() {
    for (let i = 0; i <= myArray.length; i++) {
        let newDiv = document.createElement('div'); // creamos <div>
        //newDiv.textContent = myArray[i]; // le damos a <div> el valor los nombres
        newDiv.id = "new-div"; // le ponemos un id para identificarlo
        let div = document.getElementById('old-div'); // le decimos de donde parte
        div.appendChild(newDiv); // lo unimos al documento
        if (myArray.length % 2 == 0) {
            newDiv = (myArray.length % 2);
        } /* else if (myArray.length % 2 == 1) {
            (newDiv = (myArray.length % 2));
            newDiv[0] = myArray[i] + 1
        } */
    }
}