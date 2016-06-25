// elevator class

var Elevator = function() {
  // start at ground floor
  this.currentFloor = 1;
  this.destination = null;
  this.moving = false;
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