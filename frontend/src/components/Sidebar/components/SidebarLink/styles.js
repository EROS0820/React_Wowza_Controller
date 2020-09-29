import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link1: {
    textDecoration: "none",
    "&:focus, &:hover": {
      // backgroundColor: theme.palette.background.light,
      backgroundColor: '#00EAFF',
    },
    backgroundColor: '#00EAFF',
  },
  link2: {
    textDecoration: "none",
    "&:focus, &:hover": {
      // backgroundColor: theme.palette.background.light,
      backgroundColor: '#0BD0F4',
    },
    backgroundColor: '#0BD0F4',
  },
  linkActive: {
    backgroundColor: theme.palette.background.light,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.light,
    }
  },
  linkNested: {
    paddingLeft: 30,
    backgroundColor: '#82F5FF',
    "&:hover, &:focus": {
      // backgroundColor: "#FFFFFF",
      backgroundColor: '#82F5FF',
    },
  },
  linkNestedActive: {
    paddingLeft: 30,
    backgroundColor: theme.palette.background.light,
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF",
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
  },
  linkIconActive: {
    color: theme.palette.primary.main,
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
  },
  linkTextActive: {
    color: theme.palette.text.primary,
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(0),
  },
  nestedList1: {
    paddingLeft: theme.spacing(30),
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: "#D8D8D880",
  },
}));
