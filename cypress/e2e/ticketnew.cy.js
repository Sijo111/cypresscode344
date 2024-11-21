describe('TicketNewSeatSelection', () => {
    it('Select 2 seats from Ticketnew', () => {
        cy.visit('https://ticketnew.com/')
        cy.get('.AnimatedSearchBar_animInput__iuqxe').type('chennai')
        cy.get('.MobileMovieCitySelector_searchedArea__6TJSO > div').click()
        cy.get('.searchIcon').type('kanguva')
        cy.get('.bgImg').eq(0).click()
        cy.get('.Button_btn___t8GZ').click()
        cy.get(':nth-child(2) > .MovieSessionsListing_col2__2vcaY > :nth-child(1) > .greenCol').click()
        cy.get(':nth-child(1) > .FixedSeating_rightRow__MQXfw > ul > :nth-child(3) > .FixedSeating_seatL___joUf > :nth-child(14) > .available > label').click()
        
       

    })
})