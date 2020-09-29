import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {ReactComponent as FacebookIcon} from "../../images/icon_facebook_white.svg";
import {ReactComponent as TwitterIcon} from "../../images/icon_twitter_white.svg";
import {ReactComponent as InstagramIcon} from "../../images/icon_instagram_white.svg";

const HomeBottom = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.div_logo}>
                <img width={100} height={100} />
            </div>
            <div className={classes.div_content} >
                <div className={classes.bottom_content}>
                    <div className={classes.div_left}>
                        <div className={classes.contact}>Content</div>
                        <div className={classes.contact}>Home</div>
                        <div className={classes.contact}>About</div>
                        <div className={classes.contact}>Terms of Use</div>
                        <div className={classes.contact}>Privacy Policy</div>
                    </div>
                    <div className={classes.div_center}>
                        <div className={classes.contact}>Product</div>
                        <div className={classes.contact}>Features</div>
                        <div className={classes.contact}>Examples</div>
                        <div className={classes.contact}>Pricing</div>
                        <div className={classes.contact}>FAQs</div>
                    </div>
                    <div className={classes.div_right}>
                        <div className={classes.contact}>Contact</div>
                        <div className={classes.contact}>Blog</div>
                        <div className={classes.contact}>Instagram</div>
                        <div className={classes.contact}>Facebook</div>
                    </div>
                </div>
                <div className={classes.div_line} />
                <div className={classes.div_copy}>
                    <span className={classes.text_copy}>
                        Copyright &copy; 2020 FunPlace Enterprises
                    </span>
                    {/* <div className={classes.div_social}>
                        <a className={classes.icon_facebook} ><FacebookIcon className={classes.icon}/></a>
                        <a className={classes.icon_twitter} ><TwitterIcon className={classes.icon}/></a>
                        <a className={classes.icon_instagram}><InstagramIcon className={classes.icon}/></a>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default HomeBottom;