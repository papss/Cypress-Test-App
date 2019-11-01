// Test that certain pages render correctly:
// This expands upon the example test provided in the Cypress documentation
// guides.

context('Render Pages', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Visit the Homepage/Root URL', () => {
    cy.visit('/')
  })

  it('Visit the User index Page', () => {
    cy.visit('users')
  })

  // Attempting to view a specific user's page currently throws a 500 error
  // for some reason.
  // Maybe related to the same bug that makes the internal chrome browser
  // not work?

  it('Visit a specific user page', () => {
    cy.visit('users/2')
  })

  it('Visit the tweets index', () => {
    cy.visit('tweets')
  })

  // Tweets don't have a show route configured, so this should fail and throw
  // a 404 error.

  it('Visit a specific tweet', () => {
    cy.visit('tweets/1')
  })
})
