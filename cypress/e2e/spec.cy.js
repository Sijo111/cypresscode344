describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get('input[placeholder="Search for Products, Brands and More"]').type('oppo')
    cy.get('input[placeholder="Search for Products, Brands and More"]').type('{enter}');
    cy.get('[data-id="ACCGH7YZY6AHGCHJ"] > .slAVV4 > .wjcEIp').type('click');
    
  })
})