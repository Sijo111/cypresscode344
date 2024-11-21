describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (alttext) => {
            expect(alttext).to.be.eq("Hello , Are you sure you want to confirm?")
            return true;


        })



    })
})