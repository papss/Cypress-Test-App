describe('User Sessions', () => {

  const email =       'test@example.com'
  const password  =   'password'

  context('HTML Log in form submission', () => {

    beforeEach(function () {

      cy.visit('/login')

    })

    it('Submits an incorrect form', () => {

      // Submits a form with the specified values:
      cy.get('input[id=session_email]').type('blarg')
      cy.get('input[id=session_password]').type('BLARG')
      cy.get('form').submit()

    })

    it('Submits a correct form, then redirects to user page', () => {

      cy.get('input[id=session_email]').type(email)
      cy.get('input[id=session_password]').type(password)
      cy.get('form').submit()

      // checks URL to see if redirected to user page:
      cy.url().should('include', '/users')

      // checks to see if the session cookie exists:
      cy.getCookie('_cypress_twitter_test_session').should('exist')
    })
  })

})
