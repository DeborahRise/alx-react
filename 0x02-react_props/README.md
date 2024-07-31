# REACT PROPS

1. Creating Basic React Components Using Functions
React components can be created as functions or classes. Function components are simpler and recommended for most use cases.
2. Reusing Components
Components can be reused throughout your application to maintain consistency and reduce redundancy.
3. Passing Properties to Components
Props (short for properties) allow you to pass data to components.
4. Defining Types for Components
TypeScript or PropTypes can be used to define types for props, which helps catch errors during development.
Explanation:

Profile.propTypes specifies that name and bio should be strings and are required.
This helps in validating the props passed to components.
5. Using Fragments
Fragments are used to group a list of children without adding extra nodes to the DOM.
Explanation:

<> and </> are shorthand for <React.Fragment> and </React.Fragment>.
They let you return multiple elements from a component without extra wrapping elements.

6. When to Use a Key to Improve a Loop’s Performance
Keys help React identify which items have changed, are added, or are removed, improving performance during re-rendering.

Explanation:

Each <li> element is given a unique key (in this case, the index of the item).
React uses these keys to optimize rendering by keeping track of which items have changed.

**Summary**
Function Components: Simple and recommended way to create components.
Reusing Components: Helps maintain consistency and avoid code duplication.
Passing Properties: Allows dynamic data to be rendered in components.
Defining Types: Ensures props meet expected types, helping to catch errors.
Fragments: Group multiple elements without extra DOM nodes.
Keys: Improve performance and manageability of lists.
These concepts help build robust, maintainable, and efficient React applications.