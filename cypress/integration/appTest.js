/* eslint-disable no-undef*/
describe('Phonebook app', function () {
  it('can open index page', function () {
    cy.visit('http://localhost:3001')
    cy.contains('Puhelinluettelo')
    cy.contains('lisää uusi')
    cy.contains('Numerot')
  })
})

describe('Can add new person', function() {
  const name = 'lissu'
  const number = '7777777777'
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3001')
    cy.get('#nameInput').type(name)
    cy.get('#numberInput').type(number)
    cy.get('#addButton').click()
  })

  it('added person and his number should exist', function() {
    cy.contains(name)
    cy.contains(number)
  })
})