import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '103%',
        display: 'inline-flex',
        padding: '1vw 0 0',
        alignItems: 'center',
    },
    div_split: {
        width: '3vw',
    },
    icon_upload: {
        width: '3vw',
        cursor: 'pointer',
    },
    input: {
        display: 'none',
    },
    textinput: {
        fontSize: '1vw',
        backgroundColor: '#EBE8E8',
        padding: '0.5vw 1vw'
    },
    div_icon_add: {
        minWidth: '2vw',
        height: '2vw',
        marginLeft: '0.5vw',
        borderRadius: '50%',
        backgroundColor: '#00DEFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    div_icon_delete: {
        minWidth: '2vw',
        height: '2vw',
        marginLeft: '0.5vw',
        borderRadius: '50%',
        backgroundColor: '#FF3F35',
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
}));
