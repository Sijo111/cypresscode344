describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(10000)
        cy.on('window:alert', () => {
            return true
          })


          cy.get('button[class="btn_primary btn_inventory"]').eq(0).click()
          cy.get('button[class="btn_primary btn_inventory"]').eq(1).click()
          cy.get('[data-icon="shopping-cart"]').click()
          cy.get('[class="btn_action checkout_button"]').click()
          cy.get('#first-name').type('sijo')
          cy.get('#last-name').type('sebastian')
          cy.get('#postal-code').type('600023')
          cy.get('[class="btn_primary cart_button"]').click()
          cy.get('.summary_subtotal_label').should('contain.text', 'Item total: $45.98');
          //cy.get('.summary_subtotal_label').should('have.text','Item total: $45.98')
          cy.get('[class="btn_action cart_button"]').click()
          cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')



          

    })
})