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

        //Mapeia input de acordo com alfabeto
        let texto = document.querySelector("#mensagem").value;
        let textoMapeado = [];
            
        for (let j = 0; j < texto.length; j++) {
            if (ASCII.some(item => texto.includes(item))) {
                textoMapeado.push(ASCII.indexOf(texto[j]));
            }
        }

        //Decifra mensagem
        let decifradoMapeado = [];
        let decifrado = [];

        for (let k = 0; k < textoMapeado.length; k++) {
            decifradoMapeado[k] = (textoMapeado[k] + ASCII.length - chaveMapeada[k%chaveMapeada.length]) % ASCII.length;
            decifrado.push(ASCII[decifradoMapeado[k]]);
            
        }

        //Exibe o output decifrado
        var textoDecifrado = document.querySelector("#resposta");
        textoDecifrado.textContent = decifrado.join('');
        
        


    });
});