'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEmptyValue: true,
      type: _this.props.type,
      visible: false
    }, _this.handleOnChange = function (e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }
      var val = e.target.value;
      _this.setState({
        isEmptyValue: val == ""
      });
    }, _this.handleOnKeyUp = function (e) {
      var onKeyUp = _this.props.onKeyUp;

      if (onKeyUp) {
        onKeyUp(e);
      }
    }, _this.handleOnInput = function (e) {
      var onInput = _this.props.onInput;

      if (onInput) {
        onInput(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'toggle',
    value: function toggle(target) {
      this.setState(_defineProperty({}, target, !this.state[target]));
      this.toggleVisible(this.state.visible);
    }
  }, {
    key: 'toggleVisible',
    value: function toggleVisible(condition) {
      var type = 'password';
      if (!condition) {
        type = 'text';
      }

      this.setState({
        type: type
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var type = this.props.type;

      type = type || 'text';

      this.setState({
        type: type
      });
    }
  }, {
    key: 'render',


    /***
     * on Parent component (caller component)
     * set callback func to set ref
    
    var emailInputRef;
    setEmailRef = (ref) => {
      emailInputRef = ref;
    }
    ****/

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          materialDesign = _props.materialDesign,
          className = _props.className,
          placeholder = _props.placeholder,
          label = _props.label,
          propsType = _props.type,
          id = _props.id,
          disabled = _props.disabled,
          setRef = _props.setRef,
          isError = _props.isError,
          _props$errorClassName = _props.errorClassName,
          errorClassName = _props$errorClassName === undefined ? '' : _props$errorClassName;
      var _state = this.state,
          visible = _state.visible,
          isEmptyValue = _state.isEmptyValue,
          type = _state.type;

      var inputType = type || 'text';
      var errClass = _style.errorClass + ' ' + errorClassName;
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: _style.inputContainer + ' ' + (className || '') + ' ' + (isError ? errClass : '') },
          _react2.default.createElement('input', {
            type: inputType,
            className: _style.inputClass + ' \n              ' + (materialDesign ? _style.mdClass : _style.boxClass) + ' \n              ' + (isEmptyValue ? '' : _style.hasValue),
            id: id,
            ref: setRef,
            name: id,
            onChange: this.handleOnChange,
            onKeyUp: this.handleOnKeyUp,
            onInput: this.handleOnInput,
            placeholder: placeholder,
            disabled: disabled || false }),
          materialDesign && _react2.default.createElement(
            _style.Label,
            { htmlFor: id },
            label
          ),
          materialDesign && _react2.default.createElement('div', { className: _style.underline }),
          propsType === 'password' && !isEmptyValue && _react2.default.createElement(
            'div',
            { className: _style.passWordVisibility },
            visible ? _react2.default.createElement('span', { className: _style.passwordVisible, onClick: function onClick() {
                return _this2.toggle('visible');
              } }) : _react2.default.createElement('span', { className: _style.passwordNotVisible, onClick: function onClick() {
                return _this2.toggle('visible');
              } })
          )
        )
      );
    }
  }]);

  return TextInput;
}(_react2.default.Component);

exports.default = TextInput;