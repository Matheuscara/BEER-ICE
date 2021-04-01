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
} from '../actions/actionBase';
  
describe('Criar tela de meus pedidos', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Será validado que é possível acessar a tela de meus pedidos', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    verifyContainsUrl(`${Cypress.config().baseUrl}/orders`);
  });

  it('Será validado que contém os atributos descritos no protótipo', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    verifyElementVisible('[data-testid="top-title"]');
    verifyElementVisible('[data-testid="0-order-number"]');
    verifyElementVisible('[data-testid="0-order-date"]');
    verifyElementVisible('[data-testid="0-order-total-value"]');
  });

  it('Será validado que é possível ver que o produto tem quantidade, nome, valor total e a data da compra', () => {
    const date = getDateAndMonth();
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    verifyElementVisible('[data-testid="top-title"]');
    verifyElementContainsText('[data-testid="top-title"]','Meus Pedidos');
    verifyElementContainsText('[data-testid="0-order-number"]','Pedido 1');
    verifyElementContainsText('[data-testid="0-order-date"]', date);
    verifyElementContainsText('[data-testid="0-order-total-value"]','R$ 2,20');
  });

  it('Será validado que é possível clicar no card e ser redirecionado para tela do detalhe do produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    buyOneProduct();
    accessOrdersClient();
    clickButton('[data-testid="0-order-number"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/orders/1`);
  });

  it('Será validado que não é possível acessar a tela de meus pedidos sem estar logado e será redirecionado para tela de login', () => {
    cy.visit(`${Cypress.config().baseUrl}/orders`);
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
