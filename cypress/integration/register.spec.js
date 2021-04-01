import {
  insertText,
  clickButton,
  verifyContainsUrl,
  verifyContainsText,
  verifyElementVisible,
  verifyElementIsDisable,
  checkElement,
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
} from '../actions/actionBase';

import { internet } from 'faker';
  
describe('Crie uma página de registro de usuários', () => {
  before(() => {
    createAndInsertsDataBase()
  });

  after(() => {
    dropAndTruncateDataBase();
  }) 

  beforeEach( () => {
    cy.visit(Cypress.config().baseUrl);
    clickButton('[data-testid="no-account-btn"]');
  });

  it('Será validado que é possível acessar a tela de registro', () => {
    verifyContainsUrl(`${Cypress.config().baseUrl}/register`);
  });

  it('Será validado que contém os atributos descritos no protótipo', () => {
    verifyContainsText('Nome');
    verifyElementVisible('[data-testid="signup-name"]');
    verifyContainsText('Email');
    verifyElementVisible('[data-testid="signup-email"]');
    verifyContainsText('Senha');
    verifyElementVisible('[data-testid="signup-password"]');
    verifyContainsText('Quero vender');
    verifyElementVisible('[data-testid="signup-seller"]');
    verifyContainsText('Cadastrar');
    verifyElementVisible('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer o registro com um nome com menos de 12 letras', () => {
    insertText('[data-testid="signup-name"]', 'bruno');  
    insertText('[data-testid="signup-email"]', 'email@gmail.com');
    insertText('[data-testid="signup-password"]', '12345678');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer o registro com um nome com caracteres especiais', () => {
    insertText('[data-testid="signup-name"]', 'brunobatista@@');
    insertText('[data-testid="signup-email"]', 'email@gmail.com');
    insertText('[data-testid="signup-password"]', '12345678');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer o registro com um nome com números', () => {
    insertText('[data-testid="signup-name"]', 'brunobatista12');
    insertText('[data-testid="signup-email"]', 'email@gmail.com');
    insertText('[data-testid="signup-password"]', '12345678');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer login com um email inválido', () => {
    insertText('[data-testid="signup-name"]', 'brunobatistasilva');
    insertText('[data-testid="signup-email"]', 'email@');
    insertText('[data-testid="signup-password"]', '12345678');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer login com um email já existente', () => {
    insertText('[data-testid="signup-name"]', 'bruno silva batista');
    insertText('[data-testid="signup-email"]', 'bruno.batista@gmail.com');
    insertText('[data-testid="signup-password"]', '12345678');
    clickButton('[data-testid="signup-btn"]');
    verifyContainsText('E-mail already in database.');
  });

  it('Será validado que não é possível fazer login com uma senha em branco', () => {
    insertText('[data-testid="signup-name"]', 'brunobatistasilva');
    insertText('[data-testid="signup-email"]', 'email@gmail.com');
    insertText('[data-testid="signup-password"]', ' ');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que não é possível fazer login com uma senha com menos de 6 caracteres', () => {
    insertText('[data-testid="signup-name"]', 'brunobatista@@');
    insertText('[data-testid="signup-email"]', 'email@gmail.com');
    insertText('[data-testid="signup-password"]', '1234');
    verifyElementIsDisable('[data-testid="signup-btn"]');
  });

  it('Será validado que é possível fazer cadastro de um admin com sucesso e ser redirecionado para tela do admin', () => {
    let randomEmail = internet.email();
    insertText('[data-testid="signup-name"]', 'brunobatistasilva');
    insertText('[data-testid="signup-email"]', randomEmail);
    insertText('[data-testid="signup-password"]', '123456');
    checkElement('[data-testid="signup-seller"]');
    clickButton('[data-testid="signup-btn"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders`);
  });

  it('Será validado que é possível fazer cadastro de um cliente com sucesso e ser redirecionado para tela do cliente', () => {
    let randomEmail = internet.email();
    insertText('[data-testid="signup-name"]', 'brunobatistasilva');
    insertText('[data-testid="signup-email"]', randomEmail);
    insertText('[data-testid="signup-password"]', '123456');
    clickButton('[data-testid="signup-btn"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/products`);
  });
});
