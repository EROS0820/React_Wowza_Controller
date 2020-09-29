import { makeStyles } from "@material-ui/styles";
import StudentBack from '../../images/student_back.svg';
import TeacherBack from '../../images/teacher_back.svg';
import AdminBack from '../../images/admin_back.svg';
import SchoolBack from '../../images/school_back.svg';

export default makeStyles(theme => ({
    root: {
        margin: '2vw 3vw 3vw',
        position: 'relative'
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000000',
        fontSize: '2vw'
    },
    div_email: {
        marginTop: '1.5vw'
    },
    div_password: {
        marginTop: '1vw'
    },
    div_sign_button: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '1vw 0px 0px',
        cursor: 'pointer'
    },
    button_disable: {
        margin: '1vw 0px 0px',
        cursor: 'pointer',
        backgroundColor: '#AAAAAA'
    },
    div_social: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1.5vw'
    },
    div_circle: {
        marginRight: '1vw',
        width: '3.5vw',
        height: '3.5vw',
        borderRadius: '50%',
        padding: '0.7vw'
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    facebook: {
        width: '3.5vw',
        height: '3.5vw',
        marginLeft: '2vw',
        borderRadius: '50%',
        padding: '0.7vw',
        cursor: 'pointer',
    },
    google: {
        width: '3.5vw',
        height: '3.5vw',
        borderRadius: '50%',
        padding: '0.7vw',
        margin: 'auto',
        cursor: 'pointer',
    },
    apple: {
        width: '3.5vw',
        height: '3.5vw',
        marginRight: '2vw',
        borderRadius: '50%',
        padding: '0.7vw',
        cursor: 'pointer',
    },
    label: {
        fontSize: '1.2vw',
        height: '1.2vw',
        color: '#FF0000',
        marginTop: '1vw'
    },
    div_parallex_student: {
        backgroundImage: `url(${StudentBack})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_parallex_teacher: {
        backgroundImage: `url(${TeacherBack})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_parallex_admin: {
        backgroundImage: `url(${AdminBack})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_parallex_school: {
        backgroundImage: `url(${SchoolBack})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_context: {
        width: '100%',
        height: '100%',
        padding: '70px 10vw',
        display: 'flex',
        justifyContent: 'center',
    },
    sign_content:{
        display: 'inline-flex',
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: '47%',
        marginRight: 'auto',
    },
    div_sign: {
        width: '43%',
        height: 'fit-content',
        backgroundColor: '#FFFFFF',
    },
    icon_insert: {
        width: '1.5vw'
    }
}));
