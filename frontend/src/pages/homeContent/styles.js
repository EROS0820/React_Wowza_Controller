import { makeStyles } from "@material-ui/styles";
import PickBackground from "../../images/img_back_pick.svg"
import EasyBackground from "../../images/img_back_easy.svg";
import PackageBackground from "../../images/img_back_package.svg";

export default makeStyles(theme => ({
    div_illustration: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: "80px 10vw 0px"
    },
    div_illustration_content: {
        display: 'inline-flex',
        width: '100%',
    },
    div_illustration_text: {
        marginLeft: '5vw',
        width: '50%',
    },
    illustration_title: {
        color: '#F11818',
        fontSize: '4.8vw',
        fontWeight: 'bold'
    },
    illustration_subtitle: {
        color: '#545454',
        fontSize: '2.2vw',
        fontWeight: 'bold',
    },
    illustration_text: {
        width: '60%',
        color: '#7B7B7B',
        fontSize: '1.5vw'
    },
    div_illustration_img: {
        width: '50%',
        marginBottom: "-0.9vw",
        display: 'flex',
        alignItems: 'flex-end'
    },
    img_illustration: {
        width: '100%',
    },
    div_arrow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    div_arrow_content: {
        width: '70px',
        height: '70px',
        marginTop: '-20px',
        marginBottom: '-50px',
        borderRadius: '35px',
        backgroundColor: '#F11818',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_arrow: {
        fontSize: '75px',
        color: '#FFFFFF'
    },
    div_pick: {
        width: '100%',
        backgroundImage: `url(${PickBackground})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '120px 15vw 20px',
    },
    div_pick_content: {
        width: '100%',
    },
    div_pick_title: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'center'
    },
    pick_title1: {
        color: '#F01717',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    pick_title2: {
        color: '#000000',
        fontSize: '3.8vw',
    },
    div_pick_subtitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    pick_subtitle: {
        width: '60%',
        color: '#282828',
        fontSize: '1.6vw',
        textAlign: 'center',
    },
    div_pick_icon: {
        width: '100%',
        margin: '45px 0px 0px',
        display: 'inline-flex',
    },
    div_pick_icon_content: {
        width: '200px',
        height: '200px',
        borderRadius: '100px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    
    pick_school_icon: {
        width: '100%',
        height: '100%',
    },
    div_pick_icon_description: {
        width: '200px',
        marginTop: '-10px',
        display: 'flex',
        justifyContent: 'center',
    },
    pick_icon_description_active: {
        width: '150px',
        fontSize: '15px'
    },
    pick_icon_description: {
        width: '150px',
        fontSize: '15px',
        visibility: 'hidden'
    },
    pick_icon_title: {
        color: '#000000',
        fontSize: '20px',
        textAlign: 'center'
    },
    div_pick_school: {
        
    },
    div_pick_school_content_active: {
        width: '200px',
        height: '200px',
        margin: '-20px 0px 20px',
        borderRadius: '100px',
        backgroundColor: '#8526D8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    div_pick_school: {
        
    },
    div_pick_institute: {
        marginLeft: 'auto'
    },
    div_pick_institute_content_active: {
        width: '200px',
        height: '200px',
        margin: '-20px 0px 20px',
        borderRadius: '100px',
        backgroundColor: '#ACD108',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    pick_institute_icon: {

    },
    div_pick_tutor: {
        marginLeft: 'auto'
    },
    div_pick_tutor_content_active: {
        width: '200px',
        height: '200px',
        margin: '-20px 0px 20px',
        borderRadius: '100px',
        backgroundColor: '#00D8FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    pick_tutor_icon: {

    },
    div_pick_parent: {
        marginLeft: 'auto'
    },
    div_pick_parent_content_active: {
        width: '200px',
        height: '200px',
        margin: '-20px 0px 20px',
        borderRadius: '100px',
        backgroundColor: '#FFA800',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    pick_parent_icon: {

    },
    div_smart: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '40px 15vw 40px'
    },
    div_smart_content: {
        width: '100%',
        display: 'inline-flex',
    },
    div_smart_text: {
        width: '50%',
        paddingRight: '30px',
    },
    div_smart_image: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
    },
    div_smart_image_content: {
        position: 'relative',
    },
    div_smart_play: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smart_play_icon: {
        width: '7vw',
        height: '7vw',
    },
    smart_image: {
        width: '100%',
    },
    div_smart_title: {
        display: 'inline-flex',
        alignItems: 'baseline',
    },
    smart_title1: {
        color: '#F01717',
        fontSize: '2.5vw',
        fontWeight: 'bold',
    },
    smart_title2: {
        color: '#000000',
        fontSize: '1.8vw',
    },
    smart_title3: {
        color: '#000000',
        fontSize: '2.5vw',
    },
    smart_subtitle: {
        color: '#000000',
        fontSize: '1.5vw',
    },
    div_smart_detail: {
        width: '80%',
        margin: '30px 30px 0px 0px'
    },
    div_smart_detail_content: {
        width: '100%',
        padding: '10px 0px'
    },
    div_smart_detail_text: {
        display: 'inline-flex',
        alignItems: 'center'
    },
    div_smart_detail_dot: {
        minWidth: '12px',
        height: '12px',
        borderRadius: '6px',
        backgroundColor: '#F01717',
    },
    smart_detail_text: {
        color: '#1D1D1D',
        fontSize: '1vw',
        marginLeft: '12px'
    },
    div_smart_detail_line: {
        width: '100%',
        height: '2px',
        backgroundColor: '#848484',
    },
    div_simple: {
        width: '100%',
        padding: '30px 15vw',
        backgroundImage: `url(${EasyBackground})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_simple_title: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'center',
    },
    simple_title1: {
        color: '#FFFFFF',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    simple_title2: {
        color: '#000000',
        fontSize: '3.8vw',
    },
    div_simple_content: {
        width: '100%',
        marginTop: '50px',
        display: 'inline-flex',
    },


    div_what: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '90px 10vw 0px'
    },
    div_what_text: {
        padding: '0px 5vw',
    },
    div_what_title: {
        display: 'inline-flex',
    },
    what_title1: {
        color: '#F01717',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    what_title2: {
        color: '#000000',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    what_description: {
        width: '100%',
        color: '#000000',
        fontSize: '1.3vw',
    },
    div_what_content: {
        width: '100%',
        marginTop: '80px',
        display: 'inline-flex',
    },
    div_what_detail: {
        width: '50%',
        paddingLeft: '100px'
    },
    div_what_img: {
        width: '50%',
        display: 'flex',
        justifyItems: 'flex-end'
    },
    what_img: {
        width: '100%',
    },
    div_what_icon_row: {
        width: '100%',
        marginTop: '60px',
        display: 'inline-flex',
        alignItems: 'flex-end',
    },
    div_what_icon_left: {
        width: '40%',
        marginRight: 'auto',
    },
    div_what_icon_right: {
        width: '40%',
    },
    div_what_icon: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    div_what_icon_text: {
        width: '100%',
        marignTop: '10px',
        textAlign: 'center',
        color: '#000000',
        fontSize: '1.5vw',
        fontWeight: 'bold',
    },
    div_what_splite: {
        width: "100%",
        marginTop: '20px',
        borderBottom: "4px dotted #000000"
    },
    div_portal: {
        width: '100%',
        padding: '20px 15vw',
        backgroundColor: '#FFFFFF',
    },

    div_package: {
        width: '100%',
        padding: '20px 15vw 50px',
        backgroundImage: `url(${PackageBackground})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    div_package_title: {
        display: 'inline-flex',
    },
    package_title1: {
        color:'#FFFFFF',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    package_title2: {
        color:'#010101',
        fontSize: '3.8vw',
        fontWeight: 'bold',
    },
    package_description: {
        color: '#FFFFFF',
        fontSize: '1.8vw',
    },
    div_package_content: {
        width: '100%',
        marginTop: '30px',
        display: 'inline-flex',
    },
    package: {
        width: '32%',
        minHeight: '100% !important',
    },
    package_center: {
        width: '32%',
        minHeight: '100% !important',
        margin: '0px auto',
    },
}));
