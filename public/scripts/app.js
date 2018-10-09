'use strict';

console.log("App.js is running!");

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
},
    checkForLocation = function checkForLocation(location) {
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
},
    appRoot = document.getElementById('app');

var app = {
    header: 'React Template with WebPack',
    subtitle: 'Built upon Node, Babel, and including SCSS',
    options: ['one', 'two', 'three']
},
    user = {
    name: 'Josh Wood',
    age: 25,
    location: 'Arlington'
},
    template = React.createElement(
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
),

// Three ways to render: Ternary, logical and operator, function returning JSX
templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? getFirstName(user.name) : 'Anonymous',
        '\'s Template'
    ),
    user.age > 18 && React.createElement(
        'p',
        null,
        user.age
    ),
    checkForLocation(user.location)
);

ReactDOM.render(templateTwo, appRoot);
