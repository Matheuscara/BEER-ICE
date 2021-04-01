import React from 'react';

// Material-IU
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

// Componentes
import { useHistory } from 'react-router';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {

    zIndex: 99,
    marginRight: theme.spacing(2),
  },
}));

export default function Hamburguer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();

  // Renderizacao
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Redirecionar
  const handleRedirect = (event) => {
    switch (event) {
    case 'Produtos':
      history.push('/products');
      break;
    case 'Meus Pedidos':
      history.push('/orders');
      break;
    case 'Meu Perfil':
      history.push('/profile');
      break;
    case 'Sair':
      history.push('/login');
      break;
    default:
      break;
    }
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // Open Hamburguer
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // Material-Iu
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={ classes.root }>

      <Button
        ref={ anchorRef }
        aria-controls={ open ? 'menu-list-grow' : undefined }
        aria-haspopup="true"
        onClick={ handleToggle }
        color="inherit"
        data-testid="top-hamburguer"
      >
        <MenuIcon />
      </Button>
      <Popper
        open={ open }
        anchorEl={ anchorRef.current }
        role={ undefined }
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            { ...TransitionProps }
            style={
              { transformOrigin: placement === 'bottom'
                ? 'center top' : 'center bottom' }
            }
          >
            <Paper>
              <ClickAwayListener onClickAway={ handleRedirect }>
                <MenuList
                  className="side-menu-container"
                  autoFocusItem={ open }
                  id="menu-list-grow"
                  onKeyDown={ handleListKeyDown }
                >

                  <MenuItem
                    data-testid="side-menu-item-products"
                    onClick={ () => handleRedirect('Produtos') }
                  >
                    Produtos
                  </MenuItem>

                  <MenuItem
                    data-testid="side-menu-item-my-orders"
                    onClick={ () => handleRedirect('Meus Pedidos') }
                  >
                    Meus Pedidos
                  </MenuItem>

                  <MenuItem
                    data-testid="side-menu-item-my-profile"
                    onClick={ () => handleRedirect('Meu Perfil') }
                  >
                    Meu Perfil
                  </MenuItem>

                  <MenuItem
                    data-testid="side-menu-item-logout"
                    onClick={ () => handleRedirect('Sair') }
                  >
                    Sair
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
