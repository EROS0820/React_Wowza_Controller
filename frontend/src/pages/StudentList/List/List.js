import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
      paddingTop: '2vw'
  },
  content: {
    padding: 0
  },
  head: {
    backgroundColor: '#00D8FF',
  },
  table_head: {
    height: '3vw',
  },
  inner: {
    overflow: 'auto',
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
    fontSize: '1vw',
  },
  table_cell_icon: {
    textAlign: 'center',
    fontSize: '1vw',
    display: 'inline-flex'
  },
  icon_visible: {
    marginRight: '10px',
    fontSize: '1.7vw',
    cursor: 'pointer',
    // color: '#6BDDDD'
  },
  icon_edit: {
    marginRight: '10px',
    fontSize: '1.7vw',
    cursor: 'pointer',
    // color: '#04ff71'
  },
  icon_delete: {
    fontSize: '1.7vw',
    cursor: 'pointer',
    // color: '#F21727',
  },
}));

const List = props => {
  const { className, tutorList, onClickDelete, onClickEdit, onClickView, ...rest } = props;
  
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
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.head}>
                <TableRow className={classes.table_head}>                  
                  <TableCell className={classes.tableCell}>No</TableCell>
                  <TableCell className={classes.tableCell}>NAME</TableCell>
                  <TableCell className={classes.tableCell}>GRADE</TableCell>
                  <TableCell className={classes.tableCell}>SUBJECT</TableCell>
                  <TableCell className={classes.tableCell}>CONTACT NO</TableCell>                  
                  <TableCell className={classes.tableCell}>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tutorList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((cell, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={cell.id}
                    selected={selectedUsers.indexOf(cell.id) !== -1}
                  >
                    <TableCell className={classes.tableCell} >{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.first_name + ' ' + cell.last_name}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.grade === typeof(undefined) ? "" : cell.grade}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.subjects === typeof(undefined) || cell.subjects.length === 0 ? "" : cell.subjects.length === 1 ? cell.subjects[0] : cell.subjects[0] + ", ..."}</TableCell>
                    <TableCell className={classes.tableCell} >{cell.phone === typeof(undefined) ? "" : cell.phone}</TableCell>  
                    <TableCell className={classes.tableCell}>    
                        <VisibilityIcon className={classes.icon_visible} onClick={()=>props.onClickView(cell.id)}/>                                        
                        <EditIcon className={classes.icon_edit} onClick={()=>props.onClickEdit(cell.id)}/>                                        
                        <DeleteIcon className={classes.icon_delete} onClick={()=>props.onClickDelete(cell.id)}/>             
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={tutorList.length}
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
  tutorList: PropTypes.array.isRequired
};

export default List;
