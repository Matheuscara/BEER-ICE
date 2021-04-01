import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import context from '../Context/ContextAPI';

function ButtonSub({ product, dataIndex }) {
  const { cart, setCart } = useContext(context);

  const subButtonOnCart = () => {
    const isCart = cart.some((prod) => prod.name === product.name);
    if (isCart) {
      const isIndex = cart.findIndex((prod) => prod.name === product.name);
      const newCart = [...cart];
      if (cart[isIndex].quantity > 1) {
        newCart[isIndex].quantity -= 1;

        newCart[isIndex]
          .totalPrice = (newCart[isIndex].quantity * product.price).toFixed(2);

        setCart(newCart);
      } else {
        const newerCart = newCart.filter((elem) => elem.name !== product.name);
        return setCart(newerCart);
      }
    }
  };

  return (
    <IconButton
      color="primary"
      aria-label="add to shopping cart"
      onClick={ subButtonOnCart }
      data-testid={ `${dataIndex}-product-minus` }
    >
      <ExposureNeg1Icon />
    </IconButton>
  );
}

export default ButtonSub;

ButtonSub.propTypes = {
  product: PropTypes.object.isRequired,
  dataIndex: PropTypes.number.isRequired,
};
