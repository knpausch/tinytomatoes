describe('Bad URL Flows', () => {
  it('Should see message if user types wrong URL', () => {
    cy.visit('http://localhost:3000/burgers')
    cy.get('h1').contains('Tiny Tomatoes')
      .get('.logo').should('be.visible')
      .get('[alt="cherry tomatoes on vine"]').should('be.visible')
      .get('h2').should('contain', 'Oops, URL not found. Please try again.')
      .get('button').should('contain', 'Go Back Home')
  })

  it('Should redirect user to the home page when they click Go Back Home button', () => {
    cy.visit('http://localhost:3000/burgers');
    cy.get('button').should('contain', 'Go Back Home').click()
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            method: 'GET',
            fixture: '../fixtures/movies.json'
        })
        cy.visit('http://localhost:3000');
    cy.get('h1').contains('Tiny Tomatoes')
      .get('.logo').should('be.visible')
      .get('[alt="cherry tomatoes on vine"]').should('be.visible')
      .get('.rating-options').should('be.visible')
      .get('.reset-button')
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