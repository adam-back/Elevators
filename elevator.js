// elevator class
var Elevator = function( topFloor ) {
  // start at ground floor
  this.topFloor = topFloor;
  this.currentFloor = 1;
  this.floorList = Array( topFloor );
  for ( var i = 0; i < floorList.length; i++ ) {
    floorList[ i ] = 0;
  }
  this.passengerDestinations = {};
  this.pickupLocations = {};
  this.moving = false; // or the # of the floor moving towards
  this.direction = undefined;
  this.history = {
    floors: 0,
    trips: 0
  };
  this.maintenanceMode = false;
  this.openDoor = function( message ) {
    console.log( 'Opening door to ' + message + ' passenger.' );
  };

  this.setDirection = function() {
    if ( this.moving ) {
      var difference = this.moving - this.currentFloor;
      if ( difference < 0 ) {
        this.direction = 'down';
      } else {
        this.direction = 'up';
      }

      return this.direction;
    } else {
      throw new Error( 'Must know which floor we\'re moving towards.' );
    }
  }
};

Elevator.prototype.registerPickupRequest = function( pickupFloor ) {
  this.pickupLocations[ pickupFloor ] = true;
  this.history.trips++;

  if ( !moving ) {
    this.moving = pickupFloor;
    this.setDirection();
  }
};

Elevator.prototype.registerNewFloorSelection = function( floorNumber ) {
  this.floorList[ floorNumber - 1 ]++;
  this.passengerDestinations[ floorNumber ] = this.floorList[ floorNumber - 1 ];
};

Elevator.prototype.move = function() {
  if ( this.moving ) {
    var nextDestination = passengerDestinations[ 0 ];
    if ( nextDestination.hasPickedUpPassenger ) {
      // move towards destination
    } else {
      // move towards passenger call
    }

    this.history.floors++;
    console.log( 'Moving to floor' );
  // elevator is unoccupied and has no passengerDestinations
  } else {
    return;
  }
};

Elevator.prototype.pickup = function( request ) {
  this.openDoor( 'pick up' );
  request.hasPickedUpPassenger = true;
};

Elevator.prototype.dropoff = function() {
  this.openDoor( 'drop off' );
  // passenger disembarks
  this.passengerDestinations.shift();

  // check if elevator should go into maintenance mode
  // only if there aren't more passengerDestinations, don't want to strand passengers
  // not just any 100, but multiples of 100 FIX
  if ( this.passengerDestinations.length === 0 && this.history.trips >= 100 ) {
    this.doMaintenance();
  }
};

Elevator.prototype.isOccupied = function() {
  return this.passengerDestinations[ 0 ].hasPickedUpPassenger;
};

Elevator.prototype.willPassFloor = function( floorNumber ) {

};

Elevator.prototype.doMaintenance = function () {
  this.moving = false;
  this.maintenanceMode = true;

  setTimeout(function() {
    this.maintenanceMode = false;
  }, 5000);
};

