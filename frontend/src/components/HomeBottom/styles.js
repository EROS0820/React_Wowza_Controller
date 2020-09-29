import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#1C295D',
        padding: '70px 15vw 50px',
        display: 'flex',
        justifyContent: 'center',
    },
    div_logo: {
        marginRight: '5vw',
        display: 'flex',
        alignItems: 'center'
    },
    div_content: {
        width: '80%',
    },
    bottom_content: {
        display: 'inline-flex',
        width: '100%',
    },
    contact: {
        color: '#FFFFFF',
        '&:hover': {
            color: '#AAAAAA'
        },
        fontSize: '1.7vw',
        cursor: 'pointer'
    },
    div_left: {
    },
    div_center: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    div_right: {
    },
    div_line: {
        width: '100%',
        height: '2px',
        backgroundColor: '#FFFFFF33',
        marginTop: '3vw',
        marginBottom: '1vw'
    },
    div_copy: {
        width: '100%',
        display: 'flex',
        padding: '0px 3vw',
        alignItems: 'center',
    },
    text_copy: {
        color:  '#FFFFFF', 
        fontSize:  '1.7vw',
        marginRight: 'auto'
    },
    div_social: {
        display: 'inline-flex'
    },
    icon_facebook: {
        cursor: 'pointer',
    },
    icon_twitter: {
        cursor: 'pointer',
        marginLeft: '30px',
        marginRight: '30px',
    },
    icon_instagram: {
        cursor: 'pointer',
    },
    icon: {
        width: '2.5vw'
    }
}));
