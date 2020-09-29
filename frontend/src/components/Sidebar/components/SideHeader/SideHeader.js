import React, { useState } from "react";
import HeaderIcon from "../../../../images/icon_side_header.svg"
import useStyles from "./styles";

export default function SidebarHeader() {
   var classes = useStyles();

    return(
        <div className={classes.root}>
            <div>
                <div className={classes.text}>Welcome!</div>
                <div className={classes.text}>{JSON.parse(localStorage.getItem("user")).first_name + " " + JSON.parse(localStorage.getItem("user")).last_name}</div>
            </div>
        </div>
    )
}
