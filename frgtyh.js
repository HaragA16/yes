const phrases = ["Augh!", "Aughh!", "Aughhh!", "Aughhhh!"];
const colors = ["red", "blue", "green", "orange", "purple", "yellow"];

function displayRandomPhrase() {
  const randomPhraseIndex = Math.floor(Math.random() * phrases.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const phrase = phrases[randomPhraseIndex];
  const color = colors[randomColorIndex];
  const aughElement = document.getElementById("augh");
  
  aughElement.innerText = phrase;
  aughElement.style.color = color;
}

displayRandomPhrase();

setInterval(displayRandomPhrase, 10);


setInterval(
  function() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }, 10);

  function rotateImage(id, speed) {
    var angle = 0;
    var image = document.getElementById(id); 
  
    function rotate() {
      angle += speed;
      image.style.transform = 'rotate(' + angle + 'deg)';
      requestAnimationFrame(rotate);
    }
  
    rotate();
  }
  
  rotateImage('img',  179308);
  rotateImage('iran', 10);
