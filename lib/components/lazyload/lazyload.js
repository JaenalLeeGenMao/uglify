"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntersectionObserver = require("react-intersection-observer");

var _lazyload = require("./lazyload.style");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * @references https://codesandbox.io/s/react-intersection-observer-ud2vo?fontsize=14&hidenavigation=1&theme=dark&file=/src/elements/ScrollWrapper.tsx
 * @param {string} alt Image title for improving SEO
 * @param {string} containerClassName Image wrapper external class attributes
 * @param {object} containerStyle Image wrapper external styles CSS properties
 * @param {string} className Img tag class attributes
 * @param {string} style Img tag styles CSS properties
 * @param {function} onClick typical javascript onClick function
 * @param {React.Node} children react component
 * @param {string} src image url e.g. https://mola.tv/mola.png
 * @param {string} errorImgClassName custom error for fallback image, incase of failed to load (e.g. class that has own custom background / custom background-image url)
 * @param {string} fallbackImageUri Default image to be displayed before real image is being loaded (recommended size < 50kb)
 *
 */
var LazyLoad = function LazyLoad(_ref) {
  var alt = _ref.alt,
      containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick,
      children = _ref.children,
      src = _ref.src,
      onHoverBorder = _ref.onHoverBorder,
      errorImgClassName = _ref.errorImgClassName,
      fallbackImageUri = _ref.fallbackImageUri,
      handleCallback = _ref.handleCallback;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isError = _useState2[0],
      setIsError = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sources = _useState4[0],
      setSources = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoaded = _useState6[0],
      setIsLoaded = _useState6[1];

  var ref = (0, _react.useRef)();

  var _useInView = (0, _reactIntersectionObserver.useInView)({
    threshold: [0, 0.5, 0.75, 1.0]
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      inViewRef = _useInView2[0],
      inView = _useInView2[1];

  var setRefs = (0, _react.useCallback)(function (node) {
    // Ref's from useRef needs to have the node assigned to `current`
    ref.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument

    inViewRef(node);
  }, [inViewRef]); // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (handleCallback) {
  //     handleCallback(false)
  //   }
  // }, []);
  // const callback = (status) => {
  //   if (handleCallback) {
  //     handleCallback(status)
  //   }
  // }

  (0, _react.useEffect)(function () {
    if (inView && !sources) {
      loadImage(global.webpSupport && webp);
    }
  }, [inView]);

  var loadImage = function loadImage() {
    var isWebP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var imageUrl = src;
    var image = new window.Image();
    var error = false;

    image.onload = function () {
      if (ref.current && !sources) {
        setSources(imageUrl);
        setIsError(false);
        setIsLoaded(true);
      }
    };

    image.onerror = function () {
      setIsError(true);
      setIsLoaded(false);
    };

    image.src = imageUrl;
  }; // get imageWebPUrl() {
  //   return `${this.props.src}.webp`
  // }


  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(containerClassName || '', " ").concat(_lazyload.container, " ").concat(_lazyload.lazyFade),
    style: _objectSpread({}, containerStyle),
    onClick: onClick
  }, children), fallbackImageUri && /*#__PURE__*/_react["default"].createElement("img", {
    src: fallbackImageUri,
    className: "".concat(_lazyload.fallbackImgContainer, " fallbackImg fadeIn"),
    style: {
      opacity: isLoaded ? 0 : 1
    }
  }), !children && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(containerClassName || '', " ").concat(_lazyload.container, " imageWrapper ").concat(isLoaded ? 'loaded' : ''),
    style: _objectSpread(_objectSpread({}, containerStyle), {}, {
      position: fallbackImageUri ? 'absolute' : 'relative',
      top: 0,
      left: 0
    }),
    onClick: onClick
  }, onHoverBorder && /*#__PURE__*/_react["default"].createElement("div", {
    className: 'imageBorder'
  }), /*#__PURE__*/_react["default"].createElement("img", {
    ref: setRefs,
    className: "".concat(className || '', " fadeIn"),
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: inView && isLoaded ? 1 : 0
    }),
    src: sources,
    alt: alt // onError={() => {
    //   setIsError(true)
    //   setIsLoaded(false)
    //   // callback(false)
    // }}
    // onLoad={() => {
    //   setIsError(false)
    //   setIsLoaded(true)
    //   // callback(true)
    // }}

  }), isError && /*#__PURE__*/_react["default"].createElement("div", {
    className: "errorBackground ".concat(errorImgClassName || '')
  })));
};

var _default = LazyLoad;
exports["default"] = _default;