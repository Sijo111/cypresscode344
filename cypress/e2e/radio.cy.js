describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //radio button
        cy.get('[value="radio2"]').check().should('be.checked');
        
       

    })
})