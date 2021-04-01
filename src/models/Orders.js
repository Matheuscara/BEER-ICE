const connection = require('./connection');

const listAllOrders = async (userId) => {
  const [orders] = await connection.execute('SELECT * from sales WHERE user_id = ?', [userId]);
  return orders;
};

const getByIdOrder = async (id) => {
  const [order] = await connection.execute('SELECT * from sales WHERE id = ?', [id]);
  return order;
};

const getByIdDetails = async (id) => {
  const order = await connection.execute(
    `SELECT
      sales.id AS id,
      sales.sale_date AS saleDate,
      products.name AS name,
      products.url_image AS imgUrl,
      sales_products.product_id AS productId,
      sales_products.quantity AS productQty,
      products.price AS price,
      ROUND(products.price * sales_products.quantity, 2) AS totalPrice
    FROM sales
    JOIN sales_products
    ON sales_products.sale_id = sales.id
    JOIN products
    ON products.id = sales_products.product_id
    WHERE sales.id = ?`, [id],
  );

  return order;
};

const listAllOrdersAdmin = async () => {
  const [orders] = await connection.execute('SELECT * from sales');
  return orders;
};

const updateStatusProduct = async (id) => {
  const [{ changedRows }] = await connection.execute(
    'UPDATE sales SET status = ? WHERE id = ?',
    ['Entregue', id],
  );
  return changedRows;
};

module.exports = {
  listAllOrders,
  getByIdOrder,
  getByIdDetails,
  listAllOrdersAdmin,
  updateStatusProduct,
};