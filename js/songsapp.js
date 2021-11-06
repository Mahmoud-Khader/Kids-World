/* eslint-disable no-unused-vars */
'use strict';
let soundsArray = [];
let showArray = [];
function Display(namedisplay, typeofdisplay, images) {
  this.namedisplay = namedisplay;
  this.typeofdisplay = typeofdisplay;
  this.images = images;


  if (typeofdisplay === 'audio') {
    soundsArray.push(this);
  } else if (typeofdisplay === 'vedio') {
    showArray.push(this);
  }
}

// arrayOf=[soundsArray,showArray];


let tuyOur = new Display('Tuyour ALjana Audio', 'audio', 'songimg/tuyuor.png');
let spaCe = new Display('Spacetoon Audio', 'audio', 'songimg/space.jpg');
let islaMic = new Display('English Learn Audio', 'audio', 'songimg/snglish.jpg');
/////////////////////////////////////////////////////////////////////////////
let kidsVedio = new Display('Kids Video', 'vedio', 'songimg/vediosongs.jpg');
let spaceToonVedio = new Display('Spacetoon Video', 'vedio', 'songimg/spa.jpg');
let enGlish = new Display('Learn English Video', 'vedio', 'songimg/meng.png');
///////////////////////////////////////////////////////////////////////////////








let showVedio = document.getElementById('video');
showVedio.addEventListener('click', function (event) {
  let getDiv = document.getElementById('render');
  getDiv.innerHTML = '';
  // for (let index = 0; index < showArray.length; index++) {
  // }
  let div1 = document.createElement('div');
  div1.innerHTML = showArray[0].namedisplay + '<a href=\'video.html\'><img class=\'ras-img\' ' + showArray[0].images + ' src=\'songimg/vediosongs.jpg' + '\' width=\'405\' height=\'200\'></a></div>' + showArray[1].namedisplay + '<a href=\'spacevedio.html\'><img class=\'ras-img\' ' + showArray[1].images + ' src=\'songimg/spa.jpg' + '\' width=\'405\' height=\'200\'></a></div>'+showArray[2].namedisplay + '<a href=\'english.html\'><img class=\'ras-img\' ' + showArray[2].images + ' src=\'songimg/meng.png' + '\' width=\'405\' height=\'200\'></a></div>';
  getDiv.appendChild(div1);
});



let showSound = document.getElementById('audio');
showSound.addEventListener('click', function (event) {
  let getDiv = document.getElementById('render');
  getDiv.innerHTML = '';
  // for (let index = 0; index < showArray.length; index++) {
  // }
  let div1 = document.createElement('div');
  div1.innerHTML = soundsArray[0].namedisplay + '<a href=\'toyuor.html\'><img class=\'ras-img\' ' + soundsArray[0].images + ' src=\'songimg/tuyuor.png' + '\' width=\'405\' height=\'200\'></a></div>' + soundsArray[1].namedisplay + '<a href=\'space.html\'><img class=\'ras-img\' ' + soundsArray[1].images + ' src=\'songimg/space.jpg' + '\' width=\'405\' height=\'200\'></a></div>'+soundsArray[2].namedisplay + '<a href=\'engaudio.html\'><img class=\'ras-img\' ' + soundsArray[2].images + ' src=\'songimg/snglish.jpg' + '\' width=\'405\' height=\'200\'></a></div>';
  getDiv.appendChild(div1);
});

// ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //happy and sad face
// let parent=document.getElementById('like');
// let anotherParent=document.getElementById('dislike')
// function Face(nameface, imageface ){
//   this.nameface=nameface;
//   this.imageface=imageface;
//   this.total=0;
// }


// new Face=('sad','songimg/sad.jpg');
// new Face=('happy','songimg/happy.jpg');




// happyFace.imageface=Face.imageface;
// sadFace.imageface=Face.imageface;

// happyFace.addEventListener('click', handleUserClick);
// sadFace.addEventListener('click', handleUserClick);


// function handleUserClick(event) {
//   if(sadFace!== happyFace)
//   sadFace= total++;
// }else
