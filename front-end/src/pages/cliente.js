import React, { useContext, useEffect, useState } from 'react';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// Componentes
import { useHistory } from 'react-router';
import NavBar from '../components/menuNavBar';
import context from '../Context/ContextAPI';
import ButtonAdd from '../components/buttonAdd';
import ButtonSub from '../components/buttonSub';
import MenuFooter from '../components/menuFooter';

// Servicos
import api from '../services/api';
import { loadState, saveState } from '../services/localStorage';

// CSS - Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
    maxWidth: 500,
    textAlign: 'center',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const magicNumber = {
  menosUm: -1,
};

function Cliente() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(context);
  const history = useHistory();

  // Renderizacao
  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    const storageCart = loadState(`${email}`);
    if (storageCart) return setCart(storageCart);
    return saveState(`${email}`, []);
  }, [history, setCart]);

  // Renderizacao
  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    saveState(`${email}`, cart);
  }, [cart, history]);

  // Renderizacao
  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  // Renderizacao
  useEffect(() => {
    api.listProducts()
      .then((productsList) => {
        setProducts(productsList.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Funcao alterar quantidade
  const prodQty = (tile) => {
    const idx = cart.findIndex((elem) => elem.name === tile.name);
    if (idx === magicNumber.menosUm) return '0';
    return `${cart[idx].quantity}`;
  };

  return (
    <div>
      <NavBar content="BEER - ICE" />
      <div className={ `${classes.root} marginTop ` }>
        {products.map((title, index) => (
          <Paper key={ index } elevation={ 3 } className={ classes.paper }>
            <Grid container spacing={ 2 }>
              <Grid item>
                <ButtonBase className={ classes.image }>
                  <img className={ classes.img } src={ title.url_image.replace(/ /g, '_') } alt="imageProduct" />
                </ButtonBase>
              </Grid>
              <Grid item xs={ 12 } sm container>
                <Grid item xs container direction="column" spacing={ 2 }>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {title.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {' '}
                      R$
                      {' '}
                      {title.price.replace('.', ',')}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ButtonSub product={ title } dataIndex={ index } />
                    <span data-testid={ `${index}-product-qtd` }>
                      {prodQty(title)}
                    </span>
                    <ButtonAdd product={ title } dataIndex={ index } />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </div>
      <MenuFooter />
    </div>
  );
}

export default Cliente;
