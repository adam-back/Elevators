// elevator class

var Elevator = function() {
  // start at ground floor
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

  this.moveToFloor = function( destinationFloor ) {
    this.destination = destinationFloor;
    this.moving = true;
    while( this.currentFloor !== this.destinationFloor ) {
      if ( this.currentFloor < this.destinationFloor ) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }

      console.log( 'Moved to floor ', this.currentFloor );
    }

    console.log( 'At destination. Opening doors.' );
    this.destination = null;
    this.moving = false;
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

