describe('Todo App Test', function() {
  it('successfully', function() {
    cy.visit('https://localhost:8080');

    cy.pause();

    cy.contains('type').click();

    cy.url().should('include', 'commands/actions');

    cy.get('.action-email')
        .type('sotowang@qq.com')
        .should('have.value', 'sotowang@qq.com');
  })
})
