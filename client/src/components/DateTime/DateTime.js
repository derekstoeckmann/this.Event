import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function DateTime(props) {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        value={props.selectedDate}
        onChange={props.setSelectedDate}
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

export default DateTime;
