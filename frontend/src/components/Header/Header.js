import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Fab,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "../Wrappers/Wrappers";
import Notification from "../Notification/Notification";
import UserAvatar from "../UserAvatar/UserAvatar";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";
import LogoIcon from "../../images/logo.png";
import UserIcon from "../../images/icon_header_user.svg";
import ProfileIcon from "../../images/icon_profile.svg";
import SettingIcon from "../../images/icon_setting.svg";
import LogoutIcon from "../../images/icon_logout.svg";
import Logout from "../../utils/logout";

export default function Header(props) {
  const {history} = props;
  var classes = useStyles();

  var [profileMenu, setProfileMenu] = useState(null);

  const handleClickLogout = () => {
    Logout();
    history.push('/sign');
  } 

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.div_logo}>
          
        </div>
        <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <div className={classes.div_avatar}>
            <img src={UserIcon} height={40}/>
          </div>
        </IconButton>
        
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
            onClick={handleClickLogout}
          >
            <img className={classes.profileMenuIcon} src={LogoutIcon} />Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
