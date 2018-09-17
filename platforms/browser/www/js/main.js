//WHAT IS MY STATUS?
button = document.querySelector('#statusbutton')
button.addEventListener('click', () => {
  playAudio();
  console.log('I can haz sleep?')
})

//GET ME SOME AUDIO!
function playAudio() {
    fetch('http://34.217.46.191:5000/status').then(function(response) {
      return response.json();
    })
    .then(function(myJSON) {
      document.querySelector('#audiosrc').src = `http://34.217.46.191:5000/tracks/${myJSON.track_id[3]}`
    });
}

//STOP AUDIO
stopbutton = document.querySelector('#stopbutton')
stopbutton.addEventListener('click', () => {
  stopAudio();
  console.log('Soz.')
})

function stopAudio() {
  document.querySelector('#audiosrc').src = ''
}

//check status function every 1-3 second in flask
//if status is PLAY run the phonegap playAudio()
//if status is OFF run run stopAudio()
