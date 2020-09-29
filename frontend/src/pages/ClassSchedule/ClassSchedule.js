import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField, Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinkIcon from '../../images/icon_link.svg';
import useStyles from "./styles";

const ClassSchedule = (props) => {
    const {history} = props;
    var classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.div_title}>
                <span className={classes.title}>NEW CLASS</span>
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
                <div className={classes.content_head}>
                    <span className={classes.parent_title}>Class Rooms {'>>'} </span>
                    <span className={classes.child_title}>List Class {'>>'} </span>
                    <span className={classes.child_title1}>Schedule</span>
                </div>
                <div className={classes.table_head}>
                    SCHEDULE
                </div>
                <div className={classes.div_context}>
                    <div>
                        Schedule Class
                    </div>
                    <div className={classes.div_button}>
                        <Button className={classes.button}>
                            Create a Link
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ClassSchedule);
