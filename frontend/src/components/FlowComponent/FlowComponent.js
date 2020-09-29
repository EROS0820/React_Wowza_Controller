import React, { useState, useEffect } from "react";
// import {ReactComponent as FlowImage} from "../../images/img_flow_back.svg";
import FlowImage from "../../images/img_flow_back.svg";

import useStyles from "./styles";


const FlowComponent = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {/* <FlowImage className={classes.flow_image} /> */}
            <img className={classes.flow_image} src={FlowImage} />
             <div className={classes.div_circle_container} >
                <div className={classes.div_circle} >
                    <div className={classes.div_center}>
                        <div className={classes.div_title}>{props.data.title}</div>
                        <div className={classes.div_detail_list}>
                            {
                                props.data.details.map((cell, index) => (
                                    <div key={index} className={classes.div_detail}>
                                        <div className={classes.div_dot} />
                                        <div className={classes.div_text}>{cell.description}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowComponent;