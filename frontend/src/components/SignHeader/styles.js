import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'sticky',
        top: 0,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    header_content: {
        width: '100%',
        padding: '0px 10vw',
        display: 'inline-flex',
    },
    logo: {
        minWidth: '10vw',
        height: '4vw',
    },
    div_contact: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contact_content: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '50vw',
        justifyContent: 'center',
    },
    contact: {
        color: '#1A1A1A',
        fontSize: '1.1vw',
        margin: 'auto',
        cursor: 'pointer',
        '&:hover':{
            color: '#555555'
        }
    },
    div_sign: {
        display: 'inline-flex',
        alignItems: 'center'
    },
    btn_active: {
        color: '#FFFFFF',
        fontSize: '1.1vw',
        backgroundColor: '#F22929',
        '&:hover': {
            backgroundColor: '#F22929'
        },
        borderRadius: '0.6vw',
        padding: '0.6vw 2.5vw',
        cursor: 'pointer',
        border: '2px solid #F22929'
    },
    btn_disable: {
        color: '#1A1A1A',
        fontSize: '1.1vw',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#F22929',
            color: '#FFFFFF',
        },
        borderRadius: '0.6vw',
        padding: '0.6vw 2.5vw',
        cursor: 'pointer',
        border: '2px solid #F22929'
    },
    btn_splite: {
        padding: '0 1vw'
    }
}));
