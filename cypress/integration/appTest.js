/* eslint-disable no-undef*/
describe('Phonebook app', function () {
  it('can open index page', function () {
    cy.visit('http://localhost:3001')
    cy.contains('Puhelinluettelo')
    cy.contains('lisää uusi')
    cy.contains('Numerot')
  })
})