export function verifyContainsText(text) {
  cy.contains(text).should('be.visible');
}

export function verifyElementContainsText(element, text) {
  cy.get(element).contains(text);
}

export function verifyElementContainsAttribute(element, attribute) {
  cy.get(element).should('have.attr', attribute)
}

export function verifyElementNotContainsAttribute(element, attribute) {
  cy.get(element).should('not.have.attr', attribute)
}

export function verifyNotContainsText(text) {
  cy.contains(text).should('not.exist')
}

export function clickLinkOrText(text) {
  cy.contains(text).first().click();
}

export function clickLastElement(element) {
  cy.get(element).last().click();
}

export function clickButton(element) {
  cy.get(element).click();
}

export function checkElement(element){
  cy.get(element).check();
}

export function verifyElementVisible(element) {
  cy.get(element).should('to.be.visible');
}

export function verifyElementNotVisible(element) {
  cy.get(element).should('not.be.visible');
}

export function verifyElementIsDisable(element) {
  cy.get(element).should('be.disabled');
}

export function verifyContainsUrl(url) {
  cy.url().should('includes', url);
}

export function getValueInput(element, text) {
  cy.get(element).should('have.value', text);
}

export function insertText(element, text) {
  cy.get(element).type(text);
}

export function login(email, password) {
  insertText('[data-testid="email-input"]', email);
  insertText('[data-testid="password-input"]', password);
  clickButton('[data-testid="signin-btn"]');
}

export function accessOrdersClient(){
  clickButton('[data-testid="top-hamburguer"]');
  clickButton('[data-testid="side-menu-item-my-orders"]');
}

export function accessOrdersAdmin(){
  clickButton('[data-testid="side-menu-item-orders"]');
}

export function accessProfileClient(){
  clickButton('[data-testid="top-hamburguer"]');
  clickButton('[data-testid="side-menu-item-my-profile"]');
}

export function loginAndAddProductInCart(email, password) {
  insertText('[data-testid="email-input"]', email);
  insertText('[data-testid="password-input"]', password);
  clickButton('[data-testid="signin-btn"]');
  clickButton('[data-testid="0-product-plus"]');
  clickButton('[data-testid="checkout-bottom-btn"]');
}

export function buyOneProduct() {
  clickButton('[data-testid="0-product-plus"]');
  clickButton('[data-testid="checkout-bottom-btn"]');
  insertText('[data-testid="checkout-street-input"]', 'Rua da pinga');
  insertText('[data-testid="checkout-house-number-input"]', '2');
  clickButton('[data-testid="checkout-finish-btn"]');
  verifyContainsText('Compra realizada com sucesso!');
}

export function loginClientAndBuyProduct(){
  login(Cypress.env('login'), Cypress.env('password'));
  buyOneProduct();
}

export function buyProducts() {
  clickButton('[data-testid="0-product-plus"]');
  clickButton('[data-testid="0-product-plus"]');
  clickButton('[data-testid="checkout-bottom-btn"]');
  insertText('[data-testid="checkout-street-input"]', 'Rua da pinga');
  insertText('[data-testid="checkout-house-number-input"]', '2');
  clickButton('[data-testid="checkout-finish-btn"]');
  verifyContainsText('Compra realizada com sucesso!');
}

export function logout() {
  clickButton('[data-testid="top-hamburguer"]');
  clickButton('[data-testid="side-menu-item-logout"]');
}

export function accessHomeAndLogin(){
  cy.visit(Cypress.config().baseUrl);
  login(Cypress.env('login'), Cypress.env('password'));
}

export function getDateAndMonth() {
  const date = new Date();
  const dateAndMonth = `${("0" + (date.getDate())).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}`
  return dateAndMonth;
}

export function createDataBase() {
  return "CREATE DATABASE IF NOT EXISTS Trybeer;";
}

export function createTableUsers() {
  const createTableUsers = `CREATE TABLE Trybeer.users (
                              id INT NOT NULL AUTO_INCREMENT,
                                name VARCHAR(100) NOT NULL,
                                email VARCHAR(100) NOT NULL,
                                password VARCHAR(20) NOT NULL,
                                role VARCHAR(20) NOT NULL,
                                PRIMARY KEY (id),
                                UNIQUE KEY \`email_un\` (email));`
  return createTableUsers;
}

