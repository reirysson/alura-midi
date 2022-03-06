function playSound (selectAudio) {
    const elemento = document.querySelector(selectAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }
}

const keyList = document.querySelectorAll('.tecla');


for (let i=0;i<keyList.length;i++){

    const key = keyList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function (){
        playSound(idAudio);
    }

    key.onkeydown = function (event) {

        if (event.code === 'Space'|| event.code === 'Enter'){
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}


