describe('Movie Detail Interaction Flows', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000')
    })

    it('Should show details of movie selected by click', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        method: 'GET',
        fixture: '../fixtures/single_movie.json'
      })
      cy.get('#694919').click()
      cy.get('.poster-mini').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        .get('.movieInfo').should('contain', 'Money Plane')
        .and('contain', 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
      })

    it('Should return user to home view to see all movies when they click on home button', () => {
        cy.get('#694919').click()
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            method: 'GET',
            fixture: '../fixtures/single_movie.json'
        })
        cy.get('.homeButton').click()
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('Tiny Tomatoes')
            .get('.logo').should('be.visible')
            .get('[alt="cherry tomatoes on vine"]').should('be.visible')
        cy.get('.movie-container').within(() => {
            cy.get('div').should('have.length', 5)
                .get('div').eq(0).find('img').should('have.attr', 'id', '694919')
                .get('div').eq(1).find('img').should('have.attr', 'id', '337401')
                .get('div').eq(2).find('img').should('have.attr', 'id', '718444')
                .get('div').eq(3).find('img').should('have.attr', 'id', '539885')
                .get('div').eq(4).find('img').should('have.attr', 'id', '581392')
        })
    })
})
