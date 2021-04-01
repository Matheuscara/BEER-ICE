import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';

// Material-Iu
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';

// Componentes
import NavBar from '../components/menuNavBar';

// Services
import api from '../services/api';
import { loadState } from '../services/localStorage';

// CSS - Material-IU
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(0),
    marginTop: 20,
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
  totalValue: {
    marginTop: 30,
  },
}));

function OrderDetails() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  // Renderizacao
  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
  }, [history]);

  // Api
  useEffect(() => {
    api.orderDetails(id)
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="marginTop">
      <NavBar data-testid="top-title" content="Detalhes" />
      <Grow in={ checked }>
        <Paper elevation={ 0 } className={ `${classes.paper} marginTop` }>
          <Typography className={ classes.totalValue } align="center" data-testid="order-date" gutterBottom variant="h5">
            {`Pedido ${id} - Data: ${moment(order.saleDate).format('DD/MM')}`}
          </Typography>
        </Paper>
      </Grow>
      {order.map((product, index) => (
        <Grow in={ checked }>
          <Paper elevation={ 3 } className={ classes.paper }>
            <Grid container spacing={ 2 }>
              <Grid item>
                <ButtonBase className={ classes.image }>
                  <img className={ classes.img } src={ product.imgUrl.replace(/ /g, '_') } alt="imageProduct" />
                </ButtonBase>
              </Grid>
              <Grid item xs={ 12 } sm container>
                <Grid item xs container direction="column" spacing={ 2 }>
                  <Grid item xs>
                    <Typography data-testid={ `${index}-product-name` } gutterBottom variant="h6">
                      {product.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography data-testid={ `${index}-product-total-value` } variant="h6">
                      {`R$ ${(product.totalPrice).toFixed(2).toString().replace('.', ',')}`}
                    </Typography>
                    <Typography data-testid={ `${index}-product-qtd` } variant="subtitle2">
                      {product.productQty}
                      {' '}
                      x
                      {`(R$ ${product.price.replace('.', ',')} un)`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      ))}
      <Grow in={ checked }>
        <Paper elevation={ 0 } className={ classes.paper }>
          <Typography className={ classes.totalValue } align="center" data-testid="order-total-value" gutterBottom variant="h5">
            {`Total: R$
            ${order.reduce((acc, value) => acc + value.totalPrice, 0)
      .toFixed(2).replace('.', ',')}`}
          </Typography>
        </Paper>
      </Grow>

    </div>
  );
}

export default OrderDetails;
