X 1. Initialize the elevator simulation with the desired number of elevators, and the desired number of floors. Assume ground/min of 1.

Since the elevators are moving, they should be the ones reporting
X 2. Each elevator will report as is moves from floor to floor.
( pickup/dropoff )
X 3. Each elevator will report when it opens or closes its doors.

Building enforces top and ground floor
X 4. An elevator cannot proceed above the top floor.
X 5. An elevator cannot proceed below the ground floor (assume 1 as the min).
X 6. An elevator request can be made at any floor, to go to any other floor.

X 7. When an elevator request is made, the unoccupied elevator closest to it will answer
the call, unless an occupied elevator is moving and will pass that floor on its way. The
exception is that if an unoccupied elevator is already stopped at that floor, then it will
always have the highest priority answering that call.

Trips is a bit ambiguous. Number of passengers picked up? Or trips to the top or ground floor? Assuming passengers picked up.
8. The elevator should keep track of how many trips it has made, and how many floors it has passed. The elevator should go into maintenance mode after 100 trips, and stop functioning until serviced, therefore not be available for elevator calls.

Inputs:
  - number of elevators
  - number of floors
Outputs:
  - Report movements
  - Report open or closing doors
Constraints:
  - minimum floors, 1
  - elevator can't go above top or below bottom floor

// 4
// 3

// 1  *
-----------------------------------