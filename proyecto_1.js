function newName() {
    let unknown = document.getElementsByName('addName'); //NOMBRE NUEVO
    
    let newName = document.createElement('p')
    newName.id='new-name'

    let myElement = document.getElementById('old-name')
    myElement.appendChild(unknown)

    myElement.innerHTML += unknown 
    
};

