let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigo = amigoInput.value.trim();

    if (amigo !== "") {
        amigos.push(amigo);
        amigoInput.value = "";
        atualizarLista();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista para realizar o sorteio.");
        return;
    }

    const resultado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `O amigo sorteado é: ${resultado}`;
}
