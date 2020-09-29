import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
    },
    btn_top_show: {
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 99,
        border: "none",
        outline: "none",
        backgroundColor: "#F21817",
        "&:hover" : {
            backgroundColor: '#AAAAAA'
        }, 
        color: "white",
        cursor: "pointer",
        borderRadius: "4px",
    },
    btn_top_hide: {
        display: "none",
    },
    arrow_top: {
        color: "#FFFFFF",
        fontSize: "45px !important",
    },
}));
