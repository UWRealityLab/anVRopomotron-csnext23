AFRAME.registerComponent('location-cue-query', {
  init: function () {
    let el = this.el

    this.queryLocation = function(e) {
      if(e.code == "KeyT") {
        let currPosition = el.getAttribute("position");
        let locationCue = getNearestLocationCue(currPosition.x, currPosition.y, currPosition.z);
        console.log(locationCue.title);
        console.log(locationCue.description);
      }
    }

    window.addEventListener("keypress", this.queryLocation);
  },
  remove: function() {
    window.removeEventListener("keypress", this.queryLocation);
  }
});