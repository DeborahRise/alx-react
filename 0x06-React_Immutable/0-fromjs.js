// Import the Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a JavaScript object into an Immutable Map
function getImmutableObject(object) {
    return fromJS(object);
}

// Example usage
const myObject = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};

const immutableMap = getImmutableObject(myObject);
console.log(immutableMap);
