var Passenger = function( startFloor, building ) {
  // cannot start on a floor above building max
  if ( startFloor < 1 ) {
    throw new Error( 'Cannot start below ground level (1).' );
  }

  if ( building.topFloor < startFloor ) {
    throw new Error( 'Cannot start above top floor ('+ building.topFloor +').' );
  }

  return {
    start: startFloor,
    direction: undefined,
    onElevator: false,
    destination: undefined
  };
};

Passenger.prototype.requestElevator = function( upOrDown, building ) {
  if ( this.onElevator ) {
    throw new Error ( 'Already on elevator.' );
  } else {
    this.direction = upOrDown;
    // dispatch to building requests
    building.requestLift( upOrDown, this.startFloor );
  }
};

Passenger.prototype.pressDestinationButton = function( destination, elevator ) {
  if ( !this.onElevator ) {
    throw new Error( 'Not on elevator yet.' );
  }

  var differenceInFloors = this.start - destination;
  // same floor
  if ( differenceInFloors === 0 ) {
    throw new Error( 'Select a different floor.' );
  // direction up, but selection down
  } else if ( this.direction === 'up' && differenceInFloors > 0 ) {
    throw new Error( 'Select a different floor.' );
  // direction down, but selection up
  } else if ( this.direction === 'down' && differenceInFloors < 0 ) {
    throw new Error( 'Select a different floor.' );
  // good selection, go
  } else {
    this.destination = destination;
    this.onElevator = true;
    // register new destination on elevator
    elevator.registerNewFloorSlection( destination );
  }
};

Passenger.prototype.disembark = function( elevator ) {
  this.start = elevator.currentFloor;
  this.direction = undefined;
  this.onElevator = false;
  this.destination = undefined;
};
