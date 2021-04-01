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
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

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

export default function HamburguerFooter() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();

  // Renderizacao
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const prevOpen = React.useRef(open);

  // Redirecionar
  const handleRedirect = (event) => {
    switch (event) {
    case 'Devs deste projeto':
      history.push('/Devs');
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
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
      console.log('1');
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={ classes.root }>
      <div>
        <Button
          ref={ anchorRef }
          aria-controls={ open ? 'menu-list-grow' : undefined }
          aria-haspopup="true"
          onClick={ handleToggle }
          color="inherit"
          data-testid="top-hamburguer"
        >
          <SearchIcon />
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
                {
                  transformOrigin: placement === 'bottom'
                    ? 'center top' : 'center bottom',
              }
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
                    <MenuItem>
                      Buscar um Produto
                    </MenuItem>
                    <MenuItem>
                      <TextField
                        className={ classes.textInput }
                        type="text"
                        placeholder="Digite seu Produto"
                        id="standard-basic"
                        label="Produto"
                        variant="standard"
                      />
                    </MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
