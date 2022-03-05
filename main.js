function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');


for (let i=0;i<keyList.length;i++){

    const key = keyList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function (){
        playSound(idAudio);
    }
}


