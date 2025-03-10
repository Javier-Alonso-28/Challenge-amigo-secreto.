let NombresAmigos = [];


function agregarAmigo() {
    const nombre = document.getElementById('amigo').value; 
    if (nombre !== "" && !NombresAmigos.includes(nombre)) { 
        NombresAmigos.push(nombre); 
        document.getElementById('amigo').value = ""; 
        mostrarLista(); 
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}


function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    NombresAmigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (NombresAmigos.length < 2) { 
        alert("Por favor, agregue al menos 2 amigos.");
        return;
    }


    const indice = Math.floor(Math.random() * NombresAmigos.length);
    const amigoSecreto = NombresAmigos[indice];


    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}
