import React, { useState, useEffect } from "react";
import useStyles from "./styles";

const Support = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
           <div className={classes.content}>
                <div className={classes.div_title}>What You do</div>
                <div className={classes.div_content}>
                    <div className={classes.div_detail}>
                        <div className={classes.div_icon_student}/>
                        <span className={classes.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </span>
                    </div>
                    <div className={classes.div_detail}>
                        <div className={classes.div_icon_student}/>
                        <span className={classes.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </span>
                    </div>
                </div>
                <div className={classes.div_content}>
                    <div className={classes.div_detail}>
                        <div className={classes.div_icon_student}/>
                        <span className={classes.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </span>
                    </div>
                    <div className={classes.div_detail}>
                        <div className={classes.div_icon_student}/>
                        <span className={classes.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Support;