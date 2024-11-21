describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (alttext) => {
            expect(alttext).to.be.eq("Hello , share this practice page and share your knowledge")
            return true;


        })



    })
})