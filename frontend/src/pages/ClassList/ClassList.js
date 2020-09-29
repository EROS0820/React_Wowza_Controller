import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import List from './List';
import useStyles from "./styles";

const ClassList = (props) => {
    const {history} = props;
    var classes = useStyles();
    
    const [listClass, setListClass] = useState([{id: 1, category: "Language", subject: "English", number: 120, fees: 3500}]);

    const handleClickSchedule = () => {
        history.push('/app/class/schedule');
    }

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
                    <span className={classes.child_title}>List Class</span>
                </div>
                <div className={classes.table_head}>
                    LIST CLASS
                </div>
                <List classList={listClass} clickSchedule={handleClickSchedule}/>
            </div>
        </div>
    );
}

export default withRouter(ClassList);
