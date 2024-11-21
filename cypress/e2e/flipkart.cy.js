describe('flipkart', () => {
    it('validate test case 1', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[placeholder="Search for Products, Brands and More"]').type('mobiles')
        cy.get('input[placeholder="Search for Products, Brands and More"]').type('{enter}');
        // cy.get('[title="SAMSUNG"] div.XqNaEv').click();
        // //cy.get('[div*="SAMSUNG"]').should('have.text','SAMSUNG')
        // cy.get('.KzDlHZ').should('contain.text', 'SAMSUNG');


        

        //cy.get('input.Pke_EE').type("mobiles{enter}");
        cy.get('[class="SDsN9S"] [title="SAMSUNG"] input').check({force:true})
        cy.get('.tUxRFH [class="KzDlHZ"]').eq(0).invoke('text').should('include','SAMSUNG')

    })
})