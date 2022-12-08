describe('Server Failure Page Flows', () => {
    it('Should see error message if home page fails to load upon visiting site', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: ''
        })
        cy.visit('http://localhost:3000');
        cy.get('h1').contains('Tiny Tomatoes')
            .get('.logo').should('be.visible')
            .get('[alt="cherry tomatoes on vine"]').should('be.visible')
        cy.get('h2').contains('Oops, something went wrong. Please try again later.')
    })
})