// queue for handling elevator requests
// fn used to call for an elevator from a specific floor

// Check in this order:
// 1. Is there an unoccupied elevator at that floor?
// 2. Is there an elevator moving past already?
// 3. Fetch the closest unoccupied elevator
