AFRAME.registerComponent('location-cue-query', {
  init: function () {
    let el = this.el

    this.queryLocation = function(e) {
      if(e.code == "KeyT") {
        let currPosition = el.getAttribute("position");
        let locationCue = getNearestLocationCue(currPosition.x, currPosition.y, currPosition.z);
        // console.log(locationCue.title);
        // console.log(locationCue.description);

        // Create a new SpeechSynthesisUtterance object with the location details
        var utterance = new SpeechSynthesisUtterance(locationCue.description);

        // Use the SpeechSynthesis API to speak the location details
        window.speechSynthesis.speak(utterance);
      }
    }

    window.addEventListener("keypress", this.queryLocation);
  },
  remove: function() {
    window.removeEventListener("keypress", this.queryLocation);
  }
});
