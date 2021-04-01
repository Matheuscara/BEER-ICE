describe('A cobertura de testes unitários deve ser de no mínimo 90%', () => {
    it('Será validado a cobertura de testes unitários do front-end', () => {
      cy.exec('npm --prefix front-end/ run test-coverage -- --coverageReporters="json-summary" --testFailureExitCode=0');
      cy.readFile('front-end/coverage/coverage-summary.json').its('total.lines.pct').should('be.gte', 90.00);
    });

    it('Será validado a cobertura de testes unitários do back-end', () => {
      cy.exec('npm --prefix back-end/ run test-coverage -- --coverageReporters="json-summary" --testFailureExitCode=0 ');
      cy.readFile('back-end/coverage/coverage-summary.json').its('total.lines.pct').should('be.gte', 90.00);
    });
  });