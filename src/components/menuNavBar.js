import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import Hamburguer from './Hamburguer';

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

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={ false } direction="down" in={ !trigger }>
      {children}
    </Slide>
  );
}

export default function ButtonAppBar({ content }) {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <div className={ classes.root } data-testid="top-title">
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={ classes.menuButton }
              color="inherit"
              aria-label="menu"
            >
              <Hamburguer />
            </IconButton>
            <Typography variant="h4" className={ classes.title }>
              {content}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </HideOnScroll>
  );
}

ButtonAppBar.propTypes = {
  content: PropTypes.string.isRequired,
};
