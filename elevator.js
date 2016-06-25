// elevator class
var Elevator = function( topFloor ) {
  // start at ground floor
  this.topFloor = topFloor;
  this.currentFloor = 1;
  this.destinations = [];
  this.moving = false;
  this.history = {
    floors: 0,
    trips: 0
  };
  this.maintenanceMode = false;
  this.openDoor = function( message ) {
    console.log( 'Opening door to ' + message + ' passenger.' );
  }
};

Elevator.prototype.startTrip = function( pickupFloor, destinationFloor ) {
  this.destinations.push( { pickup: pickupFloor, destination: destinationFloor, hasPickedUpPassenger: false } );
  this.history.trips++;
  this.moving = true;
};

Elevator.prototype.move = function() {
  if ( this.moving === true ) {
    var nextDestination = destinations[ 0 ];
    if ( nextDestination.hasPickedUpPassenger ) {
      // move towards destination
    } else {
      // move towards passenger call
    }

    this.history.floors++;
    console.log( 'Moving to floor' );
  // elevator is unoccupied and has no destinations
  } else {
    return;
  }
};

Elevator.prototype.pickup = function( request ) {
  this.openDoor( 'pick up' );
  request.hasPickedUpPassenger = true;
}

Elevator.prototype.dropoff = function() {
  this.openDoor( 'drop off' );
  // passenger disembarks
  ths.destinations.shift();

  // check if elevator should go into maintenance mode
  // only if there aren't more destinations, don't want to strand passengers
  // not just any 100, but multiples of 100 FIX
  if ( this.destinations.length === 0 && this.history.trips >= 100 ) {
    this.doMaintenance();
  }
};

Elevator.prototype.doMaintenance = function () {
  this.moving = false;
  this.maintenanceMode = true;

  setTimeout(function() {
    this.maintenanceMode = false;
  }, 5000);
};