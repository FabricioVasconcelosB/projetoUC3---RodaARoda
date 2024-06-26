 var palavras = [
        [['f','l','o','r','e','s','t','a'], ['Árvores']],
        [['t','e','l','e','f','o','n','e'], ['Ligações']],
        [['l','u','a'], ['Satélite']],
        [['m','o','n','t','a','n','h','a'], ['Pico']],
        [['b','a','n','a','n','a'], ['Amarelo']],
        [['c','a','n','e','t','a'], ['Escrever']],
        [['g','i','r','a','f','a'], ['Pescoço']],
        [['f','o','g','o'], ['Queimar']],
        [['e','s','p','e','l','h','o'], ['Reflexo']],
        [['p','i','a','n','o'], ['Teclas']],
        [['t','i','g','r','e'], ['Listras']],
        [['m','a','ç','ã'], ['Fruta']],
        [['r','e','l','o','g','i','o'], ['Tempo']],
        [['e','l','e','f','a','n','t','e'], ['Tromba']],
        [['e','s','c','o','l','a'], ['Educação']],
        [['l','á','p','i','s'], ['Grafite']],
        [['d','i','n','h','e','i','r','o'], ['Moeda']],
        [['c','a','d','e','i','r','a'], ['Assento']],
        [['s','o','l'], ['Brilho']],
        [['b','a','r','c','o'], ['Navegar']],
        [['a','g','u','a'], ['Beber']],
        [['c','a','c','h','e','c','o','l'], ['Aquecer']],
        [['p','a','p','e','l'], ['Escrita']],
        [['v','e','r','m','e','l','h','o'], ['Cor']],
        [['c','o','r','a','ç','a','o'], ['Amor']]
        [['','','','','','','','']]
    ];
    // Escolha aleatória de uma palavra e sua dica
    var indiceAleatorio = Math.floor(Math.random() * palavras.length);
    var palavraEDica = palavras[indiceAleatorio];
    var palavraAleatoria = palavraEDica[0].join(""); // Extrai a palavra aleatória
    var dica = palavraEDica[1]; // Extrai a dica correspondente à palavra
    console.log("Palavra aleatória: " + palavraAleatoria);

    // Inicialização da palavra misteriosa e das letras descobertas
    var palavraMisteriosa = palavraAleatoria;
    var letrasDescobertas = [];

    // Inicializando letrasDescobertas com espaços em branco "_" que representa a letra ainda não descoberta.
    for (var posicao = 0; posicao < palavraMisteriosa.length; posicao++) {
        letrasDescobertas.push("_");
    }

    console.log(letrasDescobertas); // Verifica se as letras foram inicializadas corretamente

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
            document.getElementById("entradaDaLetra").value = "";
        } else {
            document.getElementById("mensagem").innerText = "A letra '" + letra + "' não está na palavra.";
        }

        // Verificar se todas as letras foram descobertas
        if (letrasDescobertas.indexOf("_") === -1) {
            document.getElementById("mensagem").innerText = "Parabéns! Você adivinhou a palavra!";
        }
    }

    // Função para chutar a palavra completa
    function chutarPalavra() {
        var palavraChutada = document.getElementById("chutarPalavra").value.toLowerCase();
        
        if (palavraChutada === palavraMisteriosa) {
            document.getElementById("chutarPalavra").value = "";
            // Se a palavra chutada estiver correta, preencha os blocos acima com a palavra
            for (var i = 0; i < palavraMisteriosa.length; i++) {
                letrasDescobertas[i] = palavraMisteriosa[i];
            }
            atualizarPalavraDescoberta();
            document.getElementById("mensagem").innerText = "Parabéns! Você acertou a palavra!";
        } else {
            document.getElementById("mensagem").innerText = "Que pena! Tente novamente.";
        }
    }

    // Função para atualizar a exibição da palavra descoberta na tela
    function atualizarPalavraDescoberta() {
        document.getElementById("palavraDescoberta").innerText = letrasDescobertas.join(" ");
    }

    // Exibir palavra inicialmente
    atualizarPalavraDescoberta();

    // Exibir a dica
    document.getElementById("dica").innerText = "Dica: " + dica;


    function reiniciar(){
        window.location.reload();
}
