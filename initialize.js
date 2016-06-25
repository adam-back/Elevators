var Building = function( numberOfFloors ) {
  this.elevators = [];
  this.topFloor = numberOfFloors;
};

Building.prototype.addElevator = function() {
  // would have access to Elevator class
  this.elevators.push( new Elevator() );
  return this.elevators.length;
};

var createElevatorSim = function( numberOfFloors, numberOfElevators ) {
  // enforce minimums
  if ( numberOfFloors < 1 || numberOfElevators < 1 ) {
    throw new Error( 'Minimum of one floor and elevator needed!' );
  }

  var building = new Building( numberOfFloors );

  // create
  for ( var i = 0; i < numberOfElevators.length; i++ ) {
    building.addElevator();
  }

  // return interval id for step-by-step movement of elevators
  setInterval(function() {
    // in order to conceptualize movement, I've chosen to step elevators once per seconds
    handleNewPassengerRequests();
    moveElevatorsOneFloor();
  }, 1000);

  return building;
};

// createElevatorSim( 4, 2 );
var WTC = createElevatorSim( 4, 2 );