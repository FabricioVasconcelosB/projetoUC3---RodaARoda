// Lista de palavras e suas dicas
var palavras = [
    [['F','l','o','r','e','s','t','a'], ['Árvores']],
    [['T','e','l','e','f','o','n','e'], ['Ligações']],
    [['L','u','a'], ['Satélite']],
    [['M','o','n','t','a','n','h','a'], ['Pico']],
    [['B','a','n','a','n','a'], ['Amarelo']],
    [['C','a','n','e','t','a'], ['Escrever']],
    [['G','i','r','a','f','a'], ['Pescoço']],
    [['F','o','g','o'], ['Queimar']],
    [['E','s','p','e','l','h','o'], ['Reflexo']],
    [['P','i','a','n','o'], ['Teclas']],
    [['T','i','g','r','e'], ['Listras']],
    [['M','a','ç','ã'], ['Fruta']],
    [['R','e','l','ó','g','i','o'], ['Tempo']],
    [['E','l','e','f','a','n','t','e'], ['Tromba']],
    [['E','s','c','o','l','a'], ['Educação']],
    [['L','á','p','i','s'], ['Grafite']],
    [['D','i','n','h','e','i','r','o'], ['Moeda']],
    [['C','a','d','e','i','r','a'], ['Assento']],
    [['S','o','l'], ['Brilho']],
    [['B','a','r','c','o'], ['Navegar']],
    [['Á','g','u','a'], ['Beber']],
    [['C','a','c','h','e','c','o','l'], ['Aquecer']],
    [['P','a','p','e','l'], ['Escrita']],
    [['A','r','c','o','-','í','r','i','s'], ['Cores']],
    [['C','o','r','a','ç','ã','o'], ['Amor']]
];

// Escolha aleatória de uma palavra e sua dica
var indiceAleatorio = Math.floor(Math.random() * palavras.length);
var palavraEDica = palavras[indiceAleatorio];
var palavraAleatoria = palavraEDica[0].join(""); // Extrai a palavra aleatória
var dica = palavraEDica[1]; // Extrai a dica correspondente à palavra

console.log("Palavra aleatória: " + palavraAleatoria);
console.log("Dica: " + dica);

// Inicialização da palavra misteriosa e das letras descobertas
var palavraMisteriosa = palavraAleatoria;
var letrasDescobertas = [];

// Inicializando letrasDescobertas com espaços em branco "_"  que representa a letra ainda não descoberta.
for (var posicao = 0; posicao < palavraMisteriosa.length; posicao++) {
    letrasDescobertas.push("_");
}

console.log(letrasDescobertas); // Verifica se as letras foram inicializadas corretamente

// segunda parte //

//coloca aqui a palavra sorteada aleatória 
var palavraMisteriosa = "agiota"; //<<<<<<<<<<<----- Troca aqui
var letrasDescobertas = [];

// Inicializar letrasDescobertas com underlines
for (var i = 0; i < palavraMisteriosa.length; i++) {
    letrasDescobertas.push("_");
}

// Função para verificar se a letra está na palavra
function verificarLetra() {
    var letra = document.getElementById("entradaDaLetra").value.toLowerCase();
    var encontrada = false;

    for (var i = 0; i < palavraMisteriosa.length; i++) {
        if (palavraMisteriosa[i] === letra) {
            letrasDescobertas[i] = letra;
            encontrada = true;
        }
    }

    atualizarPalavraDescoberta();

    if (encontrada) {
        document.getElementById("mensagem").innerText = "A letra '" + letra + "' está na palavra!";
    } else {
        document.getElementById("mensagem").innerText = "A letra '" + letra + "' não está na palavra.";
    }

    // Verificar se todas as letras foram descobertas
    if (letrasDescobertas.indexOf("_") === -1) {
        document.getElementById("mensagem").innerText = "Parabéns! Você adivinhou a palavra!";
    }
}

// Função para atualizar a exibição da palavra descoberta na tela
function atualizarPalavraDescoberta() {
    document.getElementById("palavraDescoberta").innerText = letrasDescobertas.join(" ");
}

// Exibir palavra inicialmente
atualizarPalavraDescoberta();







