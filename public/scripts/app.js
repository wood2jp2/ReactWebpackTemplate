'use strict';

console.log("App.js is running!");

var app = {
    header: 'React Template with WebPack',
    subtitle: 'Built upon Node, Babel, and including SCSS',
    options: ['one', 'two', 'three']
},
    user = {
    name: 'Josh',
    age: 25,
    location: 'Arlington'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.header
    ),
    app.subtitle && React.createElement(
        'h4',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'There are no options'
    ),
    React.createElement(
        'ol',
        null,
        app.options.length > 0 && app.options.map(function (option, i) {
            return React.createElement(
                'li',
                { key: i },
                option
            );
        })
    )
);

var checkForLocation = function checkForLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : React.createElement(
        'p',
        null,
        'Location: Unknown'
    );
};
// Three ways to render: Ternary, logical and operator, function returning JSX
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous',
        '\'s Template'
    ),
    user.age > 18 && React.createElement(
        'p',
        null,
        user.age
    ),
    checkForLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
