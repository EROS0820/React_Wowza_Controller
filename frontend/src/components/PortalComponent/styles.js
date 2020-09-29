import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
    },
    div_content: {
        width: '100%',
        display: 'inline-flex'
    },
    div_image: {
        width: '48%',
        position: 'relative',
    },
    div_computer: {
        position: 'relative',
    },
    image_computer: {
        width: '100%',
    },
    div_slider: {
        width: '83%',
        height: '78%',
        position: 'absolute',
        top: 0,
        left: '3vw',
        paddingTop: '3%',
    },
    div_text: {
        width: '48%',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
    },
    image_slider: {
        width: '100%',
        height: '100%',
    },
    div_title: {
        width: '100%',
        display: 'inline-flex',
    },
    title1: {
        color: '#000000',
        fontSize: '3vw',
        fontWeight: 'bold'
    },
    title2: {
        color: '#F01717',
        fontSize: '3vw',
        fontWeight: 'bold'
    },
    description1: {
        width: '100%',
        color: '#515151',
        fontSize: '1.5vw',
    },
    description2: {
        width: '100%',
        color: '#3A3A3A',
        fontSize: '1.8vw',
        paddingTop: '10px',
    },
    dot: {
        '& li button::before': {
            backgroundColor: '#F01717 !important',
            width: '14px !important',
            height: '14px !important',
        }
    }
}));
