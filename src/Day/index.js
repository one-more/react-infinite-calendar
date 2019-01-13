import React, {PureComponent} from 'react';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import styles from './Day.scss';
import defaultSelectionRenderer from "./defaultSelectionRenderer";

export default class Day extends PureComponent {
  static defaultProps = {
    renderSelection: defaultSelectionRenderer,
  };

  handleClick = () => {
    let {date, isDisabled, onClick} = this.props;

    if (!isDisabled && typeof onClick === 'function') {
      onClick(parse(date));
    }
  };
  
  render() {
    const {
      className,
      currentYear,
      date,
      day,
      handlers,
      isDisabled,
      isHighlighted,
      isToday,
      isSelected,
      monthShort,
      theme: {selectionColor, todayColor},
      year,
    } = this.props;
    let color;

    if (isSelected) {
      color = this.selectionColor = typeof selectionColor === 'function'
        ? selectionColor(date)
        : selectionColor;
    } else if (isToday) {
      color = todayColor;
    }

    return (
      <li
        style={color ? {color} : null}
        className={classNames(styles.root, {
          [styles.today]: isToday,
          [styles.highlighted]: isHighlighted,
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled,
          [styles.enabled]: !isDisabled,
        }, className)}
        onClick={this.handleClick}
        data-date={date}
        {...handlers}
      >
        {day === 1 && <span className={styles.month}>{monthShort}</span>}
        {isToday ? <span>{day}</span> : day}
        {day === 1 &&
          currentYear !== year &&
          <span className={styles.year}>{year}</span>}
        {isSelected && this.props.renderSelection(
          {
            ...this.props,
            selectionColor: this.selectionColor,
          }
        )}
      </li>
    );
  }
}
