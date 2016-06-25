# Elevators
Solution to Kuali Financial's elevator coding exercise.

I normally like to take the steps, but thanks for the elevator problem!

Elevators belong inside buildings. The building handles requests from passengers and finds them an elevator; as such, the building makes sure that elevators don't go above or below what is physically possible. Individual elevators move and report their whereabouts/pickups/dropoffs.

Please see [REQUIREMENTS.md](REQUIREMENTS.md) for more notes.

To do:
- Flesh-out assignment to proper elevators
- If more than two passengers are in an elevator, make sure you don't skip any passenger's floor
- Remove nested loops for elevator assignment
  - This will improve the scalability
  - Create custom data structure for movement optimization
- Improve maintenance mode
  - Currently, elevators wait until they're empty to go into maintenance mode
  - It would be better if assignments stopped happening over 100 trips so maintenance could happen sooner
