var Building = function( numberOfFloors ) {
  this.requests = [];
  this.elevators = [];
  this.topFloor = numberOfFloors;
};

Building.prototype.addElevator = function() {
  // would have access to Elevator class
  this.elevators.push( new Elevator() );
  return this.elevators.length;
};