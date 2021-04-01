// Service
import PropTypes from 'prop-types';

const validateEmailAndPassword = (userEmail, password) => {
  const regex = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;
  const passLength = 5;
  if (regex.test(userEmail) && password.length > passLength) {
    return false;
  }
  return true;
};

export default validateEmailAndPassword;

validateEmailAndPassword.propTypes = {
  userEmail: PropTypes.string.isRequired,
  password: PropTypes.number.isRequired,
};
