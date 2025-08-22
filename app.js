// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Jaime Alberto Suarez Moctezuma. 

// Array para guardar los nombres. 
let amigos = [];

// FUnción para añadir un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    // Guardar en el array.
    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Función para mostrar la lista de amigos en el <ul>
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert ("No hay amigos en la lista. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
   resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

}