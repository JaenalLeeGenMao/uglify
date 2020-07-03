"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _countDown = require("./count-down.style");

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

var circleRadius = 49;
var circumference = 2 * Math.PI * circleRadius;

var UpcomingCountDown = /*#__PURE__*/function (_Component) {
  _inherits(UpcomingCountDown, _Component);

  var _super = _createSuper(UpcomingCountDown);

  function UpcomingCountDown() {
    var _this;

    _classCallCheck(this, UpcomingCountDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      seconds: _this.props.startSecond,
      radius: circumference,
      durationLeftState: '',
      increment: 100 / _this.props.startSecond,
      percent: 100 / _this.props.startSecond
    });

    return _this;
  }

  _createClass(UpcomingCountDown, [{
    key: "tick",
    value: function tick() {
      var _this$state = this.state,
          seconds = _this$state.seconds,
          percent = _this$state.percent,
          increment = _this$state.increment;

      if (seconds <= 0) {
        this.setState({
          radius: 0
        });

        if (this.props.onTimeFinish) {
          this.props.onTimeFinish();
        }

        clearInterval(this.interval);
      } else {
        var radius = circumference - percent / 100 * circumference;
        this.setState(function (prevState) {
          return {
            seconds: prevState.seconds - 1,
            percent: prevState.percent + increment,
            radius: radius
          };
        });
      } // 20s -  5 10 ... 80 90 1000 = 20x
      // 10s -  10 20 ... 100 = 10x
      // 5s  -  20 40 60 80 100 = 5x
      // if (this.state.seconds < 1) {
      //   clearInterval(this.interval);
      //   if (this.props.handleAfter) {
      //     this.props.handleAfter()
      //   }
      // }

    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var isMobile = this.props.isMobile;
      var viewBox = isMobile ? '0 1 120 120' : '-5 3 120 120';
      var size = isMobile ? '16.5' : '2.2rem';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _countDown.container
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'animationContainer'
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: size,
        height: size,
        viewBox: viewBox,
        style: {
          transform: 'rotate(-90deg)'
        }
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        r: circleRadius,
        cy: "58",
        cx: "60",
        strokeWidth: "12",
        stroke: "#486CFF",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        className: 'timeCount'.concat(" circle_animation"),
        r: circleRadius,
        cy: "58",
        cx: "60",
        strokeWidth: "12",
        stroke: "#FFFFFF",
        fill: "none",
        strokeDasharray: circumference,
        strokeDashoffset: this.state.radius
      })), /*#__PURE__*/_react["default"].createElement("i", null)), /*#__PURE__*/_react["default"].createElement("span", null, "Play next movie in ", this.state.seconds));
    }
  }]);

  return UpcomingCountDown;
}(_react.Component);

var _default = UpcomingCountDown;
exports["default"] = _default;