document.addEventListener("DOMContentLoaded", function() {

    //Ao clicar no botão o evento é ativado
    document.querySelector("#botao").addEventListener("click", function() {

        //Lista com caracteres printaveis da codificação ASCII
        const ASCII = [];

        for(let i = 32; i < 127; i++) { //captura espaço como primeiro elemento e inclui pontuações, números e letras
            ASCII.push(String.fromCharCode(i));
        } 

        //Mapeia chave para codificação ASCII
        const chave = 'abc';
        const chaveMapeada = [];

        for (let j = 0; j < chave.length; j++) {
            if (ASCII.some(item => chave.includes(item))) {
                chaveMapeada.push(ASCII.indexOf(chave[j]));
            }
        }

        //Mapeia mensagem para codificação ASCII
        let mensagem = document.querySelector("#mensagem").value;
        let mensagemMapeada = [];

        for (let k = 0; k < mensagem.length; k++) {
            if (ASCII.some(item => mensagem.includes(item))) {
                mensagemMapeada.push(ASCII.indexOf(mensagem[k]));
            }
        }

        //Cifrando a mensagem
        let cifra = [];
        let cifraMapeada = [];

        for (let l = 0; l < mensagemMapeada.length; l++) {
            cifra[l] = (mensagemMapeada[l] + chaveMapeada[l%chaveMapeada.length]) % ASCII.length;
            cifraMapeada.push(ASCII[cifra[l]]);
        }

        //Exibe o output cifrado
        var cifrado = document.querySelector("#resposta");
        cifrado.textContent = cifraMapeada.join('');
    });
});

