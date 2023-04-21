function getNearestLocationCue(x,y,z) {
  var initXPos = locations[0]["x-position"];
  var initYPos = locations[0]["y-position"];
  var initZPos = locations[0]["z-position"];
  var bestDist = Math.sqrt((x-initXPos)**2 + (y-initYPos)**2 + (z-initZPos)**2);
  var nearestLocation = 0;
  for (let i = 1; i < locations.length; i++) {
    var xPos = locations[i]["x-position"];
    var yPos = locations[i]["y-position"];
    var zPos = locations[i]["z-position"];
    var dist = Math.sqrt((x-xPos)**2 + (y-yPos)**2 + (z-zPos)**2);
    if (dist < bestDist) {
      bestDist = dist;
      nearestLocation = i;
    }
  }
  return locations[nearestLocation];
}