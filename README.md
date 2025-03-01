<p align="center">
<img loading="lazy" src="https://github.com/user-attachments/assets/310bef18-14e9-4f98-aac0-94fa017fb903"/>
</p>

<h1 align="center">Sorteio do Amigo Secreto</h1>

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=%20FINALIZADO&color=GREEN&style=for-the-badge)

### 🧠 O que esta aplicação faz
Esta aplicação permite aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".
+ O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar".
+ Os nomes inseridos serão exibidos em uma lista visível na página.
+ Um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

### 🎯 Propósito do projeto
O propósito deste desafio é praticar os conceitos adquiridos nas aulas sobre lógica de programação.
Para isso, a Alura forneceu o código HTML e CSS, permitindo que o foco esteja totalmente nos aspectos fundamentais da lógica de programação, como variáveis, condicionais, funções e listas, entre outros.

### ⚒️ Tecnologias utilizadas
+ JavaScript
+ HTML
+ CSS

### 🤖 Códigos usados

#### Adicionando um amigo à lista, evitando duplicatas e garantindo que o valor inserido não esteja vazio

```ruby
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigo = amigoInput.value.trim();

    if (amigo !== "") {
        if (amigos.length > 0 && amigos.includes(amigo)) { 
            alert("Esse amigo já está na lista.");
            return;
        }
        amigos.push(amigo);
        amigoInput.value = "";
        atualizarLista();
        document.getElementById("resultado").textContent = "";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}
```
#### Mostra a lista de amigos na tela sempre que um novo nome é adicionado

```ruby
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
```
#### Agora ocorre o sorteio aleatório um amigo da lista e mostra o resultado na tela

```ruby
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista para realizar o sorteio.");
        return;
    }

    const resultado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `O amigo sorteado é: ${resultado}`;
}
```

### 🔗 Acesso ao projeto
Aplicação do site [Sorteio do Amigo Secreto](https://santos-thais.github.io/challenge-amigo-secreto/).

### 🎁 Para utilizar sigas os passos:
1. Digitar um nome
2. Clicar em "Adicionar"
3. Digitar tantos nomes quantos forem participar, sempre clicar em "Adicionar" após digitar cada nome
4. Clicar em "Sortear amigo"
5. Hora de trocar os presentes!

### 🙏 Agradecimento
![alura](https://github.com/user-attachments/assets/ba1b91b1-72f3-489d-8bfd-70c7f2b33af9)

### Desenvolvedora
Feito com muito ❤️ por [Thais Santos](https://github.com/Santos-Thais) 😊



> [!IMPORTANT]
> Status da desenvolvedora: Aliviada 😉
(pq pensou que não conseguiria)


