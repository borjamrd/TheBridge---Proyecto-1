function newName() {
    let name1 = document.getElementsByName('addName'); //NOMBRE NUEVO
    let myElement = document.getElementById('old-name')
    myElement.innerHTML += name1 
    return name1
};
console.log(newName())
