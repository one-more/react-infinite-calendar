"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = defaultSelectionRenderer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    "root": "Cal__Day__root",
    "enabled": "Cal__Day__enabled",
    "highlighted": "Cal__Day__highlighted",
    "today": "Cal__Day__today",
    "disabled": "Cal__Day__disabled",
    "selected": "Cal__Day__selected",
    "month": "Cal__Day__month",
    "year": "Cal__Day__year",
    "selection": "Cal__Day__selection",
    "day": "Cal__Day__day",
    "range": "Cal__Day__range",
    "start": "Cal__Day__start",
    "end": "Cal__Day__end",
    "betweenRange": "Cal__Day__betweenRange"
};
function defaultSelectionRenderer(_ref) {
    var day = _ref.day,
        date = _ref.date,
        isToday = _ref.isToday,
        todayLabel = _ref.locale.todayLabel,
        monthShort = _ref.monthShort,
        textColor = _ref.theme.textColor,
        selectionStyle = _ref.selectionStyle,
        selectionColor = _ref.selectionColor;

    return _react2.default.createElement(
        "div",
        {
            className: styles.selection,
            "data-date": date,
            style: _extends({
                background: selectionColor,
                color: textColor.active
            }, selectionStyle)
        },
        _react2.default.createElement(
            "span",
            { className: styles.month },
            isToday ? todayLabel.short || todayLabel.long : monthShort
        ),
        _react2.default.createElement(
            "span",
            { className: styles.day },
            day
        )
    );
}
module.exports = exports["default"];