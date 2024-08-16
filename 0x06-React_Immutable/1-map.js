// Import Map from Immutable.js
import { Map } from 'immutable';

// Function to convert a plain JavaScript object into an Immutable Map
function getImmutableObject(object) {
    // Use Map to create an Immutable Map from the object
    return Map(object);
}
