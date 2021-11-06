"use strict";
////////Create Top button//////
var mybutton = document.getElementById("myBtn");

// When the user scrolls down show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
    // console.log("hello");
  } else {
    //    console.log('hi');
    mybutton.style.display = "none";
  }
}

//When the user clicks on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//////////Create an Event////////////////

// function myRequest() {
//   document.getElementById("send").innerHTML = "Your request has been received";
// }

////2////

// document.getElementById("myDiv").addEventListener("scroll", myFunction);

// function myFunction() {
//   document.getElementById("word").innerHTML = "Our Advanced Advices";
// }

//////////////change styling///////
// function myFunction() {
//   document.getElementById("text").style.fontSize = "25px";
//   document.getElementById("text").style.color = "black";
//   document.getElementById("text").style.backgroundColor = "pink";
// }
///////////////// need sub////////////////////////////

// function onButtonClick() {
//   document.getElementById("tInput").className = "block";
//   alert("We Recived Your Submition");
//   window.reset();
//   // document.getElementById("textInput").reset();
// }

// function showInputBox() {
//   if (document.getElementById("textInput")) {
//     document.getElementById("textInput").style.display = "block";
//     alert("For Daily Health Advices Submit your E-mail");
//     document.getElementById("textInput").reset();
//   }
// }
// function subInputtBox() {
//   if (document.getElementById("textSubt")) {
//     document.getElementById("textSub").style.display = "block";
//     alert("For Daily Health Advices Submit your E-mail");
//   }
// }

//// convert weight
function weightConverter(valNum) {
  document.getElementById("outputKilograms").innerHTML = valNum / 2.2046;
}

///// Function feed prog

function newPage() {
  window.location =
    "https://www.feedingyourkids.org/?gclid=Cj0KCQjwna2FBhDPARIsACAEc_Vw6ImCwIv-6mrCMZ4hfdcg62rYf7H9S7LMKUlWYFBOnN5PrdyjgDEaAhy8EALw_wcB";
}

//// Function to more suggestions

// function newSugg() {
//   window.location =
//     "https://www.betterhealth.vic.gov.au/health/HealthyLiving/lunch-box-tips#food-suggestions-for-lunch-boxes";
// }
