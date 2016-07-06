var Passenger = function( startFloor, destination, building ) {
  var props = {
    start: startFloor,
    direction: undefined,
    onElevator: false,
    destination: destination
  };

  // cannot start on a floor above building max
  if ( startFloor < 1 || destination < 1 ) {
    throw new Error( 'Too low.' );
  }

  if ( building.topFloor < startFloor || building.topFloor < destination ) {
    throw new Error( 'Too high.' );
  }

  var differenceInFloors = startFloor - destination;
  // same floor
  if ( differenceInFloors === 0 ) {
    throw new Error( 'Select a different floor.' );
  } else if ( differenceInFloors > 0 ) {
    props.direction = 'down';
  } else {
    props.direction = 'up';
  }

  return props;
};

// refactor so that Passenger requests on create with building bindings
Passenger.prototype.requestElevator = function( building ) {
  if ( this.onElevator ) {
    throw new Error ( 'Already on elevator.' );
  } else {
    building.requestLift( this );
  }
};


Passenger.prototype.boardElevator = function( elevator ) {
  elevator.registerNewFloorSlection( destination );
  this.onElevator = true;
};

Passenger.prototype.disembark = function( elevator ) {
  this.start = elevator.currentFloor;
  this.direction = undefined;
  this.onElevator = false;
  this.destination = undefined;
  // remove from elevator
};
