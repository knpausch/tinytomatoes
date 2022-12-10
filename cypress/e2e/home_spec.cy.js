describe('Page Load Flows', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000');
    })

    it('Should see title of application upon page load', () => {
        cy.get('h1').contains('Tiny Tomatoes')
            .get('.logo').should('be.visible')
            .get('[alt="cherry tomatoes on vine"]').should('be.visible')
    })

    it('Should display all movies upon page load', () => {
        cy.get('.movie-container').within(() => {
            cy.get('div').should('have.length', 5)
                .get('div').eq(0).find('img').should('have.attr', 'id', '694919')
                .get('div').eq(1).find('img').should('have.attr', 'id', '337401')
                .get('div').eq(2).find('img').should('have.attr', 'id', '718444')
                .get('div').eq(3).find('img').should('have.attr', 'id', '539885')
                .get('div').eq(4).find('img').should('have.attr', 'id', '581392')
        })
    })

    it('Should filter movies when user selects a rating and display only those movies', () => {
      cy.get('.rating-options').select("3")
      cy.get('.movie-container').within(() => {
          cy.get('div').should('have.length', 3)
              .get('div').eq(0).find('img').should('have.attr', 'id', '694919')
              .get('div').eq(1).find('img').should('have.attr', 'id', '718444')
              .get('div').eq(2).find('img').should('have.attr', 'id', '539885')
      })
  })

  it('Should filter movies by another rating and display those movies', () => {
    cy.get('.rating-options').select("4")
    cy.get('.movie-container').within(() => {
        cy.get('div').should('have.length', 1)
            .get('div').eq(0).find('img').should('have.attr', 'id', '581392')
    })
    cy.get('.rating-options').select("2")
    cy.get('.movie-container').within(() => {
        cy.get('div').should('have.length', 1)
          .get('div').eq(0).find('img').should('have.attr', 'id', '337401')
    })
  })

  // it('Should display message to user if no movies exist for the rating they select', () => {
  //   cy.get('.rating-options').select("1")
  //   cy.get('h1').contains('Tiny Tomatoes')
  //     .get('.logo').should('be.visible')
  //     .get('[alt="cherry tomatoes on vine"]').should('be.visible')
  //     .get('h2').contains('Oops, something went wrong. Please try again later.')
  // })
})

  
