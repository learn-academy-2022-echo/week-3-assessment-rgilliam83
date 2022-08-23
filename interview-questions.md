# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a syntantic sugar originally created for React. JSX allows developers to code HTML within JS. JSX is essentially a hybrid of JS and HTML together. A difference between HTML and JSX, is JSX requires a sigle parent element return, or the code will "break". HTML does not have this requirement.

Researched answer: JSX stands for JavaScript syntax extension.   It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template.   It is just an XML-like extension that allows us to write JavaScript that looks like markup and have it returned from a component. JSX uses className attributes due to class being a reserve word in JS, while HTML uses the class attribute.

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a JavaScript package manager created by Facebook. Yarn stands for Yet Another Resource Negotiator.  It is a different option to NPM when installing, uninstalling, and managing package dependencies from the NPM registry or GitHub repositories.


Researched answer: Yarn is a package manager that replaces the established workflow.The main focus of any package manager is to install some package into a local environment. Each package may or may not depend on other packages. A typical project could have tens, hundreds, or even thousands of packages within its tree of dependencies.

These dependencies are versioned and installed based on semantic versioning (semver). Semver defines a versioning scheme that reflects the types of changes in each new version, whether a change breaks an API, adds a new feature, or fixes a bug.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function without a name, that is not accessible after its initial creation.

Researched answer: Anonymous Function is a function that does not have any name associated with it. The function keyword is typically used before the function name to define a function in JavaScript.  In anonymous functions in JavaScript, we use only the function keyword without the function name.

4. What is the difference between a class and an object?

Your answer: Class is the definition what an object is expected to be. A class is the building block that leads to Object-Oriented Programming. It is the blueprint of any object.

Researched answer: A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.

5. What is the difference between state and props in React?

Your answer: The difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.

Researched answer: Props are a JavaScript object that React components receive as an input to return a React element. They provide a data flow between the components. State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time. Every user interaction with your app may lead to changes in the underlying state and in the whole UI as a result. State changes over the lifetime of a React component.

6. STRETCH: Which is the difference between a div and a span?

Your answer: <div> and <span> are used to represent the part of the webpage. <div> tag is used a as block part of the webpage and <span> tag is used as a inline part of the webpage.  

Researched answer: Span and div are HTML elements that group together related parts of a web page. A div element is used for block-level organizing and styling of page elements, and a span element is used for inline organization and styling

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects

2. Ruby: Ruby is an object-oriented programming language (OOP) that uses classes as blueprints for objects . Objects are the basic building-blocks of Ruby code (everything in Ruby is an object), and have two main properties: states and behaviours

3. Implicit return: Ruby has implicit returns. This means that if a return is the last expression in a path of execution, there's no need for the return keyword. Worth noting is that return 's default argument is nil , which is a falsey value.

4. Ruby blocks: Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks. Blocks can have arguments which should be defined between two pipe | characters.

5. Ruby hashes: A Ruby hash is a collection of unique keys and their values. They are similar to arrays but array use integer as an index and hash use any object type. They are also called associative arrays, dictionaries or maps. If a hash is accessed with a key that does not exist, the method will return nil
