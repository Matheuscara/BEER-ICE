import {
  verifyElementVisible,
  login,
  clickButton,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementContainsText,
  verifyContainsUrl,
  verifyElementIsDisable,
} from '../actions/actionBase';

describe('Criar tela de produtos', () => {
  before(() => {
    createAndInsertsDataBase();
  });

  after(() => {
    dropAndTruncateDataBase();
  })

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Será validado que existe um produto na tela de produtos', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    verifyElementVisible('[data-testid="0-product-price"]');
    verifyElementContainsText('[data-testid="0-product-price"]','R$ 2,20');
    verifyElementVisible('[data-testid="0-product-img"]');
    verifyElementVisible('[data-testid="0-product-name"]');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementVisible('[data-testid="0-product-minus"]');
    verifyElementVisible('[data-testid="0-product-qtd"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','0');
    verifyElementVisible('[data-testid="0-product-plus"]');
  });

  it('Será validado que existe todos os produtos na tela de produtos', () => {
    let nomeProdutos= ['Skol Lata 250ml', 'Heineken 600ml', 'Antarctica Pilsen 300ml', 'Brahma 600ml',
                       'Skol 269ml', 'Skol Beats Senses 313ml', 'Becks 330ml', 'Brahma Duplo Malte 350ml',
                       'Becks 600ml', 'Skol Beats Senses 269ml', 'Stella Artois 275ml'];
    let valorProdutos= ['R$ 2,20', 'R$ 7,50', 'R$ 2,49', '7,50', '2,19', 'R$ 4,49',
                        '4,99', 'R$ 2,79', '8,89', '3,57', '3,49'];
    login(Cypress.env('login'), Cypress.env('password'));

    for(var i = 0; i < 11; i++){
      cy.get(`[data-testid="${i}-product-price"]`).contains(valorProdutos[i]);
      verifyElementVisible(`[data-testid="${i}-product-img"]`);
      cy.get(`[data-testid="${i}-product-name"]`).should('have.text', nomeProdutos[i]);
      verifyElementVisible(`[data-testid="${i}-product-minus"]`);
      cy.get(`[data-testid="${i}-product-qtd"]`).should('have.text', '0');
      verifyElementVisible(`[data-testid="${i}-product-plus"]`);
    }
  });

  it('Será validado que é possíve clicar no botão "+" e atualizar o produto para 1', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
  });

  it('Será validado que é possível clicar no botão "-" e atualizar o produto para 0', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
    clickButton('[data-testid="0-product-minus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','0');
  });

  it('Será validado que não é possível clicar no botão "-" e atualizar o produto para menor que zero', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    clickButton('[data-testid="0-product-minus"]');
    clickButton('[data-testid="0-product-minus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','0');
  });

  it('Será validado que é possível visualizar o botão "Ver Carrinho"', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    verifyElementVisible('[data-testid="checkout-bottom-btn"]');
    verifyElementContainsText('[data-testid="checkout-bottom-btn"]', 'Ver Carrinho');
    verifyElementContainsText('[data-testid="checkout-bottom-btn-value"]', 'R$ 0,00');
  });

  it('Será validado que é possível atualizar o valor do carrinho ao adicionar um produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
    verifyElementContainsText('[data-testid="checkout-bottom-btn"]', 'Ver Carrinho');
    verifyElementContainsText('[data-testid="checkout-bottom-btn-value"]', 'R$ 2,20');
  });

  it('Será validado que é possível atualizar o valor do carrinho ao remover um produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
    clickButton('[data-testid="0-product-minus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','0');
    verifyElementContainsText('[data-testid="checkout-bottom-btn"]', 'Ver Carrinho');
    verifyElementContainsText('[data-testid="checkout-bottom-btn-value"]', 'R$ 0,00');
  });

  it('Será validado que ao atualizar a tela continuará na tela de produtos e carrinho com o mesmo valor', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    clickButton('[data-testid="0-product-plus"]');
    cy.reload();
    verifyElementContainsText('[data-testid="top-title"]','TryBeer');
    verifyElementContainsText('[data-testid="0-product-price"]','R$ 2,20');
    verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
    verifyElementContainsText('[data-testid="checkout-bottom-btn-value"]', 'R$ 2,20');
  });

  it('Será validado que é possível adicionar um produto e clicar no botão "Ver Carrinho" e ser redirecionado para tela de carrinho', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    cy.visit(`${Cypress.config().baseUrl}/products`);
    clickButton('[data-testid="0-product-plus"]');
    verifyElementContainsText('[data-testid="0-product-qtd"]','1');
    clickButton('[data-testid="checkout-bottom-btn"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/checkout`);
  });

  it('Será validado que o botão "Ver Carrinho" fique desabilitado caso não adicione nenhum produto', () => {
    login(Cypress.env('login'), Cypress.env('password'));
    cy.visit(`${Cypress.config().baseUrl}/products`);
    verifyElementIsDisable('[data-testid="checkout-bottom-btn"]');
  });

  it('Será validado que não é possível acessar a tela de produtos sem estar logado e será redirecionado para tela de login', () => {
    cy.visit(`${Cypress.config().baseUrl}/products`);
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
