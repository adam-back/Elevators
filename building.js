// building assigns elevators in this order:
// 1: unoccupied elevator on that floor
var lookForUnoccupiedElevatorOnFloor = function( elevators, request ) {
  // loop through elevators
  for ( var j = 0; j < this.elevators.length; j++ ) {
    var elevator = this.elevators[ j ];
    //  ignore elevators which are in maintenance mode
    if ( elevator.maintenanceMode ) {
      continue;
    // elevator not moving and on floor
    } else if ( elevator.moving === false && elevator.currentFloor === request.start ) {
      // add request to that elevator
      elevator.startTrip( request.start, request.destination );
      break;
    }
  }
}

// 2: unoccupied elevator moving past
// 3: closest unoccupied elevator
// ?4: all elevators occupied, moving past

var Building = function( numberOfFloors ) {
  this.requests = [];
  this.elevators = [];
  this.topFloor = numberOfFloors;

  this.delegateNewRequests = function() {
    if ( this.requests.length > 0 ) {
      // loop through requests to see if any unoccupied elevators are available on the floor
      for ( var i = 0; i < this.requests.length; i++ ) {
        var request = this.requests[ i ];
        // NOT MOST EFFICIENT. O(n2) time complexity due to nested for loops
        lookForUnoccupiedElevatorOnFloor( this.elevators, request );
        // lookedForUnoccupiedElevatorMovingPast
        // findClosestUnassignedElevator
      }

      // all requests handle, clear queue
      this.requests.length = [];
    }

    // can't think of anything useful to return
    return void( 0 );
  };

  // step-by-step to conceptualize movement
  setTimeout(function() {
    this.delegateNewRequests();
    this.moveElevators();
  }, 1000);
};

Building.prototype.addElevator = function() {
  // would have access to Elevator class
  this.elevators.push( new Elevator( this.topFloor ) );
  return this.elevators.length;
};

Building.prototype.requestLift = function( currentFloor, destinationFloor ) {
  this.requests.push( { start: currentFloor, destination: destinationFloor } );
};