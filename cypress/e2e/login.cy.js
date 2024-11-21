describe('login', () => {
    //positve scenario
    it('validate test case 1', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text', 'Congratulations student. You successfully logged in!')
        cy.get('[class*="has-very-dark-gray-background-color"]').should('be.visible')

    })
})

//Negative Scenario:Invalid Username

it('validate test case 2', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type('Sijo')
    cy.get('input#password').type('Password123')
    cy.get('button#submit').click()
    //cy.wait(5000);
    cy.get('div#error').should('be.visible', 'Your username is invalid!')
    cy.get('div#error').should('have.text', 'Your username is invalid!')

})

//Negative Scenario:Invalid Password

it('validate test case 3', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type('student')
    cy.get('input#password').type('Pass12345')
    cy.get('button#submit').click()
    //cy.wait(5000);
    cy.get('div#error').should('be.visible', 'Your password is invalid!')
    cy.get('div#error').should('have.text', 'Your password is invalid!')

})