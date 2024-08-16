import { Map } from 'immutable';

// Create an Immutable Map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create a new Map based on `map`, modifying the values at indexes 2 and 4
export const map2 = map
  .set(2, 'Benjamin')  // Modify index 2 to 'Benjamin'
  .set(4, 'Oliver');   // Modify index 4 to 'Oliver' (same value, but operation as required)
