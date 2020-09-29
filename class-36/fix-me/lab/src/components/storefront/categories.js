import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {

  // TODO: get props from redux store
  props = {
    categories: [
      { _id:0, name: 'fix me'}
    ],
    category: name => alert('fix me'),

  }

  const classes = useStyles();

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.category(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default Categories;
