import {
  verifyContainsText,
  verifyElementVisible,
  login,
  clickButton,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementContainsText,
  verifyContainsUrl,
} from '../actions/actionBase';
  
describe('Criar tela de perfil de administrador', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Será validado que é possível acessar a tela do perfil do administrador', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-profile"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/profile`);
  });

  it('Será validado que a tela de perfil contém os atributos descritos no protótipo', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-profile"]');
    verifyContainsText('Perfil');
    verifyElementVisible('[data-testid="profile-email"]');
    verifyElementVisible('[data-testid="profile-name"]');
  });

  it('Será validado que a tela de perfil contém o email e nome do administrador', () => {
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-profile"]');
    verifyContainsText('Perfil');
    verifyElementContainsText('[data-testid="profile-email"]','tryber@trybe.com.br');
    verifyElementContainsText('[data-testid="profile-name"]','Tryber Admin');
  });

  it('Será validado que não é possível acessar a tela sem estar autenticado e ser redirecionado para tela de login', () => {
    cy.visit(`${Cypress.config().baseUrl}/admin/profile`);
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });
});
