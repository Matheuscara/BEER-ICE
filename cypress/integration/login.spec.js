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
} from '../actions/actionBase';
  
describe('Crie uma página de login', () => {
  before(() => {
    createAndInsertsDataBase();
  });

  after(() => {
    dropAndTruncateDataBase();
  });

  beforeEach(() => {
    cy.visit(`${Cypress.config().baseUrl}/login`);
  });

  it('Será validado que é possível acessar a home', () => {
    verifyContainsUrl(`${Cypress.config().baseUrl}/login`);
  });

  it('Será validado que a tela login contém os atributos descritos no protótipo', () => {
    verifyContainsText('Email');
    verifyElementVisible('[data-testid="email-input"]');
    verifyContainsText('Senha');
    verifyElementVisible('[data-testid="password-input"]');
    verifyContainsText('Entrar');
    verifyElementVisible('[data-testid="signin-btn"]');
    verifyContainsText('Ainda não tenho conta');
    verifyElementVisible('[data-testid="no-account-btn"]');
  });

  it('Será validado que não é possível fazer login com um email inválido', () => {
    insertText('[data-testid="email-input"]', 'email@');
    insertText('[data-testid="password-input"]', '12345678');
    verifyElementIsDisable('[data-testid="signin-btn"]');
  });

  it('Será validado que não é possível fazer login com uma senha em branco', () => {
    insertText('[data-testid="email-input"]', 'bruno.batista@gmail.com');
    insertText('[data-testid="password-input"]', ' ');
    verifyElementIsDisable('[data-testid="signin-btn"]');
  });

  it('Será validado que não é possível fazer login com uma senha com menos de 6 caracteres', () => {
    insertText('[data-testid="email-input"]', 'bruno.batista@gmail.com');
    insertText('[data-testid="password-input"]', '1234');
    verifyElementIsDisable('[data-testid="signin-btn"]');
  });

  it('Será validado que é possível fazer login com um cliente e ser redirecionado para tela de cliente', () => {
    login('bruno.batista@gmail.com', '12345678');
    verifyContainsUrl(`${Cypress.config().baseUrl}/products`);
  });

  it('Será validado que é possível fazer login com um admin e ser redirecionado para tela de admin', () => {
    login('tryber@trybe.com.br', '123456');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders`);
  });

  it('Será validado que é possível clicar no botão "Ainda não tenho conta" e ser redirecionado para tela de registro', () => {
    clickButton('[data-testid="no-account-btn"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/register`);
  });
});
