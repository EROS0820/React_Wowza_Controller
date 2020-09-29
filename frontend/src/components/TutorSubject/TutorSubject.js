import React, { useState, useEffect } from "react";
import { InputAdornment, IconButton  } from '@material-ui/core';
import ShadowInput from '../ShadowInput';
import UploadIcon from '../../images/icon_upload.svg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyles from "./styles";

const TutorSubject = (props) => {
    const {index, photoName, videoName, ...rest} = props;
    const classes = useStyles();

    const handleClickVideo = (event) => {
        console.log(index);
        props.onUpload(index, event, true);
    }

    const handleClickPhoto = (event) => {
        console.log(index);
        props.onUpload(index, event, false);
    }

    return(
        <div className={classes.root}>
            <input className={classes.input} type="file" id={"video" + index} onChange={handleClickVideo} accept="video/*"/>
            <ShadowInput
                className={classes.textinput}
                name="video"
                placeholder="Upload  Demo Video"
                value={videoName || ''}
                endAdornment={
                    <InputAdornment position="start">
                        <label htmlFor={"video" + index}><img className={classes.icon_upload} src={UploadIcon} /></label>
                    </InputAdornment>
                }
            />
            <div className={classes.div_split}/>
            <input className={classes.input} type="file" id={"photo" + index} onChange={handleClickPhoto} accept="image/*"/>
            <ShadowInput
                className={classes.textinput}
                name="photo"
                placeholder="Upload  Cover Photo"
                value={photoName || ''}
                endAdornment={
                    <InputAdornment position="start">
                        <label htmlFor={"photo" + index}><img className={classes.icon_upload} src={UploadIcon} /></label>
                    </InputAdornment>
                }
            />
            {
                index === 0 ? 
                <div className={classes.div_icon_add}>
                    <AddIcon className={classes.icon} onClick={()=>props.onClick(index)}/>
                </div> : 
                <div className={classes.div_icon_delete}>
                    <RemoveIcon className={classes.icon} onClick={()=>props.onClick(index)}/>
                </div>
            }
        </div>
    )
}

export default TutorSubject;