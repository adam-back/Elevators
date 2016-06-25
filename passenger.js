var Passenger = function( currentFloor ) {
  this.currentFloor = currentFloor;
}

Passenger.prototype.hailEvevator = function( destination ) {
  this.destination = destination;
  this.pickedUp = false;
};
