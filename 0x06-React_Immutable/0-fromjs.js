// Import the Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a JavaScript object into an Immutable Map
function getImmutableObject(object) {
    return fromJS(object);
}

