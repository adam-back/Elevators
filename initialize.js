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

  return building;
};

// createElevatorSim( 4, 2 );
var WTC = createElevatorSim( 4, 2 );

