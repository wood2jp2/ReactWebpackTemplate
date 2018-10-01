"use strict";

console.log("App.js is running!");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is a header"
    ),
    React.createElement(
        "p",
        null,
        "hey."
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Josh's Template"
    ),
    React.createElement(
        "p",
        null,
        "25"
    ),
    React.createElement(
        "p",
        null,
        "Location: Arlington"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
