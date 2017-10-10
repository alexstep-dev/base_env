'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Geet(props) {
    if (props.logstatus) return _react2.default.createElement(
        'div',
        null,
        'Hello, user!'
    );
    return _react2.default.createElement(
        'div',
        null,
        'Please Sign Up or Sign In'
    );
}
function LoginButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Please Log In'
    );
}
function LogOutButton(props) {
    return _react2.default.createElement(
        'button',
        { onClick: props.onClick },
        'Log Out'
    );
}
function RegLink(props) {
    if (props.logstatus) return null;
    return _react2.default.createElement(
        'a',
        { href: '/registration' },
        'registration'
    );
}

var SignForm = function (_Component) {
    _inherits(SignForm, _Component);

    function SignForm(props) {
        _classCallCheck(this, SignForm);

        var _this = _possibleConstructorReturn(this, (SignForm.__proto__ || Object.getPrototypeOf(SignForm)).call(this, props));

        _this.state = {
            logstatus: false
        };
        _this.login = _this.login.bind(_this);
        _this.logout = _this.logout.bind(_this);
        return _this;
    }

    _createClass(SignForm, [{
        key: 'render',
        value: function render() {
            var logstatus = this.state.logstatus;
            var button = null;

            if (logstatus) button = _react2.default.createElement(LogOutButton, { onClick: this.logout });else button = _react2.default.createElement(LoginButton, { onClick: this.login });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Geet, { logstatus: this.state.logstatus }),
                button,
                _react2.default.createElement('br', null),
                _react2.default.createElement(RegLink, { logstatus: this.state.logstatus })
            );
        }
    }, {
        key: 'login',
        value: function login() {
            this.setState(function (prevState) {
                return { logstatus: !prevState.logstatus };
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            this.setState(function (prevState) {
                return { logstatus: !prevState.logstatus };
            });
        }
    }]);

    return SignForm;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(SignForm, null), document.getElementById('root'));

