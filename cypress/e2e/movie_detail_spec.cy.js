describe('Movie Detail Interaction Flows', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000')
    })


    it('Should show details of movie selected by click', () => {
        cy.get('#694919').click()
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            method: 'GET',
            fixture: '../fixtures/single_movie.json'
        })
            .get('.poster-mini').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    })
})