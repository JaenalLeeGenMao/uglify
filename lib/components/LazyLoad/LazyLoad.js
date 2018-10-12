'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = function (_PureComponent) {
  _inherits(LazyLoad, _PureComponent);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.initObserver = function () {
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
    };

    _this.createImage = function () {
      _this.loadImage(global.webpSupport && _this.props.webp);
    };

    _this.loadImage = function () {
      var isWebP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = _this.props,
          src = _this$props.src,
          onErrorShowDefault = _this$props.onErrorShowDefault;

      var imageUrl = isWebP ? _this.imageWebPUrl : src;
      var image = new window.Image();
      var error = false;

      image.onload = function () {
        if (_this.image.current) {
          _this.setState({ sources: imageUrl });
          _this.handleImageChange('success');
        }
      };
      image.onerror = function () {
        console.log("MASUK SINI ERROR");
        if (isWebP) {
          _this.loadImage();
        } else {
          _this.handleImageChange('default');
          error = true;
          if (error && onErrorShowDefault) {
            _this.setState({ isError: true });
          }
        }
      };
      image.src = imageUrl;
    };

    _this.handleImageChange = function (status) {
      _this.setState({ load: status });
    };

    _this.loadPolyfills = function () {
      if (!_this.supportsIntersectionObserver()) {
        return false;
      }
      return true;
    };

    _this.supportsIntersectionObserver = function () {
      return 'IntersectionObserver' in global && 'IntersectionObserverEntry' in global && 'intersectionRatio' in IntersectionObserverEntry.prototype;
    };

    _this.image = _react2.default.createRef();
    _this.state = {
      load: props.lazy ? '' : 'success',
      showBackground: props.lazy,
      sources: props.lazy ? props.initial : props.image,
      widthSet: false
    };
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
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
    key: 'render',
    value: function render() {
      var _state = this.state,
          sources = _state.sources,
          isError = _state.isError;
      var _props = this.props,
          alt = _props.alt,
          containerClassName = _props.containerClassName,
          containerStyle = _props.containerStyle,
          style = _props.style,
          onClick = _props.onClick,
          children = _props.children,
          className = _props.className,
          src = _props.src;

      return _react2.default.createElement(
        'div',
        {
          className: (containerClassName || '') + ' ' + this.className,
          style: containerStyle,
          onClick: onClick
        },
        src && _react2.default.createElement('img', { ref: this.image, className: className, style: style, src: sources, alt: alt }),
        isError && _react2.default.createElement('div', { className: _style.errorBg }),
        children
      );
    }
  }, {
    key: 'className',
    get: function get() {
      var load = this.state.load;
      var _props2 = this.props,
          fadeIn = _props2.fadeIn,
          src = _props2.src;

      var loadCss = void 0;
      if (load) {
        loadCss = load === "success" ? _style.success : _style.defaults;
      } else {
        loadCss = "";
      }

      if (src) {
        return loadCss + ' ' + (_style.fadeInCss && _style.fade);
      } else {
        return fadeIn;
      }
    }
  }, {
    key: 'dataProps',
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
    key: 'imageWebPUrl',
    get: function get() {
      return this.props.src + '.webp';
    }
  }]);

  return LazyLoad;
}(_react.PureComponent);

LazyLoad.propTypes = {
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
  onErrorShowDefault: _propTypes.bool
};
LazyLoad.defaultProps = {
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
  onErrorShowDefault: false
};
exports.default = LazyLoad;