// elevator class

var Elevator = function() {
  // start at ground floor
  this.currentFloor = 1;
  this.moveToFloor = function( destinationFloor ) {
    while( this.currentFloor !== destinationFloor ) {
      if ( this.currentFloor < destinationFloor ) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }

      console.log( 'Moved to floor ', this.currentFloor );
    }

    console.log( 'At destination. Opening doors.' );
  }
};