import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,  
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,  
  TablePagination,
  Avatar,
} from '@material-ui/core';
// import {ContainedButton} from '../../../Dashboard/components/Button'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  root: {
      paddingTop: '30px'
  },
  content: {
    padding: 0
  },
  head: {
    backgroundColor: '#C4D938',
  },
  inner: {
    
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  deleteButton: {
    backgroundColor: '#ff1d6b',
    width: 95,
    margin: 9
  },
  editButton: {
    margin: 9,
    width: 95
  },
  tableCell: {
    textAlign: 'center',
  },
  icon_visible: {
    marginRight: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    // color: '#6BDDDD'
  },
  icon_edit: {
    marginRight: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    // color: '#04ff71'
  },
  icon_delete: {
    fontSize: '30px',
    cursor: 'pointer',
    // color: '#F21727',
  },
  button: {
      color: '#FFFFFF',
      backgroundColor: '#F13718',
      '&:hover': {
        backgroundColor: '#F13718',
      },
      width: '100%',
  }
}));

const List = props => {
  const { className, classList, clickSchedule, ...rest } = props;
  
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  
  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardContent className={classes.content}>
        {/* <PerfectScrollbar> */}
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.head}>
                <TableRow>                  
                  <TableCell className={classes.tableCell}>No</TableCell>
                  <TableCell className={classes.tableCell}>Category</TableCell>
                  <TableCell className={classes.tableCell}>Subject</TableCell>
                  <TableCell className={classes.tableCell}>No.of Class</TableCell>                  
                  <TableCell className={classes.tableCell}>Fees</TableCell>
                  <TableCell className={classes.tableCell}>Actions</TableCell>
                  <TableCell className={classes.tableCell}>Schedule classes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((cell, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={cell.id}
                    selected={selectedUsers.indexOf(cell.id) !== -1}
                  >
                    <TableCell className={classes.tableCell} >{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.category}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.subject}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.number}</TableCell>  
                    <TableCell className={classes.tableCell} >{cell.fees}</TableCell>                    
                    <TableCell className={classes.tableCell}>    
                        <VisibilityIcon className={classes.icon_visible} />                                        
                        <EditIcon className={classes.icon_edit} />                                        
                        <DeleteIcon className={classes.icon_delete} />             
                    </TableCell>              
                    <TableCell className={classes.tableCell} >
                        <Button className={classes.button} onClick={()=>props.clickSchedule()}>Schedule</Button>
                    </TableCell>                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        {/* </PerfectScrollbar> */}
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={classList.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

List.propTypes = {
  className: PropTypes.string,
  classList: PropTypes.array.isRequired
};

export default List;
