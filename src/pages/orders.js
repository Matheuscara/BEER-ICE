import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Componentes
import { useHistory } from 'react-router';
import NavBar from '../components/menuNavBar';

// Services
import { loadState } from '../services/localStorage';
import api from '../services/api';

// CSS Material-IU
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  // Renderizar
  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const user = loadState('user');
    api.listAllOrders(user.email)
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, [history]);

  return (
    <div>
      <NavBar content="Meus Pedidos" />
      {orders.map((order, index) => (
        <Card key={ index } className={ `${classes.root} orders-${index} ` }>
          <CardContent>
            <Typography data-testid={ `${index}-order-number` } variant="h5" component="h2">
              Pedido
              {' '}
              {order.id}
              {' '}
              -
              {moment(order.sale_date).format('DD/MM')}
            </Typography>

            <Typography variant="body2" component="p">
              Rua:

              {order.delivery_address}
              <br />
              Numero:
              {' '}
              {order.delivery_number}
              <br />
            </Typography>

            <Typography className={ classes.title } color="primary" gutterBottom>
              {order.status}
            </Typography>

            <Typography data-testid={ `${index}-order-total-value` } variant="body1" component="p">
              R$
              {' '}
              {(order.total_price).replace('.', ',')}
            </Typography>
          </CardContent>

          <CardActions>
            <Link className="buttomStyleNone" to={ `/orders/${order.id}` } key={ index }>
              <Button variant="contained" color="primary" size="medium">Veja Mais</Button>
            </Link>
          </CardActions>

        </Card>
      ))}
    </div>
  );
}

export default Orders;
