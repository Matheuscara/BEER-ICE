import {
  clickButton,
  verifyContainsUrl,
  verifyElementVisible,
  login,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementContainsText,
  getDateAndMonth,
  buyOneProduct,
  accessOrdersClient,
  buyProducts,
} from '../actions/actionBase';
  
describe('Criar tela de detalhes pedidos', () => {
  beforeEach(() => {
    createAndInsertsDataBase();
    cy.visit(Cypress.config().baseUrl);
  });

  afterEach(() => {
    dropAndTruncateDataBase();
  }) 

 it('Será validado que é possível acessar a tela do detalhe do pedido', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/orders/1`);
  });

  it('Será validado que contém os atributos descritos no protótipo', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyElementVisible('[data-testid="top-title"]');
    verifyElementVisible('[data-testid="order-number"]');
    verifyElementVisible('[data-testid="order-date"]');
    verifyElementVisible('[data-testid="0-product-qtd"]');
    verifyElementVisible('[data-testid="0-product-name"]');
    verifyElementVisible('[data-testid="0-product-total-value"]');
    verifyElementVisible('[data-testid="order-total-value"]');
  });

  it('Será validado que é possível ver que tem número do pedido e a data da compra', () => {
    const date = getDateAndMonth();
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]','Pedido 1');
    verifyElementContainsText('[data-testid="order-date"]', date);
  });

  it('Será validado que é possível ver que o produto tem quantidade, nome e valor total do produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="0-product-total-value"]','R$ 2,20');
  });

  it('Será validado que é possível ver o valor total do pedido', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyProducts();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','2');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="order-total-value"]','R$ 4,40');
  });

  it('Será validado que não é possível acessar a tela de meus pedidos sem estar logado e será redirecionado para tela de login', () => {
    cy.visit(`${Cypress.config().baseUrl}/orders/1`);
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
