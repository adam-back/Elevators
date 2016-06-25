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
  this.openDoor = function() {
    console.log( 'Opening door to pick up passenger.' );
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

Elevator.prototype.doMaintenance = function () {
  this.moving = false;
  this.maintenanceMode = true;

  setTimeout(function() {
    this.maintenanceMode = false;
  }, 5000);
};