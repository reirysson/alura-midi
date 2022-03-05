function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

let i = 0;

while (i<keyList.length){

    const key = keyList[i];
    const instrument = key.classList[1];

    const idAudio = `#som_${instrument}`;

    key.onclick = function (){
        playSound(idAudio);
    }

    i = i + 1;

    console.log(i);
}


