describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('label [type="checkbox"]').check(['option2','option3']).should('be.checked');
        
       

    })
})