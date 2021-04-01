import React, { useContext, useEffect, useState } from 'react';

// Material-Iu
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import OpenSnackBar from '../components/OpenSnackBar';

// Componentes
import NavBar from '../components/menuNavBar';
import CheckoutButtonRemove from '../components/CheckOutButtonRemove';

// Services
import { loadState, saveState } from '../services/localStorage';
import sumTotal from '../resources/sumTotal';
import context from '../Context/ContextAPI';
import api from '../services/api';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `simple-tabpanel-${index}` }
      aria-labelledby={ `simple-tab-${index}` }
      { ...other }
    >
      {value === index && (
        <Box p={ 3 }>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// CSS - Material-IU
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
  textInput: {
    width: '25ch',
    justifyContent: 'center',
  },
}));

function Checkout() {
  const {
    cart,
    setCart,
    numberHouse,
    setNumberHouse,
    street,
    setStreet,
    price,
  } = useContext(context);
  const classes = useStyles();
  const [pagamento, setPagamento] = React.useState('female');
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailState, setEmailState] = useState('');
  const history = useHistory();
  const allValues = cart.map((elem) => parseFloat(elem.totalPrice));
  const totalSum = sumTotal(allValues).toFixed(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Redirecionamento caso nao esteja logado
  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  // Checando se esta Logado
  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    setEmailState(email);

    const storageCart = loadState(`${email}`);
    if (storageCart) return setCart(storageCart);
    return saveState(`${email}`, []);
  }, [history, setCart]);

  // Validate
  const validateCheckout = () => (
    (street.length > 0 && numberHouse.length > 0)
      ? setDisabled(false) : setDisabled(true)
  );

  // Validacao Chechout
  useEffect(() => {
    validateCheckout();
  }, [street, numberHouse, validateCheckout]);

  const finishSale = () => {
    const dataSale = {
      emailState,
      price,
      street,
      numberHouse,
      saleStatus: 'Pendente',
      cart,
    };
    api.createSale(dataSale)
      .then(() => {
        setHidden(false);

        saveState(emailState, []);
        setTimeout(() => {
          history.push('/products');
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  // Material-Iu Formulario Pagamento
  const formPagamento = (event) => {
    setPagamento(event.target.value);
  };

  return (
    <div>
      <NavBar content="Finalizar Pedido" />
      <AppBar className={ `${classes.root} carrinhoStyleContainer ` } position="static">
        <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
          <Tab label="PRODUTOS" { ...a11yProps(0) } />
          <Tab label="ENDEREÇO" { ...a11yProps(1) } />
          <Tab label="FINALIZAR COMPRA" { ...a11yProps(2) } />
        </Tabs>
      </AppBar>
      <TabPanel value={ value } index={ 0 }>
        {(cart.length > 0)
          ? cart.map(
            (product, index) => (
              <Grow in={ checked }>
                <Paper elevation={ 3 } className={ classes.paper }>
                  <Grid container spacing={ 2 }>
                    <Grid item>
                      <ButtonBase className={ classes.image }>
                        <img className={ classes.img } src={ product.url_image.replace(/ /g, '_') } alt="imageProduct" />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={ 12 } sm container>
                      <Grid item xs container direction="column" spacing={ 2 }>
                        <Grid item xs>
                          <Typography data-testid="0-product-name" gutterBottom variant="h6">
                            {product.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography data-testid="0-product-total-value" variant="h6">
                            {`R$ ${product.totalPrice.replace('.', ',')}`}
                          </Typography>
                          <Typography data-testid="0-product-qtd-input" variant="subtitle2">
                            {product.quantity}
                            {' '}
                            x
                            {`(R$ ${product.price.replace('.', ',')} un)`}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <CheckoutButtonRemove productId={ product.id } productIndex={ index } />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grow>
            ),
          )
          : <div>
            <Paper elevation={ 0 } className={ classes.paper }>
              <ShoppingCartIcon fontSize="small" />
              {' '}
              Carrinho vazio
            </Paper>
            </div>}
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        <Grow in={ checked }>
          <Typography variant="h5">
            Bairro
          </Typography>
        </Grow>

        <Grow in={ checked }>
          <Typography variant="h5">
            <TextField
              className={ classes.textInput }
              type="Bairro"
              placeholder="digite seu Bairro"
              id="Bairro"
              label="Bairro"
              variant="outlined"
            />
          </Typography>
        </Grow>

        <Grow in={ checked }>
          <Typography variant="h5">
            Rua:
          </Typography>
        </Grow>

        <Grow in={ checked }>
          <Typography variant="h5">
            <TextField
              className={ classes.textInput }
              type="Rua"
              data-testid="profile-name-input"
              placeholder="digite sua Rua"
              onChange={ (e) => setStreet(e.target.value) }
              id="endereco"
              label="Rua"
              variant="outlined"
            />
          </Typography>
        </Grow>
        <Grow in={ checked }>
          <Typography variant="h5">
            Número da casa:
          </Typography>
        </Grow>
        <Grow in={ checked }>
          <Typography variant="h5">
            <TextField
              className={ classes.textInput }
              type="Numero"
              data-testid="profile-name-input"
              placeholder="Digite o numero de sua residencia"
              onChange={ (e) => setNumberHouse(e.target.value) }
              id="numeroCasa"
              label="Digite o numero de sua residencia"
              variant="outlined"
            />
          </Typography>
        </Grow>
      </TabPanel>
      <TabPanel value={ value } index={ 2 }>
        <Typography component="span" variant="h5">
          <Grow in={ checked }>
            <span>Forma de Pagamento:</span>
          </Grow>
        </Typography>
        <Grow in={ checked }>
          <RadioGroup name="gender1" value={ pagamento } onClick={ formPagamento }>
            <FormControlLabel value="Debito" control={ <Radio /> } label="Debito" />
            <FormControlLabel value="Credito" control={ <Radio /> } label="Credito" />
            <FormControlLabel value="other" control={ <Radio /> } label="Other" />
          </RadioGroup>
        </Grow>
        <Grow in={ checked }>
          <h3>
            TOTAL
            {' '}
            {totalSum.replace('.', ',')}
          </h3>
        </Grow>
        <Grow in={ checked }>
          <Button
            className={ classes.buttom }
            type="button"
            size="large"
            color="primary"
            data-testid="checkout-finish-btn"
            onClick={ finishSale }
            disabled={ disabled }
            variant="outlined"
          >
            Finalizar Pedido
          </Button>
        </Grow>
      </TabPanel>
      {
        !hidden && <OpenSnackBar data="Compra efetuada com sucesso" />
      }
    </div>
  );
}

export default Checkout;
