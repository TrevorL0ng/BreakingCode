const faker = require('faker'); /* https://fakerjs.dev/api/ */
const db = require('../config/connection');
const Cards = require('../models/Card.js');

/* Array holding a collection of Card Objects
    **Note:     All paths to files should be in consideration of their location of render within the Client
    
    // Each Card mirrors the same design 👇🏼
    {
        uid :       Each Card has a unique id 
        pair_id:    a number only 1 other card shares
        content:    question/answer
        stat:       unique stat for the card
        topic:      topic for card 
    }
*/
const cardSeedData = [
    {
        "content": "What does HTML stand for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 1,
        "pair_id": 1
    },
    {
        "content": "Hypertext Markup Language",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 2,
        "pair_id": 1
    },
    {
        "content": "What are void elements in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 3,
        "pair_id": 2
    },
    {
        "content": "elements which do not have closing tags or do not need to be closed",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 4,
        "pair_id": 2
    },
    {
        "content": "What is Anchor tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 5,
        "pair_id": 3
    },
    {
        "content": "tag in HTML is used to link between two sections or two different web pages or website templates",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 6,
        "pair_id": 3
    },
    {
        "content": "What are semantic elements in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 7,
        "pair_id": 4
    },
    {
        "content": "HTML elements that represent its meaning to the browser and developer about its contents",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 8,
        "pair_id": 4
    },
    {
        "content": "What symbol(s) are used to comment one line in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 9,
        "pair_id": 5
    },
    {
        "content": "<!--",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 10,
        "pair_id": 5
    },
    {
        "content": "What symbol(s) are used to comment out multiple lines in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 11,
        "pair_id": 6
    },
    {
        "content": "<!— —>",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 12,
        "pair_id": 6
    },
    {
        "content": "What are <br> tags in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 13,
        "pair_id": 7
    },
    {
        "content": "tags used to enter a new line into the HTML contents",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 14,
        "pair_id": 7
    },
    {
        "content": "What are Meta tags in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 15,
        "pair_id": 8
    },
    {
        "content": "tags in HTML used to tell the browser about the page description, author of the template, character set, keywords and many more",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 16,
        "pair_id": 8
    },
    {
        "content": "How can we create a hyperlink in HTML?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 17,
        "pair_id": 9
    },
    {
        "content": "Use of an <a> tag",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 18,
        "pair_id": 9
    },
    {
        "content": "What is the <table> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 19,
        "pair_id": 10
    },
    {
        "content": "Tag that defines a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 20,
        "pair_id": 10
    },
    {
        "content": "What is the <tr> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 21,
        "pair_id": 11
    },
    {
        "content": "Tag that defines a row in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 22,
        "pair_id": 11
    },
    {
        "content": "What is the <td> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 23,
        "pair_id": 12
    },
    {
        "content": "Tag that defines a cell in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 24,
        "pair_id": 12
    },
    {
        "content": "What is the <caption> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 25,
        "pair_id": 13
    },
    {
        "content": "Tag that defines the table caption",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 26,
        "pair_id": 13
    },
    {
        "content": "What is the <colgroup> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 27,
        "pair_id": 14
    },
    {
        "content": "Tag that specifies a group of one more column in a table for formatting",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 28,
        "pair_id": 14
    },
    {
        "content": "What is the <col> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 29,
        "pair_id": 15
    },
    {
        "content": "used with <colgroup> element to specify column properties for each column",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 30,
        "pair_id": 15
    },
    {
        "content": "What is the <tbody> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 31,
        "pair_id": 16
    },
    {
        "content": "tag used to group the body content in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 32,
        "pair_id": 16
    },
    {
        "content": "What is the <thead> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 33,
        "pair_id": 17
    },
    {
        "content": "Tag used to group the header content in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 34,
        "pair_id": 1
    },
    {
        "content": "What is the <tfooter> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 35,
        "pair_id": 18
    },
    {
        "content": "Tag used to group the footer content in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 36,
        "pair_id": 18
    },
    {
        "content": "What is the <th> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 37,
        "pair_id": 19
    },
    {
        "content": "Tag that defines a header cell in a table",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 38,
        "pair_id": 1
    },
    {
        "content": "What is the <header> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 39,
        "pair_id": 20
    },
    {
        "content": "used to define a header for a document or a section",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 40,
        "pair_id": 20
    },
    {
        "content": "What is the <nav> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 41,
        "pair_id": 21
    },
    {
        "content": "Used to define a container for navigation links",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 42,
        "pair_id": 21
    },
    {
        "content": "What is the <section> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 43,
        "pair_id": 22
    },
    {
        "content": "used to define a section in a document",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 44,
        "pair_id": 22
    },
    {
        "content": "What is the <article> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 45,
        "pair_id": 23
    },
    {
        "content": "used to define an independent, self-contained article",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 46,
        "pair_id": 23
    },
    {
        "content": "What is the <aside> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 47,
        "pair_id": 24
    },
    {
        "content": "used to define content aside from the content",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 48,
        "pair_id": 24
    },
    {
        "content": "What is the <footer> tag used for?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 49,
        "pair_id": 25
    },
    {
        "content": "used to define a footer for a document or a section",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 50,
        "pair_id": 25
    },
    {
        "content": "Two tags used to separate a section of texts?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 51,
        "pair_id": 26
    },
    {
        "content": "<br> and <p>",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 52,
        "pair_id": 26
    },
    {
        "content": "What is the use of an iframe tag?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 53,
        "pair_id": 27
    },
    {
        "content": "used to display a web page within a web page",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 54,
        "pair_id": 27
    },
    {
        "content": "What is the use of a span tag?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 55,
        "pair_id": 28
    },
    {
        "content": "Used to add color on text, add background on text, and highlight any color text",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 56,
        "pair_id": 28
    },
    {
        "content": "What is the use of a button tag?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 57,
        "pair_id": 29
    },
    {
        "content": "used to create a clickable button within the HTML form on the web page",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 58,
        "pair_id": 29
    },
    {
        "content": "What is the use of a button tag?",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 59,
        "pair_id": 30
    },
    {
        "content": "used to create a clickable button within the HTML form on the web page",
        "stat": "01 stat",
        "topic": "HTML",
        "uid": 60,
        "pair_id": 30
    },
    {
        "content": "HTML element in which we add JS?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 61,
        "pair_id": 31
    },
    {
        "content": "<script>",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 62,
        "pair_id": 31
    },
    {
        "content": "Part of the HTML file where JS must be inserted?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 63,
        "pair_id": 32
    },
    {
        "content": "Head and Body",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 64,
        "pair_id": 32
    },
    {
        "content": "Main types of loops in JS?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 65,
        "pair_id": 33
    },
    {
        "content": "For loop, while loop, do..while loop ",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 66,
        "pair_id": 33
    },
    {
        "content": "What is the DOM in JS?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 67,
        "pair_id": 34
    },
    {
        "content": "Document Object Model",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 68,
        "pair_id": 34
    },
    {
        "content": "What is JavaScript?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 69,
        "pair_id": 35
    },
    {
        "content": "client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 70,
        "pair_id": 35
    },
    {
        "content": "JavaScript Data Types?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 71,
        "pair_id": 36
    },
    {
        "content": "Number, string, boolean, object, undefined",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 72,
        "pair_id": 36
    },
    {
        "content": "What is a NaN function?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 73,
        "pair_id": 36
    },
    {
        "content": "A function that returns true if the argument is not a number; otherwise, it is false",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 74,
        "pair_id": 37
    },
    {
        "content": "Company that developed JavaScript?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 75,
        "pair_id": 38
    },
    {
        "content": "Netscape",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 76,
        "pair_id": 38
    },
    {
        "content": "What is a declared variable?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 77,
        "pair_id": 39
    },
    {
        "content": "variables that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 78,
        "pair_id": 39
    },
    {
        "content": "What is an undeclared variable?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 79,
        "pair_id": 40
    },
    {
        "content": "variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 80,
        "pair_id": 40
    },
    {
        "content": "Symbol(s) used for commenting out one line of code of JS?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 81,
        "pair_id": 41
    },
    {
        "content": "//",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 82,
        "pair_id": 41
    },
    {
        "content": "Symbol(s) used for commenting out several lines of code of JS?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 83,
        "pair_id": 42
    },
    {
        "content": "/*  */",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 84,
        "pair_id": 42
    },
    {
        "content": "What is === operator?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 85,
        "pair_id": 43
    },
    {
        "content": "a strict equality operator, which returns true when the two operands have the same value without conversion",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 86,
        "pair_id": 43
    },
    {
        "content": "What is a Load Time Error?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 87,
        "pair_id": 44
    },
    {
        "content": "Errors that come up when loading a web page, like improper syntax errors, are known as Load time errors and generate the errors dynamically.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 88,
        "pair_id": 44
    },
    {
        "content": "What is a Runtime Error?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 89,
        "pair_id": 45
    },
    {
        "content": "Errors that come due to misuse of the command inside the HTML language.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 90,
        "pair_id": 45
    },
    {
        "content": "What is a Logical Error?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 91,
        "pair_id": 46
    },
    {
        "content": "These are the errors that occur due to the bad logic performed on a function with a different operation.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 92,
        "pair_id": 46
    },
    {
        "content": "What is the use of the Push method?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 93,
        "pair_id": 47
    },
    {
        "content": "Method used to add or append one or more elements to an Array end",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 94,
        "pair_id": 47
    },
    {
        "content": "What is the use of the unshift method?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 95,
        "pair_id": 48
    },
    {
        "content": "Method is used to prepend one or more elements to the beginning of the array",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 96,
        "pair_id": 48
    },
    {
        "content": "What is the length property used for?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 97,
        "pair_id": 49
    },
    {
        "content": "Method used if you want to know the number of elements in an array",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 98,
        "pair_id": 49
    },
    {
        "content": "What is the length property used for?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 99,
        "pair_id": 50
    },
    {
        "content": "Method used if you want to add new properties and methods",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 100,
        "pair_id": 50
    },
    {
        "content": "What is the reverse method used for?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 101,
        "pair_id": 51
    },
    {
        "content": "Method used if you want to reverse the order of items in an array using a reverse method",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 102,
        "pair_id": 51
    },
    {
        "content": "What is the sort method used for?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 103,
        "pair_id": 52
    },
    {
        "content": "Method used if you want to sort the items in an array",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 104,
        "pair_id": 52
    },
    {
        "content": "What is the pop method used for?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 105,
        "pair_id": 53
    },
    {
        "content": "method that takes the last element off of the given array and returns it",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 106,
        "pair_id": 53
    },
    {
        "content": "What is Callback?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 107,
        "pair_id": 54
    },
    {
        "content": " plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 108,
        "pair_id": 54
    },
    {
        "content": "What is closure?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 109,
        "pair_id": 55
    },
    {
        "content": "These are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 110,
        "pair_id": 55
    },
    {
        "content": "What is a Global Variable?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 111,
        "pair_id": 56
    },
    {
        "content": "A variable that is visible everywhere in your JS code.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 112,
        "pair_id": 56
    },
    {
        "content": "What is aLocal Variable?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 113,
        "pair_id": 57
    },
    {
        "content": "A variable visible only within a function where it is defined.",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 114,
        "pair_id": 57
    },
    {
        "content": "Three ways to define a variable?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 115,
        "pair_id": 58
    },
    {
        "content": "Var, Const, and Let",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 116,
        "pair_id": 58
    },
    {
        "content": "What are self invoking functions?",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 117,
        "pair_id": 59
    },
    {
        "content": "Functions that are invoked automatically in the code ",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 118,
        "pair_id": 59
    },
    {
        "content": "JavaScript files have an extension of",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 119,
        "pair_id": 60
    },
    {
        "content": ".js",
        "stat": "01 stat",
        "topic": "JavaScript",
        "uid": 120,
        "pair_id": 60
    },
    {
        "content": "What is a CSS frameworks?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 121,
        "pair_id": 61
    },
    {
        "content": "libraries that make web page styling easier",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 122,
        "pair_id": 61
    },
    {
        "content": "How can you target h3 and h2 with the same styling?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 123,
        "pair_id": 62
    },
    {
        "content": "Multiple elements can be targeted by separating with a comma",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 124,
        "pair_id": 62
    },
    {
        "content": "What does the universal selector do?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 125,
        "pair_id": 63
    },
    {
        "content": "selector works like a wildcard character, selecting all elements on a page.",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 126,
        "pair_id": 63
    },
    {
        "content": "What does the element type selector do?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 127,
        "pair_id": 64
    },
    {
        "content": "selector matches one or more HTML elements of the same name",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 128,
        "pair_id": 64
    },
    {
        "content": "What does the ID selector do?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 129,
        "pair_id": 65
    },
    {
        "content": "selector matches any HTML element that has an ID attribute with the same value as that of the selector",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 130,
        "pair_id": 65
    },
    {
        "content": "What does the class selector do?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 131,
        "pair_id": 66
    },
    {
        "content": "selector matches all elements on the page that have their class attribute set to the same value as the class",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 132,
        "pair_id": 66
    },
    {
        "content": "What does CSS stand for?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 133,
        "pair_id": 67
    },
    {
        "content": "Cascading Style Sheet",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 134,
        "pair_id": 67
    },
    {
        "content": "What is “float”used for? ",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 135,
        "pair_id": 68
    },
    {
        "content": "used for positioning the HTML elements horizontally either towards the left or right of the container",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 136,
        "pair_id": 68
    },
    {
        "content": "What is Tweening?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 137,
        "pair_id": 69
    },
    {
        "content": "process by which intermediate frames between two pictures are created in order to find the appearance of the first image developing into the second",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 138,
        "pair_id": 69
    },
    {
        "content": "What are CSS counters?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 139,
        "pair_id": 70
    },
    {
        "content": "variables that can be increased by using CSS that inspect and find the number of times of usage of variables",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 140,
        "pair_id": 70
    },
    {
        "content": "What is a universal selector?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 141,
        "pair_id": 71
    },
    {
        "content": "a selector which can match the name of any element type, rather than selecting the elements of a specific category",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 142,
        "pair_id": 71
    },
    {
        "content": "What is RWD?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 143,
        "pair_id": 72
    },
    {
        "content": "Responsive Web Design",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 144,
        "pair_id": 72
    },
    {
        "content": "What is RWD used for?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 145,
        "pair_id": 73
    },
    {
        "content": "used to display the designed page suitably on any kind of screen size depending on the device under consideration",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 146,
        "pair_id": 73
    },
    {
        "content": "How is a class selector identified?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 147,
        "pair_id": 74
    },
    {
        "content": "Selector starts with a period",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 148,
        "pair_id": 74
    },
    {
        "content": "How is an id selector identified?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 149,
        "pair_id": 75
    },
    {
        "content": "Selector starts with a #",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 150,
        "pair_id": 75
    },
    {
        "content": "What is a declaration block?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 151,
        "pair_id": 76
    },
    {
        "content": "catalog of directions comprising the property, followed by a colon, and finally the value enclosed within braces",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 152,
        "pair_id": 76
    },
    {
        "content": "What is the ruleset used for?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 153,
        "pair_id": 77
    },
    {
        "content": "used to identify the selectors attached to one another. It consists of two different parts- selector and declaration",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 154,
        "pair_id": 77
    },
    {
        "content": "3 examples of CSS style components",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 155,
        "pair_id": 78
    },
    {
        "content": "Property, Value, and Selector",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 156,
        "pair_id": 78
    },
    {
        "content": "What does the selector div, p match?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 157,
        "pair_id": 79
    },
    {
        "content": "Selects all <div> elements and all <p> elements",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 158,
        "pair_id": 79
    },
    {
        "content": "What does the selector div p match?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 159,
        "pair_id": 80
    },
    {
        "content": "Selects all <p> elements that are anywhere inside a <div> element",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 160,
        "pair_id": 80
    },
    {
        "content": "What does the selector div > p match?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 161,
        "pair_id": 81
    },
    {
        "content": "Selects all <p> elements where the immediate parent is a <div> element",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 162,
        "pair_id": 81
    },
    {
        "content": "What does the selector div +  p match?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 163,
        "pair_id": 82
    },
    {
        "content": "Selects all <p> elements that are placed immediately after a <div> element",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 164,
        "pair_id": 82
    },
    {
        "content": "What does the selector div ~ p match?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 165,
        "pair_id": 83
    },
    {
        "content": "Selects all <p> elements that are anywhere preceded by a <div> element",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 166,
        "pair_id": 83
    },
    {
        "content": "What does the content element consists of?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 167,
        "pair_id": 84
    },
    {
        "content": "Consists of where the text and images appear",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 168,
        "pair_id": 84
    },
    {
        "content": "What does the padding element consists of?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 169,
        "pair_id": 85
    },
    {
        "content": "Consists of the transparent area surrounding the content (i.e., the amount of space between the border and the content)",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 170,
        "pair_id": 85
    },
    {
        "content": "What does the border element consists of?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 171,
        "pair_id": 86
    },
    {
        "content": "Consists of surrounding the padding (if any) and content",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 172,
        "pair_id": 86
    },
    {
        "content": "What does the margin element consists of?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 173,
        "pair_id": 87
    },
    {
        "content": "Consists of the transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 174,
        "pair_id": 87
    },
    {
        "content": "What does 'pc' stand for on css units?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 175,
        "pair_id": 88
    },
    {
        "content": "picas (1 pc = 12 pt = 1/6th of an inch)",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 176,
        "pair_id": 88
    },
    {
        "content": "What does 'pt'stand for on css units?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 177,
        "pair_id": 89
    },
    {
        "content": "points (1 pt = 1/72nd of an inch)",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 178,
        "pair_id": 89
    },
    {
        "content": "What does 'px' stand for on css units?",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 179,
        "pair_id": 90
    },
    {
        "content": "pixels (1 px = 1/96th of an inch)",
        "stat": "01 stat",
        "topic": "CSS",
        "uid": 180,
        "pair_id": 90
    }
];

//-- Make db connection, delete ALL content, and build clean seed data.
db.once('open', async () => {

    //-- Purge local data to reset
    await Cards.remove({});

    /* CARDS - Create ALL Cards in database ----------------------------------*/
    //-- Printing what the goal to make it
    console.log("##-- Attempting to seed the following cards...")
    console.table(cardSeedData);
    //-- Add created users to database
    const createdCards = await Cards.collection.insertMany(cardSeedData);
    console.log("##-- Created cards complete...")
    console.log("##-- Results...")
    console.table(createdCards)
    console.log('//-- Seeding is completed...');
    process.exit(0);
});