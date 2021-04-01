import React from 'react';

// Material-IU
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

// Service
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    width: '35ch',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 3,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function RedirectPage({ rota, id, conteudo }) {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(rota);
  }

  setTimeout(() => {
    setChecked(true);
  }, 1000);

  return (
    <Grow in={ checked }>
      <BootstrapButton
        type="button"
        data-testid={ id }
        onClick={ handleClick }
        variant="contained"
        color="primary"
        disableRipple
        className={ classes.margin }
        // style={{
        //   left: '3%',
        // }}
      >
        { conteudo }
      </BootstrapButton>
    </Grow>
  );
}

export default RedirectPage;

RedirectPage.propTypes = {
  id: PropTypes.string.isRequired,
  rota: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
};
