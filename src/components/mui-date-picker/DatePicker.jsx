// ReusableDatePicker.js
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';

const DatePicker = ({ selectedDate, onChange }) => {
  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <KeyboardDatePicker
    //     autoOk
    //     variant="inline"
    //     inputVariant="outlined"
    //     format="MM/dd/yyyy"
    //     margin="normal"
    //     id="date-picker"
    //     label="Select Date"
    //     value={selectedDate}
    //     onChange={onChange}
    //     KeyboardButtonProps={{
    //       'aria-label': 'change date',
    //     }}
    //   />
    // </MuiPickersUtilsProvider>
    <>
        <TextField
        id="date"
        label="pick date"
        type="date"
        defaultValue={selectedDate}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};

export default DatePicker;
