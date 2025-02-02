//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let amigoSecret = escolherAmigoAleatorio();


const botaoSortear = document.querySelector('#sortear');
const resultado = document.querySelector('#resultado');

botaoSortear.addEventListener('click', function() {
    const inputNomes = document.querySelector('#nomes').value;

    const listaNomes = inputNomes.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

    if (listaNomes.length === 0) {
        resultado.textContent = 'Por favor, digite ao menos um nome válido.';
        return;
      }

      const nomeSorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];

      resultado.textContent = `O nome sorteado foi: 🎉 ${nomeSorteado} 🎉`;
});