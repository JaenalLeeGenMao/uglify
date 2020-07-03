"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("./style");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TextInput, _React$Component);

  var _super = _createSuper(TextInput);

  function TextInput() {
    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEmptyValue: true,
      type: _this.props.type,
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }

      var val = e.target.value;

      _this.setState({
        isEmptyValue: val == ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnKeyUp", function (e) {
      var onKeyUp = _this.props.onKeyUp;

      if (onKeyUp) {
        onKeyUp(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnFocus", function (e) {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function (e) {
      var onBlur = _this.props.onBlur;

      if (onBlur) {
        onBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnInput", function (e) {
      var onInput = _this.props.onInput;

      if (onInput) {
        onInput(e);
      }
    });

    return _this;
  }

  _createClass(TextInput, [{
    key: "toggle",
    value: function toggle(target) {
      this.setState(_defineProperty({}, target, !this.state[target]));
      this.toggleVisible(this.state.visible);
    }
  }, {
    key: "toggleVisible",
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
    key: "componentWillMount",
    value: function componentWillMount() {
      var type = this.props.type;
      type = type || 'text';
      this.setState({
        type: type
      });
    }
  }, {
    key: "render",

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

      var _this$props = this.props,
          materialDesign = _this$props.materialDesign,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          propsType = _this$props.type,
          id = _this$props.id,
          disabled = _this$props.disabled,
          setRef = _this$props.setRef,
          isError = _this$props.isError,
          _this$props$errorClas = _this$props.errorClassName,
          errorClassName = _this$props$errorClas === void 0 ? '' : _this$props$errorClas;
      var _this$state = this.state,
          visible = _this$state.visible,
          isEmptyValue = _this$state.isEmptyValue,
          type = _this$state.type;
      var inputType = type || 'text';
      var errClass = "".concat(_style.errorClass, " ").concat(errorClassName);
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.inputContainer, " ").concat(className || '', " ").concat(isError ? errClass : '')
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: inputType,
        className: "".concat(_style.inputClass, " \n              ").concat(materialDesign ? _style.mdClass : _style.boxClass, " \n              ").concat(isEmptyValue ? '' : _style.hasValue),
        id: id,
        ref: setRef,
        name: id,
        onChange: this.handleOnChange,
        onKeyUp: this.handleOnKeyUp,
        onInput: this.handleOnInput,
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur,
        placeholder: placeholder,
        disabled: disabled || false
      }), materialDesign && /*#__PURE__*/_react["default"].createElement(_style.Label, {
        htmlFor: id
      }, label), materialDesign && /*#__PURE__*/_react["default"].createElement("div", {
        className: _style.underline
      }), propsType === 'password' && !isEmptyValue && /*#__PURE__*/_react["default"].createElement("div", {
        className: _style.passWordVisibility
      }, visible ? /*#__PURE__*/_react["default"].createElement("span", {
        className: _style.passwordVisible,
        onClick: function onClick() {
          return _this2.toggle('visible');
        }
      }) : /*#__PURE__*/_react["default"].createElement("span", {
        className: _style.passwordNotVisible,
        onClick: function onClick() {
          return _this2.toggle('visible');
        }
      }))));
    }
  }]);

  return TextInput;
}(_react["default"].Component);

var _default = TextInput;
exports["default"] = _default;