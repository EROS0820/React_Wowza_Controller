import React, { useState, useEffect } from "react";
import {withRouter } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {ReactComponent as Illustration} from "../../images/img_illustration.svg";
import Illustration from "../../images/img_illustration.svg";
import {ReactComponent as PickSchoolIcon} from "../../images/icon_pick_school.svg";
import {ReactComponent as PickInstituteIcon} from "../../images/icon_pick_institute.svg";
import {ReactComponent as PickTutorIcon} from "../../images/icon_pick_tutor.svg";
import {ReactComponent as PickParentIcon} from "../../images/icon_pick_parent_student.svg";
import PickSchoolActiveIcon from "../../images/icon_pick_school_active.png";
import PickInstituteActiveIcon from "../../images/icon_pick_institute_active.png";
import PickTutorActiveIcon from "../../images/icon_pick_tutor_active.png";
import PickParentActiveIcon from "../../images/icon_pick_parent_student_active.png";
import SmartImage from "../../images/img_smart.svg";
import TeacherImage from "../../images/img_teacher.png";
import {ReactComponent as SmartPlayIcon} from "../../images/icon_smart_play.svg";
import {ReactComponent as MoreTutorIcon} from "../../images/icon_more_tutor.svg";
import {ReactComponent as VarietyCategoriesIcon} from "../../images/icon_variety_categories.svg";
import {ReactComponent as WatchDemoIcon} from "../../images/icon_watch_demo.svg";
import {ReactComponent as MakeEasyIconPaymentIcon} from "../../images/icon_make_easy_payment.svg";
import {ReactComponent as AttentionLiveIcon} from "../../images/icon_attention_live.svg";
import {ReactComponent as AccessStudyIcon} from "../../images/icon_access_study.svg";
import Package from "../../components/Packeage";
import FlowComponent from "../../components/FlowComponent";
import PortalComponent from "../../components/PortalComponent";
import useStyles from "./styles";

const package_basic = [
    {active: true, description: "Student"},
    {active: true, description: "Certificate"},
    {active: true, description: "Staff"},
    {active: false, description: "Library"},
    {active: false, description: " Fees & Account"},
    {active: true, description: "Examination"},
    {active: false, description: "Govt. Schemes (WB Govt. Schools)"},
    {active: true, description: "Messaging"},
    {active: true, description: "Customization"},
]

const package_advance = [
    {active: true, description: "Student"},
    {active: true, description: "Certificate"},
    {active: true, description: "Staff"},
    {active: false, description: "Library"},
    {active: false, description: " Fees & Account"},
]

const package_premium = [
    {active: true, description: "Student"},
    {active: true, description: "Certificate"},
    {active: true, description: "Staff"},
    {active: true, description: "Library"},
    {active: true, description: " Fees & Account"},
    {active: true, description: "Examination"},
    {active: true, description: "Govt. Schemes (WB Govt. Schools)"},
    {active: true, description: "Messaging"},
    {active: true, description: "Customization"},
]

const flow_setup = {
    title: "Easy Set Up",
    details: [
        {description: "Create Group"},
        {description: "Add Tutors"},
        {description: "Admit Student"},
        {description: "Fix FEE"},
        {description: "Complete Setup"},
    ]
}
const flow_teach = {
    title: "Easy Teach",
    details: [
        {description: "Create a Class"},
        {description: "Schedule"},
        {description: "Admit Student"},
        {description: "Teach"},
    ]
}
const flow_learn = {
    title: "Easy Learn",
    details: [
        {description: "Login"},
        {description: "Select Class"},
        {description: "Pay Fee"},
        {description: "Join Class"},
        {description: "Learn"},
    ]
}

