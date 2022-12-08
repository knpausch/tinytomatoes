describe('Server Failure Page Flows', () => {
    it('Should see error message if home page fails to load upon visiting site', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: ''
        })
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('Tiny Tomatoes')
            .get('.logo').should('be.visible')
            .get('[alt="cherry tomatoes on vine"]').should('be.visible')
        cy.get('h2').contains('Oops, something went wrong. Please try again later.')
    })

    it('Should see error message if single movie details fail to load after selecting a movie', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000')
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            method: 'GET',
            fixture: ''
        })
        cy.get('#694919').click()
        cy.get('h1').contains('Tiny Tomatoes')
            .get('.logo').should('be.visible')
            .get('[alt="cherry tomatoes on vine"]').should('be.visible')
        cy.get('h2').contains('Oops, something went wrong. Please try again later.')
    })
})