
function newName() {
    let name1 = document.getElementById('addName').value; //cogemos los nombres nuevos
    let paragraph = document.createElement('p'); // creamos <p>
    paragraph.textContent = name1; // le damos a <p> el valor los nombres
    paragraph.id = "new-p"; // le ponemos un id para identificarlo
    let div = document.getElementById('old-name'); // le decimos de donde parte
    div.appendChild(paragraph) // lo unimos
    
};
console.log(newName())

