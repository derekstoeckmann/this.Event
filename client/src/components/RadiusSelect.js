import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel}>
          Radius
          </InputLabel>
        <Select
          labelId="search-radius-label"
          id="search-radius"
          value={props.searchRadius}
          onChange={props.handleRadiusChange}
          labelWidth={labelWidth}
        >
          <MenuItem value={5}>5 Miles</MenuItem>
          <MenuItem value={15}>15 Miles</MenuItem>
          <MenuItem value={25}>25 Miles</MenuItem>
          <MenuItem value={50}>50 Miles</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}