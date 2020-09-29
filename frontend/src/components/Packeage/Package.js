import React, { useState, useEffect } from "react";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./styles";

const Package = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={props.selected ? classes. title_select : classes.title}>{props.title}</div>
            <div className={classes.div_content}>
                { props.details.map((cell, index) => (
                    <div key={index} className={classes.div_detail}>
                        {cell.active ? <CheckIcon className={classes.icon_true}/> : <CloseIcon className={classes.icon_false} />}
                        <div className={classes.detail_text}>{cell.description}</div>
                    </div>
                ))
                }
            </div>
            <div className={classes.div_bottom}>
                <div className={classes.div_button} onClick={()=>props.onClickContact()}>
                    {props.selected ? "SELECTED" : "CONTACT NOW"}
                </div>
            </div>
        </div>
    )
}

export default Package;