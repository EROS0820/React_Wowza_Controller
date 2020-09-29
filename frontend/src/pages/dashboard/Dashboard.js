import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles";

export default function Dashboard(props) {
  var classes = useStyles();

  return(
    <div className={classes.root}>
        <div className={classes.div_title}>
            <span className={classes.title}>Dashboard</span>
            <TextField 
                className={classes.search}
                name="search"
                placeholder="Search"
                variant="outlined"
                InputProps={{
                    classes: {input: classes.edit},
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon className={classes.search} />
                        </InputAdornment>
                    )
                }}
            />
        </div>
        <div className={classes.content}>
          Dashboard
        </div>
    </div>
  )
}
