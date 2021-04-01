import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import context from '../Context/ContextAPI';

function ButtonAdd({ product, dataIndex }) {
  const { cart, setCart } = useContext(context);

  const addButtonOnCart = () => {
    const isCart = cart.some((prod) => prod.name === product.name);
    if (!isCart) {
      return setCart([...cart, { quantity: 1, totalPrice: product.price, ...product }]);
    }
    const isIndex = cart.findIndex((prod) => prod.name === product.name);
    const newCart = [...cart];
    newCart[isIndex].quantity += 1;
    newCart[isIndex].totalPrice = (newCart[isIndex].quantity * product.price).toFixed(2);
    setCart(newCart);
  };

  return (

    <IconButton
      color="primary"
      aria-label="add to shopping cart"
      onClick={ addButtonOnCart }
      data-testid={ `${dataIndex}-product-plus` }
    >
      <ExposurePlus1Icon />
    </IconButton>
  );
}

export default ButtonAdd;

ButtonAdd.propTypes = {
  product: PropTypes.object.isRequired,
  dataIndex: PropTypes.number.isRequired,
};
