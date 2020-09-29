import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import useStyles from "./styles";

const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: '#00D8FF',
      },
    },
    checked: {},
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const ClassGrade = (props) => {
    const classes = useStyles();
    const {grades, onClickChange, ...rest} = props;

    return(
        <div className={classes.root}>
            { grades.map((cell, index) => (
                <FormControlLabel
                    key={index}
                    className={index === 0 ? null : classes.grade}  
                    value="start"
                    control={
                        <CustomCheckbox 
                            checked={cell}
                            onChange={() => onClickChange(index)}
                        />
                    }
                    label={index + 1}
                    labelPlacement="start"
                />
            ))}
        </div>
    )
}

export default ClassGrade;