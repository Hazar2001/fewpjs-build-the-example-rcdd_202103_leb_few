const EMPTY_HEART = '♡'const FULL_HEART = ':hearts:'
const glyphStates = {  "♡": ":hearts:",  ":hearts:": "♡"};
const colorStates = {  "red" : "",  "": "red"};
const articleHearts = document.querySelectorAll(".like-glyph");
function likeCallback(e) {  const heart = e.target;  mimicServerCall("bogusUrl")

for (const glyph of articleHearts) {  glyph.addEventListener("click", likeCallback);}
//------------------------------------------------------------------------------// Don't change the code below: this function mocks the server response//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={})
 {  return new Promise(function(resolve, reject) {    setTimeout(function() {
      const isRandomFailure = Math.random() < .2      if (isRandomFailure) {        reject("Random server error. Try again.");      }
       else
 {        resolve("Pretend remote server notified of action!");      }    }, 300);  });}
