import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Mateiral-IU
import IconButton from '@material-ui/core/IconButton';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

// Componentes
import context from '../Context/ContextAPI';

// Services
import { loadState, saveState } from '../services/localStorage';

function CheckoutButtonRemove({ productIndex, productId }) {
  const { cart, setCart, price, setPrice } = useContext(context);
  const [emailUser, setEmailUser] = useState('');

  // Renderizacao
  useEffect(() => {
    const loadUser = loadState('user');
    setEmailUser(loadUser.email);
    const cartStorage = loadState(loadUser.email);
    setCart(cartStorage);
  }, [setCart]);

  // Remove o Producto do carrinho
  const removeCheckout = () => {
    const newTotalValue = (price - cart[productIndex].totalPrice).toFixed(2);
    setPrice(newTotalValue);
    saveState(`${emailUser}_price`, newTotalValue);
    const updateCart = cart.filter((element) => element.id !== productId);
    setCart(updateCart);
    saveState(`${emailUser}`, updateCart);
  };

  return (
    <IconButton data-testid="0-removal-button" onClick={ removeCheckout } color="primary" aria-label="upload picture" component="span">
      <RemoveShoppingCartIcon />
    </IconButton>
  );
}
export default CheckoutButtonRemove;

CheckoutButtonRemove.propTypes = {
  productIndex: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};
