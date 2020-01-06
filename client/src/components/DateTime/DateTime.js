import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function DateTime(props) {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        value={props.selectedDate}
        onChange={props.handleDateChange}
        id="event-date-time"
        label="Event Date and Time"
        variant="outlined"
        justify="center"
        alignItems="center"
        className="data-value-input"
      />
    </MuiPickersUtilsProvider>
  );
}