export function createTableSales() {
  const createTableSales = `CREATE TABLE Trybeer.sales (
                              id INT NOT NULL AUTO_INCREMENT,
                              user_id INT NOT NULL,
                              total_price DECIMAL(9,2) NOT NULL,
	                            delivery_address VARCHAR(100) NOT NULL,
	                            delivery_number VARCHAR(50) NOT NULL,
	                            sale_date DATETIME NOT NULL,
                              status VARCHAR(50) NOT NULL,
                              PRIMARY KEY(id),
                              FOREIGN KEY (user_id) REFERENCES users(id));`
  return createTableSales;
}

export function createTableProducts() {
  const createTableProducts = `CREATE TABLE Trybeer.products (
                              id INT NOT NULL AUTO_INCREMENT,
                              name VARCHAR(100) NOT NULL,
                              price DECIMAL(4,2) NOT NULL,
                              url_image VARCHAR(200) NOT NULL DEFAULT '',
                              PRIMARY KEY(id),
                              UNIQUE KEY \`name\`(name));`
  return createTableProducts;
}

export function createTableSalesProducts() {
  const createTableSalesProducts = `CREATE TABLE Trybeer.sales_products (
                                      sale_id INT NOT NULL,
                                      product_id INT NOT NULL,
                                      quantity VARCHAR(10) NOT NULL,
                                      PRIMARY KEY(sale_id, product_id),
                                      FOREIGN KEY(sale_id) REFERENCES sales(id),
                                      FOREIGN KEY(product_id) REFERENCES products(id));`
  return createTableSalesProducts;
}

export function insertUsers(){
  const insertUsers = `INSERT INTO Trybeer.users (id, name, email, password, role)
                        VALUES
                          ('1', 'Tryber Admin', 'tryber@trybe.com.br', '123456', 'administrator'),
                          ('2', 'Bruno Silva Batista', 'bruno.batista@gmail.com', '12345678', 'client');`
  return insertUsers;
}

export function insertProducts(){
  const insertProducts = `INSERT INTO Trybeer.products (id, name, price, url_image)
                        VALUES
                          ('1','Skol Lata 250ml',2.20, 'http://localhost:3001/images/Skol Lata 350ml.jpg'),
                          ('2','Heineken 600ml',7.50, 'http://localhost:3001/images/Heineken 600ml.jpg'),
                          ('3','Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg'),
                          ('4','Brahma 600ml',7.50, 'http://localhost:3001/images/Brahma 600ml.jpg'),
                          ('5','Skol 269ml',2.19, 'http://localhost:3001/images/Skol 269ml.jpg'),
                          ('6','Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/Skol Beats Senses 313ml.jpg'),
                          ('7','Becks 330ml',4.99, 'http://localhost:3001/images/Becks 330ml.jpg'),
                          ('8','Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/Brahma Duplo Malte 350ml.jpg'),
                          ('9','Becks 600ml',8.89, 'http://localhost:3001/images/Becks 600ml.jpg'),
                          ('10','Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/Skol Beats Senses 269ml.jpg'),
                          ('11','Stella Artois 275ml',3.49, 'http://localhost:3001/images/Stella Artois 275ml.jpg');`
  return insertProducts;
}

export function createAndInsertsDataBase() {
  cy.task('queryDb', 'DROP DATABASE IF EXISTS Trybeer;');
  cy.task('queryDb', createDataBase());
  cy.task('queryDb', 'USE Trybeer;');
  cy.task('queryDb', createTableUsers());
  cy.task('queryDb', createTableSales());
  cy.task('queryDb', createTableProducts());
  cy.task('queryDb', createTableSalesProducts());
  cy.task('queryDb', insertUsers());
  cy.task('queryDb', insertProducts());
}

export function dropAndTruncateDataBase(){
  cy.task('queryDb', 'DELETE FROM Trybeer.sales_products;');
  cy.task('queryDb', 'ALTER TABLE Trybeer.sales_products AUTO_INCREMENT = 1;');
  cy.task('queryDb', 'DELETE FROM Trybeer.sales;');
  cy.task('queryDb', 'ALTER TABLE Trybeer.sales AUTO_INCREMENT = 1;');
  cy.task('queryDb', 'DELETE FROM Trybeer.products;');
  cy.task('queryDb', 'ALTER TABLE Trybeer.products AUTO_INCREMENT = 1;');
  cy.task('queryDb', 'DELETE FROM Trybeer.users;');
  cy.task('queryDb', 'ALTER TABLE Trybeer.users AUTO_INCREMENT = 1;');
}
