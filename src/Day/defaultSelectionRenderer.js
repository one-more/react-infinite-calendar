import React from "react";
import styles from "./Day.scss";

export default function defaultSelectionRenderer(
    {
        day,
        date,
        isToday,
        locale: {todayLabel},
        monthShort,
        theme: {textColor},
        selectionStyle,
        selectionColor,
    }
) {
  return (
        <div
            className={styles.selection}
            data-date={date}
            style={{
              background: selectionColor,
              color: textColor.active,
              ...selectionStyle,
            }}
        >
        <span className={styles.month}>
          {isToday ? todayLabel.short || todayLabel.long : monthShort}
        </span>
            <span className={styles.day}>{day}</span>
        </div>
  );
}