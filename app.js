
// Play music by mouse click

// Play drum by keyboard press
document.addEventListener('keydown', function(playByKey) {
  const audio = document.querySelector(`audio[data-key="${playByKey.keyCode}"]`); // Created audio variable to store all the data-key values from the audio elements
  const key = document.querySelector(`.key[data-key="${playByKey.keyCode}"]`); // Created key variable to store all data-key values from the key divs
  if (!audio) return; //Stop the function from running all together
  audio.currentTime = 0; //Reset audio
  audio.play(); //Play audio
  key.classList.add('playing');//Add 'playing' class for CSS to style the "after keypress"
});




