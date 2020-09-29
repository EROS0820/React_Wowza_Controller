import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        height: '120px',
        backgroundColor: '#F11818',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    text: {
        width: '100%',
        textAlign: 'center',
        color: '#252525',
        fontSize: '20px',
        whiteSpace: 'pre-wrap',
    },
}));
