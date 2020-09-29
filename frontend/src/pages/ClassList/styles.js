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
        fontSize: '15px',
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
        backgroundColor: '#C4D938',
        marginTop: '25px',
        padding: '10px 20px',
        fontSize: '22px'
    }
}));