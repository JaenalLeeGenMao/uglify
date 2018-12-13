'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lazyload = require('../lazyload');

var _lazyload2 = _interopRequireDefault(_lazyload);

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* PROPS:
 * children, className, thumbnailUrl
 * thumbnailPosition (image position) = top, bottom, left, right (by default left), wrap
 * duration (in second)
 */

var VideoThumbnail = function (_Component) {
  _inherits(VideoThumbnail, _Component);

  function VideoThumbnail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoThumbnail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoThumbnail.__proto__ || Object.getPrototypeOf(VideoThumbnail)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnClick = function () {
      var onClick = _this.props.onClick;

      onClick();
    }, _this.getDurationFormatted = function () {
      var duration = _this.props.duration;

      var durationTotal = duration;
      var sec = durationTotal % 60;
      durationTotal -= sec;
      var minRemain = Math.floor(durationTotal / 60);
      var min = minRemain % 60;
      var hour = 0;
      if (minRemain > 60) {
        hour = (minRemain - min) / 60;
      }

      return '\n    ' + (hour > 0 ? ('0' + hour).slice(-2) + ':' : '') + (min > 0 ? ('0' + min).slice(-2) + ':' : '') + (sec > 0 ? ('0' + sec).slice(-2) : '00') + '\n    ';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoThumbnail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          thumbnailPosition = _props.thumbnailPosition,
          duration = _props.duration,
          className = _props.className,
          thumbnailUrl = _props.thumbnailUrl,
          thumbnailStyle = _props.thumbnailStyle,
          _props$imgWrapperClas = _props.imgWrapperClassName,
          imgWrapperClassName = _props$imgWrapperClas === undefined ? '' : _props$imgWrapperClas,
          detailStyle = _props.detailStyle;

      var thumbnailPos = '';
      if (thumbnailPosition === 'right') {
        thumbnailPos = _style.rightThumbnail;
      } else if (thumbnailPosition === 'top') {
        thumbnailPos = _style.topThumbnail;
      } else if (thumbnailPosition === 'bottom') {
        thumbnailPos = _style.bottomThumbnail;
      } else if (thumbnailPosition === 'wrap') {
        thumbnailPos = _style.wrapThumbnail;
      }
      return _react2.default.createElement(
        'a',
        { onClick: this.handleOnClick, className: _style.wrapper + ' ' + (className || '') },
        thumbnailPosition === 'bottom' && _react2.default.createElement(
          _lazyload2.default,
          { className: _style.detailWrapper + ' ' + _style.bottomDetail, containerStyle: detailStyle },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: _style.wrapperThumbnail + ' ' + thumbnailPos },
          _react2.default.createElement(
            _lazyload2.default,
            {
              src: thumbnailUrl,
              className: '' + _style.imgThumbnail,
              style: thumbnailStyle,
              containerClassName: _style.imgThumbnailWrapper + ' ' + imgWrapperClassName
            },
            thumbnailPosition === 'wrap' && _react2.default.createElement(
              'div',
              { className: _style.overlayDetail },
              ' ',
              children,
              ' '
            ),
            duration && _react2.default.createElement(
              'div',
              { className: _style.durationClass + ' durationStat' },
              this.getDurationFormatted()
            ),
            thumbnailPosition !== 'wrap' && _react2.default.createElement('div', { className: _style.playButton + ' playIcon' })
          ),
          thumbnailPosition !== 'bottom' && _react2.default.createElement(
            _lazyload2.default,
            { containerClassName: _style.detailWrapper, containerStyle: detailStyle },
            children
          )
        )
      );
    }
  }]);

  return VideoThumbnail;
}(_react.Component);

VideoThumbnail.propTypes = {
  onClick: _propTypes.func,
  children: _propTypes.node
};
VideoThumbnail.defaultProps = {
  onClick: function onClick() {},
  children: null
};
exports.default = VideoThumbnail;