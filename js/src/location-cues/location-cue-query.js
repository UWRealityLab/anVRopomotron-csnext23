const synth = window.SpeechSynthesis;
if ('speechSynthesis' in window) {
    var synthesis = window.speechSynthesis;
  } else {
    console.log('Text-to-speech not supported.');
  }
AFRAME.registerComponent('location-cue-query', {
    init: function () {
      let el = this.el

      this.queryLocation = function(e) {
        if(e.code == "KeyT") {
          let currPosition = el.getAttribute("position");
          let locationCue = getNearestLocationCue(currPosition.x, currPosition.y, currPosition.z);
          utterance = new SpeechSynthesisUtterance(locationCue.description);
          let voices = synthesis.getVoices();
          utterance.voice = voices[2];
          synthesis.speak(utterance);
          console.log(locationCue.description);
        }
      }
      window.addEventListener("keypress", this.queryLocation);
    },
    remove: function() {
     window.removeEventListener("keypress", this.queryLocation);
    }
  });