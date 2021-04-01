import {
  clickButton,
  verifyContainsUrl,
  verifyElementVisible,
  login,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementContainsText,
  logout,
  loginClientAndBuyProduct,
  accessOrdersAdmin,
  verifyElementNotVisible,
} from '../actions/actionBase';
    
describe('Criar tela de detalhes pedidos do admininstrador', () => {
  beforeEach(() => {
    createAndInsertsDataBase();
    cy.visit(Cypress.config().baseUrl);
    loginClientAndBuyProduct(),
    logout();
  });
  
  afterEach(() => {
    dropAndTruncateDataBase();
  }) 
 
  it('Será validado que é possível acessar a tela do detalhe do pedido do administrador', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders/1`);
  });
  
  it('Será validado que contém os atributos descritos no protótipo', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementVisible('[data-testid="order-number"]')
    verifyElementVisible('[data-testid="order-status"]');
    verifyElementVisible('[data-testid="0-product-name"]');
    verifyElementVisible('[data-testid="0-product-qtd"]');
    verifyElementVisible('[data-testid="0-product-total-value"]');
    verifyElementVisible('[data-testid="0-order-unit-price"]');
    verifyElementVisible('[data-testid="order-total-value"]');
  });
  
  it('Será validado que o pedido contém nome e status do pedido', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]', 'Pedido 1');
    verifyElementContainsText('[data-testid="order-status"]', 'Pendente');
  });
  
  it('Será validado que o pedido contém todos os detalhes do pedido', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]', 'Pedido 1');
    verifyElementContainsText('[data-testid="order-status"]', 'Pendente');
    verifyElementContainsText('[data-testid="0-product-name"]', 'Skol Lata 250ml');
    verifyElementContainsText('[data-testid="0-product-qtd"]', '1');
    verifyElementContainsText('[data-testid="0-product-total-value"]', 'R$ 2,20');
    verifyElementContainsText('[data-testid="0-order-unit-price"]', '(R$ 2,20)');
    verifyElementContainsText('[data-testid="order-total-value"]', 'R$ 2,20');
  });
  
  it('Será validado que o pedido com status pendente irá apresentar na tela o botão "Marcar como entregue"', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]', 'Pedido 1');
    verifyElementContainsText('[data-testid="order-status"]', 'Pendente');
    verifyElementVisible('[data-testid="mark-as-delivered-btn"]');
    verifyElementContainsText('[data-testid="mark-as-delivered-btn"]', 'Marcar como entregue');
  });

  it('Será validado que o pedido ao marcar como entregue o status mude para entregue" e o botão nao esteja mais visível', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]', 'Pedido 1');
    verifyElementContainsText('[data-testid="order-status"]', 'Pendente');
    clickButton('[data-testid="mark-as-delivered-btn"]');
    verifyElementContainsText('[data-testid="order-status"]', 'Entregue');
    verifyElementNotVisible('[data-testid="mark-as-delivered-btn"]');
  });

  it('Será validado que o pedido ao marcar como entregue o status mude para entregue" na tela de pedidos admin', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    accessOrdersAdmin();
    clickButton('[data-testid="0-order-number"]');
    verifyElementContainsText('[data-testid="order-number"]', 'Pedido 1');
    verifyElementContainsText('[data-testid="order-status"]', 'Pendente');
    clickButton('[data-testid="mark-as-delivered-btn"]');
    verifyElementContainsText('[data-testid="order-status"]', 'Entregue');
    verifyElementNotVisible('[data-testid="mark-as-delivered-btn"]');
    clickButton('[data-testid="side-menu-item-orders"]');
    verifyElementContainsText('[data-testid="0-order-status"]', 'Entregue');
  });
});
