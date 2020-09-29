import React, { useState, useEffect } from "react";
import useStyles from "./styles";

const SignHeader = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.header_content}>
                <div className={classes.logo} />
                <div className={classes.div_contact} />
            </div>
        </div>
    )
}

export default SignHeader;