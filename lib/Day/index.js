'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _defaultSelectionRenderer = require('./defaultSelectionRenderer');

var _defaultSelectionRenderer2 = _interopRequireDefault(_defaultSelectionRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'root': 'Cal__Day__root',
  'enabled': 'Cal__Day__enabled',
  'highlighted': 'Cal__Day__highlighted',
  'today': 'Cal__Day__today',
  'disabled': 'Cal__Day__disabled',
  'selected': 'Cal__Day__selected',
  'month': 'Cal__Day__month',
  'year': 'Cal__Day__year',
  'selection': 'Cal__Day__selection',
  'day': 'Cal__Day__day',
  'range': 'Cal__Day__range',
  'start': 'Cal__Day__start',
  'end': 'Cal__Day__end',
  'betweenRange': 'Cal__Day__betweenRange'
};
var Day = (_temp2 = _class = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day() {
    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleClick = function () {
      var _this$props = _this.props,
          date = _this$props.date,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick;


      if (!isDisabled && typeof onClick === 'function') {
        onClick((0, _parse2.default)(date));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Day.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        className = _props.className,
        currentYear = _props.currentYear,
        date = _props.date,
        day = _props.day,
        handlers = _props.handlers,
        isDisabled = _props.isDisabled,
        isHighlighted = _props.isHighlighted,
        isToday = _props.isToday,
        isSelected = _props.isSelected,
        monthShort = _props.monthShort,
        _props$theme = _props.theme,
        selectionColor = _props$theme.selectionColor,
        todayColor = _props$theme.todayColor,
        year = _props.year;

    var color = void 0;

    if (isSelected) {
      color = this.selectionColor = typeof selectionColor === 'function' ? selectionColor(date) : selectionColor;
    } else if (isToday) {
      color = todayColor;
    }

    return _react2.default.createElement(
      'li',
      _extends({
        style: color ? { color: color } : null,
        className: (0, _classnames2.default)(styles.root, (_classNames = {}, _classNames[styles.today] = isToday, _classNames[styles.highlighted] = isHighlighted, _classNames[styles.selected] = isSelected, _classNames[styles.disabled] = isDisabled, _classNames[styles.enabled] = !isDisabled, _classNames), className),
        onClick: this.handleClick,
        'data-date': date
      }, handlers),
      day === 1 && _react2.default.createElement(
        'span',
        { className: styles.month },
        monthShort
      ),
      isToday ? _react2.default.createElement(
        'span',
        null,
        day
      ) : day,
      day === 1 && currentYear !== year && _react2.default.createElement(
        'span',
        { className: styles.year },
        year
      ),
      isSelected && this.props.renderSelection(_extends({}, this.props, {
        selectionColor: this.selectionColor
      }))
    );
  };

  return Day;
}(_react.PureComponent), _class.defaultProps = {
  renderSelection: _defaultSelectionRenderer2.default
}, _temp2);
exports.default = Day;
module.exports = exports['default'];