import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Componentes
import NavBarAdmin from '../components/menuNavBarAdmin';
import api from '../services/api';
import { loadState } from '../services/localStorage';

// CSS - Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    alignItems: 'center',
    margin: 'auto',
    marginTop: 15,
    minWidth: 1000,
    '@media (max-width: 1250px)': {
      minWidth: 'auto',
      padding: 'none',
    },
  },
  number: {
    width: 128,
    height: 128,
    fontSize: 30,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Admin() {
  const [checked, setChecked] = React.useState(false);

  const classes = useStyles();
  const [order, setOrder] = useState({});
  const [send, setSend] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'client') return history.push('/products');
  }, [history]);

  useEffect(() => {
    api.getByIdOrderAdmin(id)
      .then((response) => setOrder(response.data))
      .catch((err) => console.log(err));
  }, [id, send]);

  useEffect(() => {
    api.orderDetails(id)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const sendProduct = async () => {
    api.updateStatusProduct(id)
      .then((response) => {
        console.log(response);
        setSend(true);
      })
      .catch((err) => console.log(err));
  };

  const isSend = () => {
    if (order.status === 'Pendente') {
      return (
        <Button
          style={ { margin: '15px' } }
          className={ classes.paper }
          type="button"
          size="large"
          color="primary"
          data-testid="mark-as-delivered-btn"
          onClick={ sendProduct }
          variant="outlined"
        >
          Marcar como entregue
        </Button>
      );
    }
  };

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  return (
    <div>
      <NavBarAdmin content="Trybeer" />
      <div className={ `${classes.root} marginTop` }>
        <Grid container style={ { alignContent: 'center' } } direction="column" spacing={ 2 }>
          <Typography data-testid="order-status" style={ { textAlign: 'center' } } variant="h3" component="h2">
            {order.status}
          </Typography>
          <Paper className={ classes.paper } elevation={ 3 }>
            {products.map((product, index) => (
              <Grow in={ checked }>

                <Grid container spacing={ 0 }>
                  <Grid item style={ { maxHeight: 100 } }>
                    <ButtonBase className={ classes.number }>
                      <img
                        className={ classes.image }
                        src={ product.imgUrl.replace(/ /g, '_') }
                        data-testid={ `${index}-product-img` }
                        alt={ product.name }
                        style={ { maxHeight: 80 } }
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={ 12 } sm container>
                    <Grid item xs container direction="column" spacing={ 0 }>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          data-testid={ `${index}-order-number` }
                        >
                          <h3 data-testid={ `${index}-product-qtd` }>
                            {`${product.productQty}x - `}
                            <span data-testid={ `${index}-product-name` }>{product.name}</span>
                          </h3>
                        </Typography>
                        <Typography
                          variant="body2"
                          gutterBottom
                          data-testid={ `${index}-order-address` }
                        >
                          <h4 data-testid={ `${index}-product-total-value` }>
                            R$
                            {` ${product.totalPrice.toFixed(2)} `.replace('.', ',')}
                            <span data-testid={ `${index}-order-unit-price` }>
                              {`(R$ ${product.price})`.replace('.', ',')}
                            </span>
                          </h4>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grow>
            ))}
          </Paper>
          <Typography data-testid="order-total-value" style={ { textAlign: 'center', margin: '20px' } } variant="h3" component="h2">
            {`Total: R$ ${order.total_price}`.replace('.', ',')}
          </Typography>

          {isSend()}
        </Grid>
      </div>
    </div>
  );
}

export default Admin;
