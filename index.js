var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var head = new Image();
var bgs = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

head.src = "head.png";
bgs.src = "bgs.png";
fg.src = "fg.png";
pipeUp.src = "pipeUp.png";
pipeBottom.src = "pipeBottom.png";

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();
var music = new Audio();


fly.src = "fly.mp3";
score_audio.src = "score.mp3";
music.src = "music.mp3"

let gap = 430;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -=100;
    fly.play();
}

// Создание блоков
var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

var score = 0;
// Позиция птички

var xPos = 10;
var yPos = 150;
var grav = 6;

function draw() {
    ctx.drawImage(bgs, 0, 0);
    music.play();

    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;
        pipe[i].x--;





        if(pipe[i].x == 100) {
            score++;


        }









        if(pipe[i].x == 100){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

//Отслеживание прикосновений

        if(xPos + head.width >= pipe [i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + head.height >= pipe[i].y + pipeUp.height + gap)
            || yPos + head.height >= ctx.height) {
            location.reload(); // Перезагрузка страницы
        }


        if(score > 7) {


            pipe[i].x--;
            pipe[i].x--;
            pipe[i].x--;
            pipe[i].x--;
            pipe[i].x--;



            if(pipe[i].x == 100) {
                score++;


            }


            if(pipe[i].x == 100){
                pipe.push({
                    x : cvs.width,
                    y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
                });
            }
        }

    }


    ctx.drawImage(fg, 0, 700);
    ctx.drawImage(head, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "white";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score , 30, 40);
    ctx.fillText("/100", 135,40);








    requestAnimationFrame(draw);


}


pipeBottom.onload = draw;
