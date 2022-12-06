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
            .get('.movieInfo').should('contain', 'Money Plane')
            .and('contain', 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    })
})
