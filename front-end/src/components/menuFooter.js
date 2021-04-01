import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

// Componentes
import { loadState, saveState } from '../services/localStorage';
import sumTotal from '../resources/sumTotal';
import context from '../Context/ContextAPI';
import HamburguerFooter from './hamburguerFooter';
// import SearchProduct from './searchProduct';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function MenuFooter() {
  const classes = useStyles();
  const { setPrice, cart } = useContext(context);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const allValues = cart.map((elem) => parseFloat(elem.totalPrice));
  const totalSum = sumTotal(allValues).toFixed(2);

  // Renderizacao
  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    const storageTotal = loadState(`${email}_price`);
    if (storageTotal !== 0) {
      return setPrice(storageTotal);
    }
    return saveState(`${email}_price`, 0);
  }, [history, setPrice]);

  // Renderizacao
  useEffect(() => {
    setPrice(totalSum);
    if (totalSum > 0) return setDisabled(false);
    if (totalSum === '0.00') return setDisabled(true);
    const { email } = loadState('user');
    saveState(`${email}_price`, totalSum);
  }, [setPrice, totalSum]);

  const checkoutButton = () => {
    history.push('/checkout');
  };

  return (
    <div>
      <Paper square className={ classes.paper } />
      <AppBar position="fixed" buttom="0" color="primary" className={ `${classes.appBar} footerCliente` }>
        <Toolbar>
          <HamburguerFooter />
          {/* <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <SearchProduct/>
          </Fab> */}
          <div className={ classes.grow } />
          <IconButton
            disabled={ disabled }
            edge="start"
            color="inherit"
            aria-label="open drawer"
            data-testid="checkout-bottom-btn"
            onClick={ checkoutButton }
          >
            <LocalGroceryStoreIcon />
            <span
              data-testid="checkout-bottom-btn-value"
            >
              {' '}
              {` R$ ${totalSum.replace('.', ',')}`}
            </span>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
