//Função
function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio); //querySelectorAll pega o primeiro elemento

    if (elemento && elemento.localName === 'audio' ) {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla') //querySelectorAll para selecionarmos todos os elementos do seletor desejado

//while = enquanto

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //templete string
    const idAudio = `#som_${instrumento}`;//'som_{instrumento}'

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

         if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
         }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
 