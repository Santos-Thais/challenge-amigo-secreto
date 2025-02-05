![o título "Amigo Secreto" e o desenho de um menino com cabelo black power segurando uma placa nas mãos] (https://github.com/user-attachments/assets/e308d0b6-dd5c-48ea-85cf-c4358309a288)

# **Sorteio do Amigo Secreto**

## O que esta aplicação faz
Esta aplicação permite aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

### **Para utilizar sigas os passos:**
1. Digitar um nome
2. Clicar em "Adicionar"
3. Digitar tantos nomes quantos forem participar, sempre clicar em "Adicionar" após digitar cada nome
4. Clicar em "Sortear amigo"
5. Hora de trocar os presentes!

### **Códigos usados**
- `const amigoInput = document.getElementById("amigo");` busca um elemento HTML que possui o atributo `id="amigo"´ e armazena na constante ´amigoInput`.
- `const amigo = amigoInput.value.trim();` obtém o valor atual do elemento referenciado por `amigoInput` e retorna o texto que o usuário digitou
- `if (amigos.length > 0 && amigos.includes(amigo)) { 
            alert("Esse amigo já está na lista.");
            return;`

[Clique aqui para abrir a aplicação] (http://127.0.0.1:5500/index.html)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20ÚLTIMOS_AJUSTES&color=GREEN&style=for-the-badge)


