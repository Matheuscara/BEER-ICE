const connection = require('./connection');

const createSale = async (
  userId, saleData,
  ) => {
    const { price, street, numberHouse, saleStatus, cart } = saleData;

  const sale = await connection.execute(
    `INSERT INTO sales (user_id, total_price, delivery_address,
    delivery_number, sale_date, status)VALUES (?, ?, ?, ?, SYSDATE(), ?)`,
    [userId, price, street, numberHouse, saleStatus],
  );

  cart.forEach(async (element) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [sale[0].insertId, element.id, element.quantity],
    );
  });

  return sale[0].insertId;
};

module.exports = {
  createSale,
};
