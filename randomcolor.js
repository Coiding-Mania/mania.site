function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


var randomTextElement = document.getElementById('randomText');

var textContent = randomTextElement.textContent.trim();
var characters = textContent.split('');

var newContent = '';
characters.forEach(function(character) {

  var randomColor = getRandomColor();

  newContent += '<span style="color: ' + randomColor + ';">' + character + '</span>';
});

// Replace the content of the element with the newContent
randomTextElement.innerHTML = newContent;