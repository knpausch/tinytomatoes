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
  })
})