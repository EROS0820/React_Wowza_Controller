import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        padding: '20px 3vw 20px 1vw'
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
        color: '#A4C61E',
    },
    table_head: {
        width: '100%',
        backgroundColor: '#B6DE17',
        marginTop: '25px',
        padding: '20px 40px',
        fontSize: '22px'
    },
    div_context: {
        marginTop: '20px',
    },
    div_inline: {
        width: '100%',
        display: 'inline-flex',
    },
    div_detail: {
        display: 'inline-flex',
        width: '50%',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    div_subject: {
        fontSize: '14px',
        padding: '1vw 2vw',
        backgroundColor: '#E9E9E9',
    },
    div_padding: {
        width: '1vw',
    },
    textarea: {
        fontSize: '14px',
        margin: '0.3vw',
        width: '100%',
        resize: 'none',
        border: 'none',
    },
    div_button: {
        width: '100%',
        position: 'relative'
    },
    button: {
        position : 'absolute',
        right: 0,
        padding: '10px 40px',
        color: '#000000',
        backgroundColor: '#23C5F3',
        '&:hover': {
            backgroundColor: '#23C5F3',
        },
        cursor: 'pointer',
    },
}));