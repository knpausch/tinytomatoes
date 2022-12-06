beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        method: 'GET',
        fixture: '../fixtures/movies.json'
    })
    cy.visit('http://localhost:3000')
  })

describe('Feedback Loop login flows', () => {
    it('Should confirm that true is equal to true', () => {
      expect(true).to.equal(true)
    })
  })