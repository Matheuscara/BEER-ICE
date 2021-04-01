const magicNumber = {
  dez: 10,
};

function attTotalPrice(array, total) {
  const result = array.reduce((acumulador, element) => {
    const number = parseInt(element.totalPrice, [magicNumber, dez]);
    return acumulador + number;
  }, 0);
  total(result);
}

export default attTotalPrice;
