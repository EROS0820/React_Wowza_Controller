import React, { useState, useEffect } from "react";
import useStyles from "./styles";

const HomeHeader = (props) => {
    const classes = useStyles();

    const handleClickHome = () => {
        props.history.push('/home');
    }

    return(
        <div className={classes.root}>
            <div className={classes.header_content}>
                <div className={classes.logo} />
                <div className={classes.div_contact} >
                    <div className={classes.contact_content}>
                        <div className={classes.contact} onClick={handleClickHome}>Home</div>
                        <div className={classes.contact}>Courses</div>
                        <div className={classes.contact}>Service</div>
                        <div className={classes.contact}>Demo</div>
                        <div className={classes.contact}>Why Us</div>
                        <div className={classes.contact}>About Us</div>
                        <div className={classes.contact}>Contact</div>
                    </div>
                </div>
                <div className={classes.div_sign}>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;