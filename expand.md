# Lab 5 Expand Questions

## 1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections?

IDs and Classes are crucial for technology intersections because they serve as the bridge between HTML, CSS, and JavaScript. Well-thought-out naming conventions and structure make it easier to:
- Select elements efficiently in JavaScript using document selectors
- Apply consistent styling in CSS
- Maintain code readability and organization
- Avoid conflicts between different parts of the application
- Make the code more maintainable and scalable

## 2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

Data attributes (data-*) are custom attributes that allow us to store extra information on standard HTML elements. They are useful because:
- They provide a way to store custom data directly in HTML
- They can be used to store state or configuration
- They help separate concerns between structure and behavior
- They can be used for microdata and semantic markup

You can access them in JavaScript using:
- element.dataset.attributeName
- element.getAttribute('data-attribute-name')

For microdata, data attributes can be used to provide additional semantic information about elements, but they should be used carefully to avoid conflicts with standard microdata attributes and to maintain proper semantic meaning.

## 3. What is a DOM fragment? Why are they powerful?

A DOM fragment is a lightweight container that can hold multiple DOM nodes. They are powerful because:
- They allow you to work with multiple nodes without affecting the main document
- They improve performance by reducing reflows and repaints
- They enable batch operations on multiple elements
- They can be used to create complex structures before adding them to the document
- They help maintain a clean separation between structure creation and DOM manipulation

## 4. What is the point of a "Virtual DOM"? What do you gain? What do you lose?

The Virtual DOM is an abstraction of the real DOM that allows for efficient updates. 

Gains:
- Better performance through batched updates
- Reduced number of actual DOM manipulations
- Easier state management
- More predictable rendering
- Better handling of complex UI updates

Losses:
- Additional memory usage for the virtual representation
- Slight overhead for simple applications
- More complex architecture
- Learning curve for developers
- Potential debugging complexity

## 5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

This is because 'class' is a reserved keyword in JavaScript. Using 'class' directly would cause syntax errors since it's used for class declarations in ES6+. Therefore, 'className' was chosen as the property name to access the class attribute. This is a historical decision that dates back to the early days of JavaScript and has been maintained for backward compatibility.

## 6. What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?

addEventListener():
Advantages:
- Can attach multiple event handlers to the same event
- More flexible and powerful
- Better control over event propagation
- Can use event delegation
- Can remove specific event listeners

Disadvantages:
- Slightly more verbose
- Requires more setup code

onClick (inline event handlers):
Advantages:
- Simpler syntax for basic cases
- Direct access to the element
- Easier to understand for beginners

Disadvantages:
- Can only attach one handler per event
- Mixes HTML and JavaScript
- Harder to maintain
- Can't remove specific handlers
- Less flexible
- Can't control event propagation as easily 