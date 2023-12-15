describe("Add Task", function () {
  it("should add a task", function () {
    cy.visit("/");

    cy.get("[data-testid=email]").type(Cypress.env("user_email"));
    cy.get("[data-testid=pass]").type(Cypress.env("user_password"));

    cy.contains("Entrar").click();

    cy.url().should("eq", `${Cypress.config("baseUrl")}/to-do-list`);

    cy.get("[data-testid=addButton]").click();

    cy.get("[data-testid=inputTitle]").type(Cypress.env("task_title"));

    cy.contains("Adicionar").click();
  });
});
