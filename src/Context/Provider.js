import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const TrybeerProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState('0,00');
  const [street, setStreet] = useState('');
  const [numberHouse, setNumberHouse] = useState('');

  const contextState = {
    cart,
    setCart,
    price,
    setPrice,
    street,
    setStreet,
    numberHouse,
    setNumberHouse,
  };

  return (
    <ContextAPI.Provider value={ contextState }>
      { children }
    </ContextAPI.Provider>
  );
};

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrybeerProvider;
