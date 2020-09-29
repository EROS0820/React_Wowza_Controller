import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    flow_image: {
        width: '100%',
    },
    div_circle_container: {
        width: '82%',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: '82%',
    },
    div_circle: {
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        padding: '10px',
        position: 'absolute',
        top: '10px',
        bottom: '10px',
        left: '10px',
        right: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    div_title: {
        color: '#0A9BBB',
        fontSize: '2vw'
    },
    div_center: {
        textAlign: 'center',
    },
    div_detail_list: {
        display: 'grid',
    },
    div_detail: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    div_dot: {
        minWidth: '8px',
        minHeight: '8px',
        borderRadius: '50%',
        backgroundColor: '#F01717',
    },
    div_text: {
        color: '#010101',
        fontSize: '1.2vw',
        marginLeft: '10px',
        textAlign: 'left',
    }

}));
