import React, { useState, useEffect } from "react";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ComputerImage from "../../images/img_computer.png";
import SlilderImage1 from "../../images/img_computer_inner.svg";
import useStyles from "./styles";

import Carousel, { Dots, autoplayPlugin  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const PortalComponent = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [slider, setSlider] = useState([
            (<img className={classes.image_slider} src={SlilderImage1}/>),
            (<img className={classes.image_slider} src={SlilderImage1}/>),
            (<img className={classes.image_slider} src={SlilderImage1}/>),
            (<img className={classes.image_slider} src={SlilderImage1}/>),
        ]
    );

    const onChange = value => {
        console.log(value);
        setValue(value);
        
    }

    return(
        <div className={classes.root}>
            <div className={classes.div_content}>
                <div className={classes.div_image}>
                    <div className={classes.div_slider}>
                        <Carousel 
                            value={value}
                            slides={slider}
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.div_computer}><img className={classes.image_computer} src={ComputerImage} /></div>
                </div>
                <div className={classes.div_text}>
                    <div>
                        <div className={classes.div_title}>
                            <div className={classes.title1}>PORTAL&nbsp;</div>
                            <div className={classes.title2}>OVERVIEW</div>
                        </div>
                        <div className={classes.description1}>
                            amet, consectetur Lorem ipsum dolor sit sed do eiusmod tempor incididunt ut labore et WQuis ipsum susp agna aliqua. endisse ultric Risus commodo viverra maecenas accumsan
                        </div>
                        <div className={classes.description2}>
                            Loaskjdfosd em seu auerest Lla seived elpms, evitive, ane TUer - nrifdly. Eb a aert of a Sclss Orom Uhb
                        </div>
                    </div>
                </div>
            </div>
            <Dots className={classes.dot} value={value} onChange={onChange} number={slider.length} />
        </div>
    )
}

export default PortalComponent;