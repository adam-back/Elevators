var elevators = [];

var createElevatorSim = function( numberOfFloors, numberOfElevators ) {
  // enforce minimums
  if ( numberOfFloors < 1 || numberOfElevators < 1 ) {
    throw new Error( 'Minimum of one floor and elevator needed!' );
  }

  // create
  for ( var i = 0; i < numberOfElevators.length; i++ ) {
    // has access to Elevator class
    elevators.push( new Elevator() );
  }

  // return interval id for step-by-step movement of elevators
  return setInterval(function() {
    // in order to conceptualize movement, I've chosen to step elevators once per seconds
    handleNewPassengerRequests();
    moveElevatorsOneFloor();
  }, 1000);
};

// createElevatorSim( 4, 2 );
