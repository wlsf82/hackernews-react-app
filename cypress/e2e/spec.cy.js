describe('Hacker Stories Sample React App', () => {
  it('searches for "JavaScript"', () => {
    cy.visit('https://wlsf82-hacker-stories.web.app/')
    
    cy.get('input[type="text"]')
      .clear()
      .type('JavaScriptt')
      .press('backspace') // to remove the extra 't'
      .press('enter') // to submit the form

    cy.get('.item') // every result is rendered in an element with the item class
      .its('length')
      .should('be.at.least', 1)
      .and('at.most', 20)
  })
})
