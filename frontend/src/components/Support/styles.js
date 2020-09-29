import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#FFFFFF',
        padding: '5vw 15vw',
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: '100%',
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
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: '5vw'
    },
    text: {
        color: '#1A1A1A',
        fontSize: '1vw',
        fontWeight: 'bold',
        marginLeft: '1vw',
    },
    div_icon_student: {
        minWidth: '8vw',
        height: '8vw',
        borderRadius: '50%',
        backgroundColor: '#F1903B',
    }
}));
