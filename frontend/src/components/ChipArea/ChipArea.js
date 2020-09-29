import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    alignItems: 'center',
    backgroundColor: '#EBE8E8',
    boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#00D8FF',
  },
}));

const  ChipArea = (props) => {
    const classes = useStyles();
    const {subjects, onDeleteChip, ...rest} = props;

    const handleDelete = (chipToDelete) => () => {
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper component="ul" className={classes.root}>
            {subjects.map((data) => {
            let icon;

            if (data === 'React') {
                icon = <TagFacesIcon />;
            }

            return (
            <li key={data}>
                <Chip
                    icon={icon}
                    label={data}
                    onDelete={()=>props.onDeleteChip(data)}
                    className={classes.chip}
                />
            </li>
            );
        })}
    </Paper>
  );
}

export default ChipArea;