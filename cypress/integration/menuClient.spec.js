import {
  verifyElementVisible,
  login,
  verifyElementContainsText,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementNotVisible,
  clickButton,
  verifyContainsUrl,
} from '../actions/actionBase';
  
describe('Crie o menu top e menu side bar', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
    login(Cypress.env('login'), Cypress.env('password'));
  });

  it('Será validado que os atributos do top menu devem ser mostrados confome protótipos', () => {
    verifyElementVisible('[data-testid="top-hamburguer"]');
    verifyElementVisible('[data-testid="top-title"]');
    verifyElementContainsText('[data-testid="top-title"]', 'TryBeer');
    verifyElementNotVisible('.side-menu-container');
  });

  it('Será validado que ao clicar no componente hamburguer o sidebar deve ficar visível', () => {
    clickButton('[data-testid="top-hamburguer"]');
    verifyElementVisible('.side-menu-container');
  });

  it('Será validado que os atributos do side menu devem ser mostrados confome protótipos', () => {
    clickButton('[data-testid="top-hamburguer"]');
    verifyElementVisible('[data-testid="side-menu-item-products"]');
    verifyElementVisible('[data-testid="side-menu-item-my-orders"]');
    verifyElementVisible('[data-testid="side-menu-item-my-profile"]');
    verifyElementVisible('[data-testid="side-menu-item-logout"]');
  });

  it('Será validado que ao clicar no botão "produtos" será redirecionado para tela de produtos', () => {
    clickButton('[data-testid="top-hamburguer"]');
    clickButton('[data-testid="side-menu-item-products"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/products`);
  });

  it('Será validado que ao clicar no botão "meus pedidos" será redirecionado para tela de meus pedidos', () => {
    clickButton('[data-testid="top-hamburguer"]');
    clickButton('[data-testid="side-menu-item-my-orders"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/orders`);
  });

  it('Será validado que ao clicar no botão "meu perfil" será redirecionado para tela de perfil', () => {
    clickButton('[data-testid="top-hamburguer"]');
    clickButton('[data-testid="side-menu-item-my-profile"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/profile`);
  });

  it('Será validado que ao clicar no botão "sair" será redirecionado para tela home', () => {
    clickButton('[data-testid="top-hamburguer"]');
    clickButton('[data-testid="side-menu-item-logout"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
