import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        padding: '20px 100px 20px 50px'
    },
    div_title: {
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
    },
    title: {
        fontSize: '34px',
        color: '#252525',
        marginRight: 'auto',
    },
    search: {
        cursor: 'pointer'
    },
    edit: {
        padding: '10px'
    },
    content: {
        width: '100%',
        padding: '25px 0px 0px 50px'
    },
    content_head: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    parent_title: {
        fontSize: '15px',
        color: '#5D5D5D',
    },
    child_title: {
        fontSize: '15px',
        color: '#5D5D5D',
    },
    child_title1: {
        fontSize: '15px',
        color: '#F11818',
    },
    table_head: {
        width: '100%',
        backgroundColor: '#C4D938',
        marginTop: '25px',
        padding: '20px 40px',
        fontSize: '22px'
    },
    div_context: {
        marginTop: '20px',
    },
    div_button: {
        width: '100%',
        position: 'relative'
    },
    button: {
        position : 'absolute',
        right: 0,
        padding: '10px 40px',
        color: '#FFFFFF',
        backgroundColor: '#F13718',
        '&:hover': {
            backgroundColor: '#F13718',
        },
        cursor: 'pointer',
    }
}));