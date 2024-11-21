describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option2').should('have.value','option2')
        
       

    })
})