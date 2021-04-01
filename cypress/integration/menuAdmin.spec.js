import {
  verifyElementVisible,
  login,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  clickButton,
  verifyContainsUrl,
} from '../actions/actionBase';
  
describe('Criar menu side bar para administrador', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Será validado que o sidebar devem ser mostrados conforme protótipos', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    verifyElementVisible('[data-testid="side-menu-item-orders"]');
    verifyElementVisible('[data-testid="side-menu-item-profile"]');
    verifyElementVisible('[data-testid="side-menu-item-logout"]');
  });

  it('Será validado que ao clicar no menu meus pedidos será redirecionado para tela de meus pedidos', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-orders"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders`);
  });

  it('Será validado que ao clicar no menu Perfil será redirecionado para tela de Perfil', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-profile"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/profile`);
  });

  it('Será validado que ao clicar no menu sair será redirecionado para tela home', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-logout"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
