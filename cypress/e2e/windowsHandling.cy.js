describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('fieldset a#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.wait(2000)
            cy.get('#navbarSupportedContent li a').eq(2).click();
            cy.go('back')
            cy.go('back')
        })    

    })
})