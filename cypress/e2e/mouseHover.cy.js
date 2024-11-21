describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', '#top')



    })
})