import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        padding: '20px 3vw 20px 1vw',
        position: 'relative',
    },
    div_indicator: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    indicator: {
        color: '#F11818',
    },
    div_title: {
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
    },
    title: {
        fontSize: '2vw',
        color: '#252525',
        marginRight: 'auto',
    },
    text_search: {
        fontSize: '1vw',
    },
    search: {
        cursor: 'pointer',
        fontSize: '1.5vw',
    },
    edit: {
        padding: '0.5vw',
        fontSize: '1vw',
    },
    content: {
        width: '100%',
        padding: '1vw 0 0 4vw'
    },
    content_head: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    parent_title: {
        fontSize: '0.9vw',
        color: '#5D5D5D',
    },
    child_title: {
        fontSize: '0.9vw',
        color: '#00D8FF',
    },
    table_head: {
        width: '100%',
        backgroundColor: '#00D8FF',
        marginTop: '0.3vw',
        padding: '0.6vw 1.5vw',
        fontSize: '1.2vw'
    },
    div_button: {
        width: '100%',
        marginTop: '1vw',
        position: 'relative',
    },
    button_add: {
        width: '8vw',
        color: '#FFFFFF',
        position: 'absolute',
        right: 0,
        backgroundColor: '#FF3F35',
        '&:hover': {
            backgroundColor: '#FF3F35',
        },
        cursor: 'pointer',
        display: 'inline-table',
    },
}));