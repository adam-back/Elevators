var Passenger = function( startFloor ) {
  return {
    start: startFloor,
    direction: undefined,
    onElevator: false,
    destination: undefined
  };
};

Passenger.prototype.requestElevator = function( upOrDown ) {
  if ( this.onElevator ) {
    throw new Error ( 'Already on elevator.' );
  } else {
    this.direction = upOrDown;
    // dispatch to building requests
  }
};

Passenger.prototype.pressDestinationButton = function( destination ) {
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
  }
};

Passenger.prototype.disembark = function() {
  this.start = // elevator current floor
  this.direction = undefined;
  this.onElevator = false;
  this.destination = undefined;
};

