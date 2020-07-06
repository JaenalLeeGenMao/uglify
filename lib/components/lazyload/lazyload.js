"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _style = require("./style");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var LazyLoad = /*#__PURE__*/function (_PureComponent) {
  _inherits(LazyLoad, _PureComponent);

  var _super = _createSuper(LazyLoad);

  function LazyLoad(props) {
    var _this;

    _classCallCheck(this, LazyLoad);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "initObserver", function () {
      var options = {
        threshold: [0.1, 0.5, 0.75, 1.0]
      };
      var io = new IntersectionObserver(function (entries) {
        var _entries$ = entries[0],
            isIntersecting = _entries$.isIntersecting,
            intersectionRatio = _entries$.intersectionRatio;

        if (isIntersecting && intersectionRatio > 0) {
          _this.createImage();

          io.disconnect();
          io = null;
        }
      }, options);
      io.observe(_this.image.current);
    });

    _defineProperty(_assertThisInitialized(_this), "createImage", function () {
      _this.loadImage(global.webpSupport && _this.props.webp);
    });

    _defineProperty(_assertThisInitialized(_this), "loadImage", function () {
      var isWebP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = _this.props,
          src = _this$props.src,
          onErrorShowDefault = _this$props.onErrorShowDefault;
      var imageUrl = isWebP ? _this.imageWebPUrl : src;
      var image = new window.Image();
      var error = false;

      image.onload = function () {
        if (_this.image.current) {
          _this.setState({
            sources: imageUrl
          });

          _this.handleImageChange('success');
        }
      };

      image.onerror = function () {
        if (isWebP) {
          _this.loadImage();
        } else {
          _this.handleImageChange('default');

          error = true;

          if (error && onErrorShowDefault) {
            _this.setState({
              isError: true
            });
          }
        }
      };

      image.src = imageUrl;
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageChange", function (status) {
      _this.setState({
        load: status
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadPolyfills", function () {
      if (!_this.supportsIntersectionObserver()) {
        return false;
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "supportsIntersectionObserver", function () {
      return 'IntersectionObserver' in global && 'IntersectionObserverEntry' in global && 'intersectionRatio' in IntersectionObserverEntry.prototype;
    });

    _this.image = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      load: props.lazy ? '' : 'success',
      showBackground: props.lazy,
      sources: props.lazy ? props.initial : props.image,
      widthSet: false
    };
    return _this;
  }

  _createClass(LazyLoad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var src = this.props.src;

      if (src) {
        if (this.props.lazy) {
          if (this.loadPolyfills()) {
            this.initObserver();
          } else {
            this.loadImage(global.webpSupport && this.props.webp);
          }
        } else {
          this.loadImage(global.webpSupport && this.props.webp);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          sources = _this$state.sources,
          isError = _this$state.isError;
      var _this$props2 = this.props,
          alt = _this$props2.alt,
          containerClassName = _this$props2.containerClassName,
          containerStyle = _this$props2.containerStyle,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          className = _this$props2.className,
          src = _this$props2.src,
          errorImgClassName = _this$props2.errorImgClassName,
          onErrorShowDefault = _this$props2.onErrorShowDefault;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(containerClassName || '', " ").concat(this.className),
        style: containerStyle,
        onClick: onClick
      }, src && /*#__PURE__*/_react["default"].createElement("img", {
        ref: this.image,
        className: className,
        style: isError && onErrorShowDefault ? {
          display: 'none'
        } : style,
        src: sources,
        alt: alt
      }), isError && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.errorBg, " ").concat(errorImgClassName)
      }), children);
    }
  }, {
    key: "className",
    get: function get() {
      var load = this.state.load;
      var _this$props3 = this.props,
          fadeIn = _this$props3.fadeIn,
          src = _this$props3.src;
      var loadCss;

      if (load) {
        loadCss = load === "success" ? _style.success : _style.defaults;
      } else {
        loadCss = "";
      }

      if (src) {
        return "".concat(loadCss, " ").concat(_style.fadeInCss && _style.fade);
      } else {
        return fadeIn;
      }
    }
  }, {
    key: "dataProps",
    get: function get() {
      var dataProps = {};
      Object.entries(this.props).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (key.startsWith('data-')) {
          dataProps[key] = value;
        }
      });
      return dataProps;
    }
  }, {
    key: "imageWebPUrl",
    get: function get() {
      return "".concat(this.props.src, ".webp");
    }
  }]);

  return LazyLoad;
}(_react.PureComponent);

_defineProperty(LazyLoad, "propTypes", {
  alt: _propTypes.string,
  className: _propTypes.string,
  containerClassName: _propTypes.string,
  containerStyle: _propTypes.object,
  fadeIn: _propTypes.bool,
  width: _propTypes.string,
  height: _propTypes.string,
  initial: _propTypes.string,
  lazy: _propTypes.bool,
  src: _propTypes.string,
  style: _propTypes.object,
  webp: _propTypes.bool,
  onClick: _propTypes.func,
  children: _propTypes.node,
  onErrorShowDefault: _propTypes.bool,
  errorImgClassName: _propTypes.string
});

_defineProperty(LazyLoad, "defaultProps", {
  alt: '',
  className: '',
  containerClassName: '',
  containerStyle: {},
  fadeIn: true,
  width: '100%',
  height: 'auto',
  initial: '',
  lazy: true,
  onClick: function onClick() {},
  style: {},
  webp: true,
  children: null,
  src: null,
  onErrorShowDefault: false,
  errorImgClassName: ''
});

var _default = LazyLoad;
exports["default"] = _default;