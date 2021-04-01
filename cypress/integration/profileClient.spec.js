import {
  verifyContainsText,
  verifyElementVisible,
  login,
  clickButton,
  verifyElementIsDisable,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
  verifyElementContainsText,
  verifyElementContainsAttribute,
  verifyElementNotContainsAttribute,
  accessProfileClient,
  verifyContainsUrl,
} from '../actions/actionBase';
  
describe('Criar tela de perfil do cliente', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
    login(Cypress.env('login'), Cypress.env('password'));
    accessProfileClient();
  });

  it('Será validado que é possível acessar a tela de perfil do cliente', () => {
    verifyContainsUrl(`${Cypress.config().baseUrl}/profile`);
  });

  it('Será validado que contém os atributos descritos no protótipo', () => {
    verifyElementVisible('[data-testid="profile-name-input"]');
    verifyElementVisible('[data-testid="profile-email-input"]');
    verifyContainsText('Salvar');
    verifyElementVisible('[data-testid="profile-save-btn"]');
    verifyElementContainsText('[data-testid="top-title"]','Meu perfil');
  });

  it('Será validado que campo email está como readonly', () => {
    verifyElementContainsAttribute('[data-testid="profile-email-input"]', 'readonly');
  });

  it('Será validado que o botão salvar fique desabilitado caso não altere o nome', () => {
    verifyElementIsDisable('[data-testid="profile-save-btn"]');
  });

  it('Será validado que o botão salvar fique habilitado caso altere o nome', () => {
    cy.get('[data-testid="profile-name-input"]').clear().type('testebatitaosilva');
    verifyElementNotContainsAttribute('[data-testid="profile-save-btn"]', 'disable');
  });

  it('Será validado que é possível alterar o nome com sucesso', () => {
    cy.get('[data-testid="profile-name-input"]').clear().type('testebatitaosilva');
    clickButton('[data-testid="profile-save-btn"]');
    verifyContainsText('Atualização concluída com sucesso');
  });
});
