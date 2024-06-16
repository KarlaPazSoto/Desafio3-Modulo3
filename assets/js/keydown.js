let colores = {
    'a': 'pink',
    's': 'orange',
    'd': 'lightblue',
    'q': 'purple',
    'w': 'grey',
    'e': 'brown'
};

document.addEventListener('keydown', function(event) {
    let color = colores[event.key];
    if (color) {
        if (event.key === 'a' || event.key === 's' || event.key === 'd') {
            console.log("holamorcito" + color);
            document.getElementById("contenedor").style.backgroundColor = color;
        } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
            let bloqueNuevo = document.createElement('div');
            bloqueNuevo.style.width = '200px';
            bloqueNuevo.style.height = '200px';
            bloqueNuevo.style.border = '5px solid black';
            bloqueNuevo.style.backgroundColor = color;
            document.body.appendChild(bloqueNuevo);
        }
    }
});