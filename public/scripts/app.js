'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById('app');

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.state = {
            title: 'Indecision',
            subtitle: 'Place your life in the hands of a computer',
            options: []
        };

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        return _this;
    }

    _createClass(Indecision, [{
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            this.setState({ options: [].concat(_toConsumableArray(this.state.options), [option]) });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            console.log(option);
            this.setState(function (prevState) {
                options: prevState.options.filter(function (x, i) {
                    if (i !== option) {
                        return x;
                    }
                });
            });
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomPick = Math.floor(this.state.options.length * Math.random());
            alert(this.state.options[randomPick]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    title: this.state.title,
                    subtitle: this.state.subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: function handleDeleteOption(e) {
                        return _this2.handleDeleteOption(e);
                    } }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return Indecision;
}(React.Component);

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
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.text
        ),
        React.createElement(
            'button',
            { index: props.index, onClick: function onClick(e) {
                    return props.handleDeleteOption(e);
                } },
            'Delete'
        )
    );
};
// all class-based components require a render() method.

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        disabled: !this.props.hasOptions,
                        onClick: this.props.handlePick
                    },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.HandleAddOption = _this4.HandleAddOption.bind(_this4);
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'HandleAddOption',
        value: function HandleAddOption(e) {
            e.preventDefault();
            var option = e.target.addOptionForm.value.trim();
            this.props.handleAddOption(option);
            e.target.addOptionForm.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return _this5.HandleAddOption(e);
                        } },
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

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                this.props.options.length > 0 ? this.props.options.map(function (opt, i) {
                    return React.createElement(Option, { index: i, handleDeleteOption: function handleDeleteOption(e) {
                            return _this7.HandleDeleteOption(e);
                        }, text: opt, key: i });
                }) : React.createElement(
                    'p',
                    null,
                    'There are no options to display.'
                ),
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handleDeleteOptions,
                        disabled: !this.props.options.length > 0 },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), app);
