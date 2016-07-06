// building assigns elevators in this order:
// 1: unoccupied elevator on that floor
var lookForUnoccupiedElevatorOnFloor = function( elevators, request ) {
  var matched = false;

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
      matched = true;
      break;
    }
  }

  return matched;
};

// 2: unoccupied elevator moving past
var lookedForUnoccupiedElevatorMovingPast = function( elevators, request ) {
  var matched = false;

  var willMovePast = function( currentFloor )
  // loop through elevators
  for ( var j = 0; j < this.elevators.length; j++ ) {
    var elevator = this.elevators[ j ];
    //  ignore elevators which are in maintenance mode
    if ( elevator.maintenanceMode || elevator.isOccupied() ) {
      continue;
    } else {
      if ( elevator.moving ) {
        var upOrDown = elevator.moving - elevator.currentFloor;
        // moving 9
        // currentFloor 2
        // 9 - 2 = 7 up

        // moving 3
        // currentFloor 6
        // 3 - 6 = -3 down




      // elevator not moving or on floor
      } else {
        break;
      }
    } else if ( elevator.moving === false && elevator.currentFloor === request.start ) {
      // add request to that elevator
      elevator.startTrip( request.start, request.destination );
      matched = true;
      break;
    }
  }

  return matched;
};

// 3: closest unoccupied elevator
// ?4: all elevators occupied, moving past

var Building = function( numberOfFloors ) {
  this.requests = [];
  this.elevators = {
    count: 0
  };
  this.elevatorMaintenance = {
    count: 0
  };
  this.topFloor = numberOfFloors;

  this.serviceElevators = function() {
    // move into maintenance
    for ( var elevatorId in this.elevators ) {
      var elevator = this.elevators[ elevatorId ];
      // maintenance
      if ( elevator.maintenanceMode === true ) {
        // remove from active elevators
        this.elevatorMaintenance[ elevator.id ] = elevator;
        this.elevatorMaintenance.count++;
        delete this.elevator[ elevator.id ];
        this.elevators.count--;
      }
    }

    // move out of maintanence back into active
    for ( var elevatorId in this.elevatorMaintenance ) {
      var elevator = this.elevatorMaintenance[ elevatorId ];
      // maintenance
      if ( elevator.maintenanceMode === false ) {
        // remove from active elevators
        this.elevators[ elevator.id ] = elevator;
        this.elevators.count++;
        delete this.elevatorMaintenance[ elevator.id ];
        this.elevatorMaintenance.count--;
      }
    }

    return this.elevators;
  };

  this.delegateNewRequests = function() {
    if ( this.requests.length > 0 && this.elevators.count > 0 ) {
      // loop through requests to see if any unoccupied elevators are available on the floor
      for ( var i = 0; i < this.requests.length; i++ ) {
        var request = this.requests[ i ];
        var matched = false;
        // NOT MOST EFFICIENT. O(n2) time complexity due to nested for loops
        matched = lookForUnoccupiedElevatorOnFloor( this.elevators, request );

        if ( matched ) {
          break;
        } else {
          matched = lookedForUnoccupiedElevatorMovingPast( this.elevators, request );
        }
        // lookedForUnoccupiedElevatorMovingPast
        // findClosestUnassignedElevator
      }

      // all requests handle, clear queue
      this.requests.length = [];
    }

    // can't think of anything useful to return
    return void( 0 );
  };

  this.moveElevators = function() {
    for ( var i = 0; i < this.elevators.length; i++ ) {
      var elevator = this.elevators[ i ];
      var currentTrip = elevator.destinations[ 0 ];
      //  ignore elevators which are in maintenance mode or have no destinations
      if ( elevator.maintenanceMode || elevator.destinations.length === 0 ) {
        continue;
      // elevator moving
      } else if ( currentTrip.moving ) {
        elevator.move();
      // on floor for pickup
      } else if ( on floor for pickup ) {
        elevator.pickup();
      } else if ( on floor for dropoff ) {
        elevator.dropoff();
      }
    }

    return void( 0 );
  };

  // step-by-step to conceptualize movement
  setTimeout(function() {
    this.serviceElevators();
    this.delegateNewRequests();
    this.moveElevators();
  }, 1000);
};

Building.prototype.addElevator = function() {
  this.elevators.count++;
  var elevator = new Elevator( this.elevators.count, this,topFloor );
  this.elevators[ elevator.id ] = elevator;
  return this.elevators.count;
};

Building.prototype.requestLift = function( passenger ) {
  this.requests.push( passenger );
};