'use-strict'
let questionsArr = ['which one is a yellow square',
    'which one is a blue circle',
    'which one is a green square',
    'which one is a red circle',
    'which one is a black circle',
    'which one is a lion',
    'which one is a penguin',
    'which one is a crocodile',
    'which one is a giraffe',
    'which one is a parrot',
    'which one is a yellow car',
    'which one is a green car',
    'which one is a cat',
    'which one is a purple-traingle',
    'which one is a blue square',
    'which one is a red square',
    'which one is a green square',
    'which one is a green circle'

];

let imagesArr = ['yellow-rectangle.jpg',
    'blue-circle.png',
    'green-square.png',
    'red-circle.png',
    'black-circle.png',
    'lion.png',
    'penguin.png',
    'crocodile.png',
    'giraffe.png',
    'parrot.png',
    'yellow-car.png',
    'green-car.png',
    'cat.png',
    'purple-traingle.png',
    'blue-rectangle.png',
    'red-square.png',
    'green-square.png',
    'green-circle.png',
    'blue-traingle.png'
];

let motivationArr=['you are smart',
'keep going , you got it' , 
'great work ' , 
'good job' , 
'Amazing',
'so brilliant',
'try again',
'Don\'t stop']

let imgsSection = document.getElementById('images');
let img1 = document.getElementById('image1');
let img2 = document.getElementById('image2');
let img3 = document.getElementById('image3');
let questionParagraph = document.getElementById("question_paragrph_id");
let answerParagraph = document.getElementById("answer_paragraph_id");
let scorePoints = document.getElementById("score");
let correctImage = 0;
let playerName=prompt("what's your name ?")
let home_btn=document.getElementById("home-btn");
let divButtons=document.getElementById("buttons");
divButtons.style.visibility="hidden";




pic.all = [];

function pic(name, extension) {
    this.name = name;
    this.extension = extension;
    this.path = `/img/gusse-game/${name}${extension}`
    pic.all.push(this);
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < imagesArr.length; i++) {
    let point = imagesArr[i].indexOf('.');
    let name = imagesArr[i].substring(0, point);
    let extension = imagesArr[i].substring(point, imagesArr[i].length);
    new pic(name, extension);

}



//---------set images to images section----------------------------

function setImage(imageIndex, questionIndex, num) {


    if (imageIndex !== questionIndex) {
        if (num == 1) {
            img2.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) {
                img3.src = pic.all[imageIndex - 1].path;
            }
            else {
                if (imageIndex + 1 != questionIndex)
                    img3.src = pic.all[imageIndex + 1].path
                else
                    img3.src = pic.all[imageIndex + 2].path;
            }

        }
        if (num == 2) {
            img1.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) {
                console.log(imageIndex - 1)
                img3.src = pic.all[imageIndex - 1].path;
            }
            else {
                if (imageIndex + 1 != questionIndex)
                    img3.src = pic.all[imageIndex + 1].path
                else
                    img3.src = pic.all[imageIndex + 2].path;
            }

        }
        if (num == 3) {
            img1.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) { img2.src = pic.all[imageIndex - 1].path; }
            else {
                if (imageIndex + 1 != questionIndex)
                    img2.src = pic.all[imageIndex + 1].path
                else
                    img2.src = pic.all[imageIndex + 2].path;


            }

        }


    }

}


//----------------------show the images-------------------------

function renderImgs() {
    let imgNum = random(1, 3);
    correctImage = imgNum;
    let index = random(0, questionsArr.length - 1);
    let randomImageIndex = random(0, imagesArr.length - 1);
    while (index == randomImageIndex) {
        index = random(0, questionsArr.length - 1);
    }


    let imgName = 'img';
    let ask = questionsArr[index];
    let answer = index;
    questionParagraph.innerHTML = ask;
    questionParagraph.setAttribute('class' , 'questionParagraph');




    switch (imgNum) {
        case 1: img1.src = pic.all[index].path;
            setImage(randomImageIndex, index, 1);
            break;
        case 2: img2.src = pic.all[index].path;
            setImage(randomImageIndex, index, 2);
            break;
        case 3: img3.src = pic.all[index].path;
            setImage(randomImageIndex, index, 3);


    }


}

renderImgs();


let points = 0;
let attemps = 10;
let count = 0;

//--------------------sounds----------------------------------
let sounds = ["http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3",
    "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg",
    "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"

];



//----------------- handle every click to every correct image-------------------

imgsSection.addEventListener('click', handleEvent)
function handleEvent(events) {
    let correctAnswerSound = new sound(sounds[0]);
let wrongAnswerSound = new sound(sounds[1]);
let popScroeSound = new sound(sounds[2]);
    
    // let audio = new Audio();
    // audio.src;
   



    if (count === attemps) { alert(`no more clicks , you have reached ${count} click`) }
    else {
       

        switch (correctImage) {
            case 1:
                if (events.target.id == image1.id) {
                    points++;
                    correctAnswerSound.play();
                   correctAnswerPopBox(playerName);

                }
                else {
                    wrongAnswerSound.play();
                    wrongAnserPopBox();
                }
                break;
            case 2:
                if (events.target.id == image2.id) {
                    points++;
                    correctAnswerSound.play();
                   correctAnswerPopBox(playerName);
                    
                    

                }
                else {
                    wrongAnswerSound.play();
                    wrongAnserPopBox();
                }
                break;
            case 3:
                if (events.target.id == image3.id) {
                    points++;
                    correctAnswerSound.play();
                   correctAnswerPopBox(playerName);

                }
                else {
                    wrongAnswerSound.play();
                    wrongAnserPopBox()
                }
                break;


        }
        renderImgs();
        count++;

    }


    if (attemps == count) {
        questionParagraph.style.display="none";
        answerParagraph.style.display="none";
        wrongAnswerSound.stop();
        correctAnswerSound.stop();
        popScroeSound.play();
        divButtons.style.visibility="visible"
        divButtons.setAttribute("class","zoomInDown")
        
        scorePoints.setAttribute('class', 'scoreParagraph');
        scorePoints.innerHTML = "your score is " + points + "/10";
    }

}
//-------------------------sound contructor to hold the sounds--------------------------------
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function correctAnswerPopBox(name){
    let motivationMessageIndex=random(0,5)
    answerParagraph.setAttribute('class','correctAnswer');
    answerParagraph.innerHTML = "correct , "+motivationArr[motivationMessageIndex]+" "+name;
}
function wrongAnserPopBox()
{  wrongMessageIndex=random(6,7);
    answerParagraph.setAttribute('class','wrongAnswer');
    answerParagraph.innerHTML = "wrong ,  "+motivationArr[wrongMessageIndex];
}

// home_btn.addEventListener('click',handle);

// function handle(event)
// {

// }


