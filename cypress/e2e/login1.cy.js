describe('login', () => {

    let userdata;
    before(()=>{
        cy.fixture("example").then((data)=>{
            userdata=data;
        })
    })
    //positve scenario
    it('FixturesDemoTest', () => {
        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type(userdata.Username)
        cy.get('#password').type(userdata.password)
        cy.get('button#submit').click()
        cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text',userdata.expected)
        cy.get('[class*="has-very-dark-gray-background-color"]').should('be.visible')

    })
})