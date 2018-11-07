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
            title: 'sadfsadf',
            subtitle: 'Place your life in the hands of a computer',
            options: props.options
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
            if (!option) {
                return 'Please provide an option to add';
            } else if (this.state.options.includes(option)) {
                return 'You already are tracking this option!';
            }

            this.setState(function (prevState) {
                return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            console.log(optionToRemove);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (opt) {
                        return opt !== optionToRemove;
                    })
                };
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

        // Lifecycle methods only usable on class-based components

        // fires after component is rendered on page
        // fetch data here

    }, {
        key: 'componentDidMount',
        value: function componentDidMount(prevProps, prevState) {
            try {
                var options = JSON.parse(localStorage.getItem('options'));

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }

        // fires before component is rendered on page

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('will mount');
        }

        //
        // shouldComponentUpdate() {
        //     console.log('should component update')
        // }

        // fires before state or props values change.

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('updated');
        }

        // fires after state or props values change. Arguments are as follows.
        // save data here

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.state.options.length !== prevState.options.length) {
                var json = JSON.stringify(this.state.options);
                console.log('saving data');
                localStorage.setItem('options', json);
            }
        }

        // fires when a component disappears

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component will unmount');
        }

        // fires as a component is about to receive props

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            console.log('component will receive props');
        }
    }, {
        key: 'render',
        value: function render() {
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
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return Indecision;
}(React.Component);

Indecision.defaultProps = {
    options: []

    // Implicitly returned components can still use a return statement, and perform any desired calculations above that.
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// these are similar to default args in functions, and take the place if the props are not defined at component mount.
Header.defaultProps = {
    title: 'Indecision'
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.text,
        React.createElement(
            'button',
            { index: props.index, onClick: function onClick(e) {
                    return props.handleDeleteOption(props.text);
                } },
            'remove'
        )
    );
};
// all class-based components require a render() method.
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.handlePick
            },
            'What should I do?'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            this.setState(function () {
                return { error: undefined };
            });
            var option = e.target.addOptionForm.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (this.state.error !== undefined) {
                e.target.addOptionForm.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return _this3.handleAddOption(e);
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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length > 0 ? props.options.map(function (opt, i) {
            return React.createElement(Option, {
                index: i,
                handleDeleteOption: props.handleDeleteOption,
                text: opt,
                key: i });
        }) : React.createElement(
            'p',
            null,
            'There are no options to display.'
        ),
        React.createElement(
            'button',
            {
                onClick: props.handleDeleteOptions,
                disabled: !props.options.length > 0 },
            'Remove All'
        )
    );
};

ReactDOM.render(React.createElement(Indecision, null), app);