const HomeContent = (props) => {
    var classes = useStyles();

    const [overPickSchool, setOverPickSchool] = useState(false);
    const [overPickInstitute, setOverPickInstitute] = useState(false);
    const [overPickTutor, setOverPickTutor] = useState(false);
    const [overPickParent, setOverPickParent] = useState(false);

    const [basicPackage, setBasicPackage] = useState(false);
    const [advancePackage, setAdvancePackage] = useState(true);
    const [premiumPackage, setPremiumPackage] = useState(false);

    const handleOverPickSchool = () => {
        setOverPickSchool(true);
    }
    const handleLeavePickSchool = () => {
        setOverPickSchool(false);
    }
    const handleClickPickSchool = () => {
        props.history.push('/sign/login/type=school');
    }

    const handleOverPickInstitute = () => {
        setOverPickInstitute(true);
    }
    const handleLeavePickInstitute = () => {
        setOverPickInstitute(false);
    }
    const handleClickPickInstitute = () => {
        props.history.push('/sign/login/type=admin');
    }
    const handleOverPickTutor = () => {
        setOverPickTutor(true);
    }
    const handleLeavePickTutor = () => {
        setOverPickTutor(false);
    }
    const handleClickPickTutor = () => {
        props.history.push('/sign/login/type=teacher');
    }
    const handleOverPickParent = () => {
        setOverPickParent(true);
    }
    const handleLeavePickParent = () => {
        setOverPickParent(false);
    }
    const handleClickPickParent = () => {
        props.history.push('/sign/login/type=student');
    }

    const handleClickBasicPackage = () => {
        setBasicPackage(true);
        setAdvancePackage(false);
        setPremiumPackage(false);
    }

    const handleClickAdvancePackage = () => {
        setBasicPackage(false);
        setAdvancePackage(true);
        setPremiumPackage(false);
    }

    const handleClickPremiumPackage = () => {
        setBasicPackage(false);
        setAdvancePackage(false);
        setPremiumPackage(true);
    }

    return(
        <div>
            <div className={classes.div_illustration}>
                <div className={classes.div_illustration_content} >
                    <div className={classes.div_illustration_text}>
                            <div className={classes.illustration_title}>
                            TEACH
                            </div>
                            <div className={classes.illustration_subtitle}>
                                FROM ANYWHERE TO ANYONE
                            </div>
                            <div className={classes.illustration_text}>
                                Start the Best Tutoring with Technolocy that Connects Students to tutors on a Live Class Room
                            </div>
                    </div>
                    <div className={classes.div_illustration_img} >
                        <img className={classes.img_illustration} src={Illustration} />
                            {/* <Illustration className={classes.img_illustration}/> */}
                    </div>
                </div>
                
            </div>
            <div className={classes.div_arrow}>
                <div className={classes.div_arrow_content}>
                    <ExpandMoreIcon className={classes.icon_arrow}/>
                </div>
            </div>
            <div className={classes.div_pick}>
                <div className={classes.div_pick_content}>
                    <div className={classes.div_pick_title}>
                        <div className={classes.pick_title1}>"PICK YOUR&nbsp;</div>
                        <div className={classes.pick_title2}>LOGIN"</div>
                    </div>
                    <div className={classes.div_pick_subtitle}>
                        <div className={classes.pick_subtitle}>Everything You Need to Manage Classroom Activities, Student Information and Parent Communications with Super Admin</div>
                    </div>
                    <div className={classes.div_pick_icon}>
                        <div className={classes.div_pick_school}>
                            <div className={overPickSchool ? classes.div_pick_school_content_active : classes.div_pick_icon_content} onClick={handleClickPickSchool} onMouseOver={handleOverPickSchool} onMouseLeave={handleLeavePickSchool}>
                                <div>
                                    {overPickSchool ? <img src={PickSchoolActiveIcon} width={120} height={120}/> : <PickSchoolIcon /> }
                                    <div className={classes.pick_icon_title}>SCHOOL</div>
                                </div>
                            </div>
                            <div className={classes.div_pick_icon_description}>
                                <div className={overPickSchool ? classes.pick_icon_description_active : classes.pick_icon_description}>
                                    Create Organizational Setup for tutoring
                                </div>
                            </div>
                        </div>
                        <div className={classes.div_pick_institute}>
                            <div className={overPickInstitute ? classes.div_pick_institute_content_active : classes.div_pick_icon_content} onClick={handleClickPickInstitute} onMouseOver={handleOverPickInstitute} onMouseLeave={handleLeavePickInstitute}>
                                <div>
                                    {overPickInstitute ? <img src={PickInstituteActiveIcon} width={120} height={120} /> : <PickInstituteIcon />}
                                    <div className={classes.pick_icon_title}>INSTITUTE</div>
                                </div>
                            </div>
                            <div className={classes.div_pick_icon_description}>
                                <div className={overPickInstitute ? classes.pick_icon_description_active : classes.pick_icon_description}>
                                    Create Organizational Setup for tutoring
                                </div>
                            </div>
                        </div>
                        <div className={classes.div_pick_tutor}>
                            <div className={overPickTutor ? classes.div_pick_tutor_content_active : classes.div_pick_icon_content} onClick={handleClickPickTutor} onMouseOver={handleOverPickTutor} onMouseLeave={handleLeavePickTutor}>
                                <div>
                                    {overPickTutor ? <img src={PickTutorActiveIcon} width={120} height={120} /> : <PickTutorIcon />}
                                    <div className={classes.pick_icon_title}>TUTOR</div>
                                </div>
                            </div>
                            <div className={classes.div_pick_icon_description}>
                                <div className={overPickTutor ? classes.pick_icon_description_active : classes.pick_icon_description}>
                                    Create Classroom, Send Message, Share Class Materials and make learning accessible anywhere
                                </div>
                            </div>
                        </div>
                        <div className={classes.div_pick_parent}>
                            <div className={overPickParent ? classes.div_pick_parent_content_active : classes.div_pick_icon_content} onClick={handleClickPickParent} onMouseOver={handleOverPickParent} onMouseLeave={handleLeavePickParent}>
                                <div>
                                    {overPickParent ? <img src={PickParentActiveIcon} width={120} height={120} /> : <PickParentIcon /> }
                                    <div className={classes.pick_icon_title}>STUDENT <br/> & PARENT</div>
                                </div>
                            </div>
                            <div className={classes.div_pick_icon_description}>
                                <div className={overPickParent ? classes.pick_icon_description_active : classes.pick_icon_description}>
                                    Empower learning and Become part of a vibrant Class Room Community
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
            <div className={classes.div_smart}>
                <div className={classes.div_smart_content}>
                    <div className={classes.div_smart_text}>
                        <div className={classes.div_smart_title}>
                            <div className={classes.smart_title1}>"Work SMART&nbsp;</div>
                            <div className={classes.smart_title2}>not</div>
                            <div className={classes.smart_title3}>&nbsp;HARD"</div>
                        </div>
                        <div className={classes.smart_subtitle}>Managing your campus has never been so efficient yet easy!</div>
                        <div className={classes.div_smart_detail}>
                            <div className={classes.div_smart_detail_content}>
                                <div className={classes.div_smart_detail_text}>
                                    <div className={classes.div_smart_detail_dot} />
                                    <div className={classes.smart_detail_text}>Easy to use and accessible from all devices.</div>
                                </div>
                                <div className={classes.div_smart_detail_line} />
                            </div>
                            <div className={classes.div_smart_detail_content}>
                                <div className={classes.div_smart_detail_text}>
                                    <div className={classes.div_smart_detail_dot} />
                                    <div className={classes.smart_detail_text}>Simple, intuitive, and User - friendly</div>
                                </div>
                                <div className={classes.div_smart_detail_line} />
                            </div>
                            <div className={classes.div_smart_detail_content}>
                                <div className={classes.div_smart_detail_text}>
                                    <div className={classes.div_smart_detail_dot} />
                                    <div className={classes.smart_detail_text}>Be a part of a Class Room Hub</div>
                                </div>
                                <div className={classes.div_smart_detail_line} />
                            </div>
                            <div className={classes.div_smart_detail_content}>
                                <div className={classes.div_smart_detail_text}>
                                    <div className={classes.div_smart_detail_dot} />
                                    <div className={classes.smart_detail_text}>Communicate with Your participants with Live Class</div>
                                </div>
                                <div className={classes.div_smart_detail_line} />
                            </div>
                            <div className={classes.div_smart_detail_content}>
                                <div className={classes.div_smart_detail_text}>
                                    <div className={classes.div_smart_detail_dot} />
                                    <div className={classes.smart_detail_text}>Share Videos, Documents and Links</div>
                                </div>
                                <div className={classes.div_smart_detail_line} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.div_smart_image}>
                        <div className={classes.div_smart_image_content}>
                            <img className={classes.smart_image} src={SmartImage} />
                            <div className={classes.div_smart_play}>
                                <SmartPlayIcon className={classes.smart_play_icon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.div_simple}>
                <div className={classes.div_simple_title}>
                    <div className={classes.simple_title1}>"SIMPLE&nbsp;</div>
                    <div className={classes.simple_title2}>& EASY"</div>
                </div>
                <div className={classes.div_simple_content}>
                    <FlowComponent data={flow_setup}/>
                    <FlowComponent data={flow_teach}/>
                    <FlowComponent data={flow_learn}/>
                </div>
            </div>
            <div className={classes.div_what}>
                <div className={classes.div_what_text}>
                    <div className={classes.div_what_title}>
                        <div className={classes.what_title1}>WHAT&nbsp;</div>
                        <div className={classes.what_title2}>YOU HAVE</div>
                    </div>
                    <div className={classes.what_description}>
                        Online Tutoring Provides Flexibility for Tutors and students allowing both to spend more time in Teaching & Learning with less hassle at your convenient time and place. The technology has now paved way for Tutoring beyond the Area of your access. You can find tutors with Unique Specialties in teaching the subjects and the tutors from other schools, colleges, Districts or states, so you have more option to choose from and can find the tutor that’s the perfect match for your need.
                    </div>
                </div>
                <div className={classes.div_what_content}>
                    <div className={classes.div_what_detail}>
                        <div className={classes.div_what_icon_row}>
                            <div className={classes.div_what_icon_left}>
                                <div className={classes.div_what_icon}><MoreTutorIcon /></div>
                                <div className={classes.div_what_icon_text}>More Tutors to Choose From</div>
                                <div className={classes.div_what_splite} />
                            </div>
                            <div className={classes.div_what_icon_right}>
                                <div className={classes.div_what_icon}><VarietyCategoriesIcon /></div>
                                <div className={classes.div_what_icon_text}>Variety of Categories to select from</div>
                                <div className={classes.div_what_splite} />
                            </div>
                        </div>
                        <div className={classes.div_what_icon_row}>
                            <div className={classes.div_what_icon_left}>
                                <div className={classes.div_what_icon}><WatchDemoIcon /></div>
                                <div className={classes.div_what_icon_text}>Watch Demo Classes</div>
                                <div className={classes.div_what_splite} />
                            </div>
                            <div className={classes.div_what_icon_right}>
                                <div className={classes.div_what_icon}><MakeEasyIconPaymentIcon /></div>
                                <div className={classes.div_what_icon_text}>Make easy Payments</div>
                                <div className={classes.div_what_splite} />
                            </div>
                        </div>
                        <div className={classes.div_what_icon_row}>
                            <div className={classes.div_what_icon_left}>
                                <div className={classes.div_what_icon}><AttentionLiveIcon /></div>
                                <div className={classes.div_what_icon_text}>Attend Live Intreactive Class</div>
                            </div>
                            <div className={classes.div_what_icon_right}>
                                <div className={classes.div_what_icon}><AccessStudyIcon /></div>
                                <div className={classes.div_what_icon_text}>Access Study Material & Aids</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.div_what_img}>
                        <img className={classes.what_img} src={TeacherImage} />
                    </div>
                </div>
            </div>
            <div className={classes.div_portal}>
                <PortalComponent />
            </div>
            <div className={classes.div_package}>
                <div className={classes.div_package_title}>
                    <div className={classes.package_title1}>PACKAGE&nbsp;</div>
                    <div className={classes.package_title2}>DETAILS</div>
                </div>
                <div className={classes.package_description}>
                    SchoolOnWeb School Management Application with generous features available in affordable plans.
                </div>
                <div className={classes.div_package_content}>
                    <div className={classes.package}>
                        <Package  title="Basic Package" selected={basicPackage} details={package_basic} onClickContact={handleClickBasicPackage}/>
                    </div>
                    <div className={classes.package_center}>
                        <Package  title="Advance Package" selected={advancePackage} details={package_advance} onClickContact={handleClickAdvancePackage}/>
                    </div>
                    <div className={classes.package}>
                        <Package  title="Premium Package" selected={premiumPackage} details={package_premium} onClickContact={handleClickPremiumPackage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HomeContent);
