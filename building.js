var Building = function( numberOfFloors ) {
  this.requests = [];
  this.elevators = [];
  this.topFloor = numberOfFloors;

  // step-by-step to conceptualize movement
  setTimeout(function() {
    delegateNewRequests();
    moveElevators();
  }, 1000);
};

Building.prototype.addElevator = function() {
  // would have access to Elevator class
  this.elevators.push( new Elevator() );
  return this.elevators.length;
};

Building.prototype.requestLift = function( currentFloor, destinationFloor ) {
  this.requests.push( { start: currentFloor, destination: destinationFloor } );
};