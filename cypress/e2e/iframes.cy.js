describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.main-menu ul li a[href="mentorship"]').eq(0).click()
        

    })
})