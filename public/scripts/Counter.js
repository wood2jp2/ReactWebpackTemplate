'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//set state example

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleReset = _this.handleReset.bind(_this);
        _this.handleSubtractOne = _this.handleSubtractOne.bind(_this);
        _this.handleAddOne = _this.handleAddOne.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return { count: prevState.count + 1 };
            });
        }
    }, {
        key: 'handleSubtractOne',
        value: function handleSubtractOne() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleSubtractOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));