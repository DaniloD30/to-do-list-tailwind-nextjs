describe('Login', function () {
  it('should login with valid credentials', function () {
    cy.visit('/');

    cy.get('[data-testid=email]').type(Cypress.env('user_email'));
    cy.get('[data-testid=pass]').type(Cypress.env('user_password'));

    cy.contains('Entrar').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/to-do-list`);
  });
});
