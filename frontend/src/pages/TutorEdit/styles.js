import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        padding: '20px 3vw 50px 1vw',
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
    div_context: {
        marginTop: '0px',
    },
    div_inline: {
        width: '100%',
        display: 'inline-flex',
        padding: '1vw 0 0',
    },
    div_split: {
        width: '3vw',
    },
    textinput: {
        height: 'fit-content',
        fontSize: '1vw',
        backgroundColor: '#EBE8E8',
        padding: '0.5vw 1vw'
    },
    div_button: {
        width: '100%',
        position: 'relative',
        marginTop: '1vw',
    },
    div_button_content: {
        position: 'absolute',
        right: 0,
        display: 'inline-flex',
    },
    button_cancel: {
        width: '8vw',
        marginRight: '1vw',
        color: '#000000',
        backgroundColor: '#FF3F35',
        '&:hover': {
            backgroundColor: '#FF3F35',
        },
        cursor: 'pointer',
    },
    button: {
        width: '8vw',
        color: '#000000',
        backgroundColor: '#D1E145',
        '&:hover': {
            backgroundColor: '#D1E145',
        },
        cursor: 'pointer',
    },
    button_disable: {
        width: '8vw',
        color: '#000000',
        backgroundColor: '#A1A1A1',
        '&:hover': {
            backgroundColor: '#A1A1A1',
        },
        cursor: 'pointer',
    },
    icon_upload: {
        width: '3vw',
        cursor: 'pointer',
    },
    input: {
        display: 'none',
    },
    div_password: {
        margin: '3vw 0 1vw'
    },
    div_password_cell: {
        width: '100%',
    },
    title_password: {
        color: '#024855',
        fontSize: '1vw',
    },
    password: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF'
        }
    },
    div_password_content: {
        width: '100%',
        padding: '1vw',
        display: 'inline-flex',
        backgroundColor: '#00DEFF',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    password_edit: {
        color: '#1A1A1A',
        padding: '0.5vw',
        fontSize: '1vw',
    },
    text_password: {
        color: '#252525',
        fontSize: '0.8vw',
    },
    div_padding_vertical: {
        width: '2.5vw',
    },
    div_password_generate: {
        width: '100%',
        display: 'inline-flex',
    },
    btn_generate: {
        color: '#FFFFFF',
        padding: '0 1vw',
        marginLeft: '0.5vw',
        backgroundColor: '#009AB1',
        '&:hover': {
            backgroundColor: '#009AB1',
        },
        fontSize: '0.8vw',
    },
    div_grade: {
        width: '100%',
        margin: '1vw 0 0',
        padding: '0.5vw 0',
        backgroundColor: '#EBE8E8',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    text_grade: {
        color: '#1A1A1A',
        fontSize: '1vw',
        paddingLeft: '1vw',
        display: 'inline-flex',
        alignItems: 'center',
        marginBottom: '0.5vw',
        cursor: 'pointer',
    },
    icon_arrow_down: {
        color: '#1A1A1A',
    },
    div_country: {
        width: '100%',
        backgroundColor: '#EBE8E8',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    text_country: {
        width: '100%',
        height: '100%',
        fontSize: '1vw',
        color: '#1A1A1A',
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"]':{
            color: '#1A1A1A',
            height: '100%',
            paddingLeft: '0.5vw',
            fontSize: '1vw',
        }
    },
    div_icon_add: {
        minWidth: '2vw',
        height: '2vw',
        marginLeft: '0.5vw',
        marginTop: '0.6vw',
        borderRadius: '50%',
        backgroundColor: '#00DEFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    icon: {
        color: '#FFFFFF',
        fontSize: '2vw'
    },
    prefix: {
        marginRight: '0.5vw'
    },
    label: {
        fontSize: '1.2vw',
        height: '1.2vw',
        color: '#FF0000',
        marginTop: '1vw'
    }
}));