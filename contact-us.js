//var button = $('button');
//button.on("click", doSomething);
//function doSomething() {
//alert("すごい ね! あなた は ボタン が あっとうする!!!")//Sugoi ne! Anata wa botan ga atto suru!!!,Wow! You pushed the button!!!
//} (Ignore this, this is just an example for me to do buttons and stuff.)

var button = $('button');

button.on("click", printMessage);
button.on ("click", doSomething);

function doSomething() {
  alert("Thank you for submitting your comments!");
}

function printMessage() {
  event.preventDefault();
  var nameInput = $('.flname').val();
 var nameOutput = $('.name-output')
  nameOutput.append(`${nameInput}, we appreciate you taking the time to help us improve. We want to make sure you can have the best experience on our webpage! -The Team- `);
  }






