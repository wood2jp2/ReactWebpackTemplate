'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById('app');

// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'p',
        null,
        props.text
    );
};

// all class-based components require a render() method.

var Action = function (_React$Component) {
    _inherits(Action, _React$Component);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'HandlePick',
        value: function HandlePick() {
            console.log("choosing random option");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.ChooseOption },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.addOptionForm.value.trim();
            this.props.addOption(option);
            e.target.addOptionForm.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { name: 'addOptionForm' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this));

        _this3.state = {
            options: []
        };
        _this3.RemoveAll = _this3.RemoveAll.bind(_this3);
        return _this3;
    }

    _createClass(Options, [{
        key: 'RemoveAll',
        value: function RemoveAll() {
            this.setState({
                options: []
            });
        }
    }, {
        key: 'RetrieveAddedOption',
        value: function RetrieveAddedOption(option) {
            this.setState({ options: [].concat(_toConsumableArray(this.state.options), [option]) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                this.state.options.length > 0 && this.state.options.map(function (opt, i) {
                    return React.createElement(Option, { text: opt, key: i });
                }) || React.createElement(
                    'p',
                    null,
                    'There are no options to display.'
                ),
                React.createElement(AddOption, { addOption: function addOption(e) {
                        return _this4.RetrieveAddedOption(e);
                    } }),
                React.createElement(
                    'button',
                    { onClick: this.RemoveAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Indecision = function (_React$Component4) {
    _inherits(Indecision, _React$Component4);

    function Indecision() {
        _classCallCheck(this, Indecision);

        return _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).apply(this, arguments));
    }

    _createClass(Indecision, [{
        key: 'render',
        value: function render() {
            var title = 'Indecision',
                subtitle = 'Place your life in the hands of a computer',
                options = ['Thing One', 'Thing Two', 'Thing Five'];

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, null)
            );
        }
    }]);

    return Indecision;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), app);
