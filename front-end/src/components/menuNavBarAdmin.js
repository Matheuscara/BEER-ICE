import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HamburguerAdmin from './HamburguerAdmin';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ content }) {
  const classes = useStyles();

  return (
    <div className={ classes.root } data-testid="top-title">
      <AppBar position="relative">
        <Toolbar>

          <Typography variant="h4" className={ classes.title }>
            {content}
          </Typography>

          <HamburguerAdmin />

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  content: PropTypes.string.isRequired,
};
