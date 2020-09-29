import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },
    title: {
        width: '100%',
        padding: '10px 0px',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontSize: '2vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    title_select: {
        width: '100%',
        padding: '20px 0px',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontSize: '2vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    div_content: {
        width: '100%',
        height: '100%',
        padding: '100px 20px 50px',
    },
    div_detail: {
        display: 'inline-flex',
        width: '100%',
        margin: '10px 0px'
    },
    icon_true: {
        color: '#F01717'
    },
    icon_false: {
        color: '#000000'
    },
    detail_text: {
        color: '#000000',
        fontSize: '1vw',
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    div_bottom: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-30px',
        position: 'absolute',
    },
    div_button: {
        width: '60%',
        height: '60px',
        backgroundColor: '#000000',
        '&:hover': {
            backgroundColor: '#555555',
        },
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }
}));
