///<reference types="cypress"/>

describe('Basic element testing', () => {
    it('Handling element from practice demo page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($cells) => {

            if ($cells.text().includes('JMETER')) {
                cy.wrap($cells).next().then((expectedcourse) => {
                    cy.pause()
                    const price = expectedcourse.text()
                    expect(Number(price)).to.eq(25)

                })
            }

            if ($cells.text().includes('TestNG')) {
                cy.wrap($cells).next().then((expectedcourse) => {
                    const price = expectedcourse.text()
                    expect(Number(price)).to.eq(20)

                })

            }

            if ($cells.text().includes('SQL')) {
                cy.wrap($cells).prev().then((expectedcourse) => {
                    const instructor = expectedcourse.text()
                    expect(instructor).to.equal('Rahul Shetty')
                })
            }
        })
    })
})