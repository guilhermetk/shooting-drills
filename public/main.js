const colors = ['RED', 'GREEN', 'YELLOW', 'BLUE'];
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();


function start() {
    let startSound = document.getElementById('start-sound');
    startSound.load();

    document.getElementById('getReady').innerText = 'Get ready'

    clear();
    document.getElementById('start').disabled = true;

    const color1 = getRandomColor();
    const color2 = getRandomColor();

    const startDelay = Math.floor(Math.random() * 5 + 2) * 1000;
    console.log(startDelay)

    setTimeout(() => {

        startSound.play();

        document.getElementById('getReady').innerText = 'Go!'

        const canvas1 =  document.getElementById('canvas1');
        canvas1.style.background = color1;
        let ctx = canvas1.getContext("2d");
        ctx.font = "70px Arial";
        ctx.fillStyle = "white";
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.strokeText("1", canvas1.width/2, canvas1.height/2);
        ctx.fillText("1", canvas1.width/2, canvas1.height/2);


        const canvas2 = document.getElementById('canvas2');
        canvas2.style.background = color2;
        ctx = canvas2.getContext("2d");
        ctx.font = "bold 70px Arial";
        ctx.fillStyle = "white";
        ctx. textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.strokeText("2", canvas2.width/2, canvas2.height/2);
        ctx.fillText("2", canvas2.width/2, canvas2.height/2);


        document.getElementById('start').disabled = false;
    }, startDelay);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * 4)];
}

function clear() {
    document.getElementById('canvas1').style.background = 'white';
    document.getElementById('canvas2').style.background = 'white';
}

function timer() {
    var sec = 30;
    var timer = setInterval(function () {
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}