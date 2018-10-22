'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("App.js is running!");
// import Clicker from '../Components/Clicker';
var count = 0;

var makeAdecision = function makeAdecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var decision = app.options[randomNumber];
    console.log(decision);
    removeAll();
    render();
};

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
    appRoot = document.getElementById('app'),
    app = {
    header: 'React Template with WebPack',
    subtitle: 'Built upon Node, Babel, and including SCSS',
    options: []
},
    user = {
    name: 'Josh Wood',
    age: 25,
    location: 'Arlington'
},
    addOption = function addOption(e) {
    e.preventDefault();
    var option = e.target.option.value;
    app.options.push(option);
    e.target.option.value = "";
    render();
},
    removeAll = function removeAll() {
    app.options = [];
    render();
},
    render = function render() {
    // let counter = (
    //     <div>
    //     <p>{count}</p>
    //     <button
    //         // make sure you pass the function event 'e' to the function to have access to the event
    //         onClick={e => iterate(e)}
    //         id="addButton">Add One</button> 
    //     <button 
    //         onClick={e => iterate(e)}
    //         id="subtractButton">Subtract One</button> 
    //     <button
    //         onClick={e => iterate(e)}
    //         id="resetButton">Reset</button>
    //     </div>
    // ),    // Three ways to render: Ternary, logical and operator, function returning JSX
    // templateTwo = (
    //     <div>
    //         <h1>{user.name ? getFirstName(user.name) : 'Anonymous'}'s Template</h1>
    //         {
    //             user.age > 18 &&
    //             <p>{user.age}</p>
    //         }
    //         {checkForLocation(user.location)}
    //         {counter}
    //         {/* <Clicker /> */}
    //     </div>
    // );

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
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: makeAdecision },
            'What should I do?'
        )
    );
    ReactDOM.render(template, appRoot);
};
// },
// iterate = e => {
//     e.target.id === "addButton" ? count += 1 : e.target.id === "subtractButton" ? count -= 1 : count = 0
//     loadOrReloadDOM()
// };

var Car = function () {
    function Car(make, model, age) {
        _classCallCheck(this, Car);

        this.make = make;
        this.model = model;
        this.age = age;
    }

    _createClass(Car, [{
        key: 'getCarDescription',
        value: function getCarDescription() {
            return 'My ' + this.make + ' is a ' + this.model + ' that is ' + this.age + ' years old';
        }
    }]);

    return Car;
}();

render();
