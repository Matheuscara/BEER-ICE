import {
  insertText,
  clickButton,
  verifyContainsUrl,
  verifyContainsText,
  verifyElementVisible,
  login,
  verifyElementIsDisable,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  loginAndAddProductInCart,
  verifyElementContainsText,
  verifyElementNotContainsAttribute,
} from '../actions/actionBase';

describe('Criar tela de checkout', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  })

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Será validado que é possível acessar a tela de checkout', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    verifyContainsUrl(`${Cypress.config().baseUrl}/checkout`);
  });

  it('Será validado que contém atributos descritos no protótipo', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    verifyElementVisible('[data-testid="top-title"]');
    verifyElementVisible('[data-testid="0-product-qtd-input"]');
    verifyElementVisible('[data-testid="0-product-name"]');
    verifyElementVisible('[data-testid="0-product-total-value"]');
    verifyElementVisible('[data-testid="0-product-unit-price"]');
    verifyElementVisible('[data-testid="0-removal-button"]');
    verifyElementVisible('[data-testid="order-total-value"]');
    verifyElementVisible('[data-testid="checkout-street-input"]');
    verifyElementVisible('[data-testid="checkout-house-number-input"]');
    verifyElementVisible('[data-testid="checkout-finish-btn"]');
  });

  it('Será validado que é possível ver que o produto tem quantidade, nome e valor total do produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    clickButton('[data-testid="0-product-plus"]');
    clickButton('[data-testid="checkout-bottom-btn"]');
    verifyElementContainsText('[data-testid="0-product-qtd-input"]','2');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="0-product-total-value"]','R$ 4,40');
    verifyElementContainsText('[data-testid="0-product-unit-price"]','(R$ 2,20 un)');
  });

  it('Será validado que é possível a lista mostrar o valor total do carrinho', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    clickButton('[data-testid="0-product-plus"]');
    clickButton('[data-testid="checkout-bottom-btn"]');
    verifyElementContainsText('[data-testid="0-product-qtd-input"]','2');
    verifyElementContainsText('[data-testid="order-total-value"]','R$ 4,40');
  });

  it('Será validado que é possível fazer refresh da tela e os dados continuarem na tela', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    verifyElementContainsText('[data-testid="0-product-qtd-input"]','1');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="0-product-total-value"]','R$ 2,20');
    verifyElementContainsText('[data-testid="0-product-unit-price"]','(R$ 2,20 un)');
    verifyElementContainsText('[data-testid="order-total-value"]','R$ 2,20');
    cy.reload();
    verifyElementContainsText('[data-testid="0-product-qtd-input"]','1');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="0-product-total-value"]','R$ 2,20');
    verifyElementContainsText('[data-testid="0-product-unit-price"]','(R$ 2,20 un)');
    verifyElementContainsText('[data-testid="order-total-value"]','R$ 2,20');
  });

  it('Será validado que é possível excluir um produto no checkout', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    verifyElementVisible('[data-testid="0-removal-button"]');
    clickButton('[data-testid="0-removal-button"]');
    verifyContainsText('Não há produtos no carrinho');
    verifyElementContainsText('[data-testid="order-total-value"]','R$ 0,00');
  });

  it('Será validado que é possível o botão finalizar pedido ficar habilitado apenas quando tiver produto maior que zero e rua e numero preenchidos', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    verifyElementIsDisable('[data-testid="checkout-finish-btn"]');
    insertText('[data-testid="checkout-street-input"]', 'Rua da pinga');
    insertText('[data-testid="checkout-house-number-input"]', '2');
    verifyElementNotContainsAttribute('[data-testid="checkout-finish-btn"]', 'disable');
  });

  it('Será validado que é possível fazer a compra de um produto e ao finalizar ver a mensagem de sucesso e  ser redirecionado para tela de produtos', () => {
    loginAndAddProductInCart(Cypress.env('login'), Cypress.env('password'));
    insertText('[data-testid="checkout-street-input"]', 'Rua da pinga');
    insertText('[data-testid="checkout-house-number-input"]', '2');
    clickButton('[data-testid="checkout-finish-btn"]');
    verifyContainsText('Compra realizada com sucesso!');
    verifyContainsUrl(`${Cypress.config().baseUrl}/products`);
  });

  it('Será validado que não é possível acessar o checkout sem estar logado e será redirecionado para tela de login', () => {
    cy.visit(`${Cypress.config().baseUrl}/checkout`);
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
