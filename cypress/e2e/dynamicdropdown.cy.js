describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('fieldset #autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($countries)=>{
            // if($countries.text().includes('United'))
            // {
            //     cy.wrap($countries).click()
            // }

            //another method

            if($countries.text()==='India'){
                cy.wrap($countries).click()
            }

        })    

    })
})