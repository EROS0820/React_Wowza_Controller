import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    padding: '20px 100px 20px 50px'
  },
  div_title: {
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
  },
  title: {
      fontSize: '34px',
      color: '#252525',
      marginRight: 'auto',
  },
  search: {
      cursor: 'pointer'
  },
  edit: {
      padding: '10px'
  },
  content: {
      width: '100%',
      padding: '25px 0px 0px 50px'
  },
}));
