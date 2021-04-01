// React imports
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// Components

// Services

// Material-UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/api';
import { loadState } from '../services/localStorage';
import NavBarAdmin from '../components/menuNavBarAdmin';

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

// React Component Ddefinition
function Admin() {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'client') return history.push('/products');
  }, [history]);

  useEffect(() => {
    api.listAllOrdersAdmin()
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, []);

  // Material-Iu Renderizacao
  setTimeout(() => {
    setChecked(true);
  }, 300);

  return (

    <div>
      <NavBarAdmin content="Trybeer" />
      <div className={ `${classes.root} marginTop` }>
        <Typography style={ { textAlign: 'center' } } variant="h3" component="h2">
          Pedidos
        </Typography>
        {orders.map((order, index) => (
          <Grow in={ checked }>
            <Paper className={ `${classes.paper} ordersAdmin` } elevation={ 3 }>
              <Grid container spacing={ 3 }>
                <Grid item>
                  <ButtonBase className={ classes.number }>
                    <Link
                      to={ `/admin/orders/${order.id}` }
                      style={ { textDecoration: 'none' } }
                      key={ index }
                    >
                      <h1 style={ { color: 'gray' } }>{order.id}</h1>
                    </Link>
                  </ButtonBase>
                </Grid>
                <Grid item xs={ 12 } sm container>
                  <Grid item xs container direction="column" spacing={ 3 }>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        data-testid={ `${index}-order-number` }
                      >
                        {`Pedido ${order.id}`}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        data-testid={ `${index}-order-address` }
                      >
                        {`Endereço: ${order.delivery_address}, ${order.delivery_number}`}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={ (order.status === 'Pendente')
                          ? { color: 'red' } : { color: 'green' } }
                        data-testid={ `${index}-order-status` }
                      >
                        {order.status}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    data-testid={ `${index}-order-total-value` }
                  >
                    {`R$ ${order.total_price}`.replace('.', ',')}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grow>
        ))}
      </div>
    </div>

  );
}

export default Admin;
