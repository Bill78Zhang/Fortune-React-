import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default function OutlinedChips({categories}) {
  const classes = useStyles();
  const [currentIcon, setCurrentIcon] = useState(categories[0]);

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = (e, item) => {
    e.preventDefault();
    setCurrentIcon(item);
  };

  return (
    <div className={classes.root}>
      {categories.map(item => {
        return (
          <Chip
            icon={item.icon}
            label={item.name}
            color={item.id === currentIcon.id ? 'primary' : ''}
            onClick={e => handleClick(e, item)}
            variant='outlined'
          />
        );
      })}
    </div>
  );
}
