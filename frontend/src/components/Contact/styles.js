import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#FFFFFF',
        padding: '50px 15vw',
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: '100%%',
    },
    div_title: {
        color: '#1A1A1A',
        fontSize: '6vw',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    div_content: {
        width: '100%',
        display: 'flex',
    },
    div_detail: {
        width: '40vw',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: '7vw'
    },
    text: {
        color: '#1A1A1A',
        fontSize: '2vw',
        fontWeight: 'bold',
        marginLeft: '20px',
    },
}));
