
// All page element selectors from the game are imported from this file and an instance is passed to the constant "element"
import pageElements from '../PageObjects/pageElements'; 
const element = new pageElements();

describe('Testing TicTacToe Webapp', function() {
  
  //Refresh the page before each of the 5 test runs below
  beforeEach (function() {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
  })
  
  //Assert we get the correct winning message when X wins
  it('Make X win', function () {
    element.getInputBox().type('3');
    element.getPlayButton().click();
    element.getUpperLeft().click();
    element.getUpperMiddle().click();
    element.getMiddleLeft().click();
    element.getCenter().click();
    element.getBottomLeft().click();
    element.getWinMessage().contains('Congratulations player X!').should('exist')
  })  

  //Assert we get the correct winning message when O wins
  it('Make O win', function () {
    element.getInputBox().type('3');
    element.getPlayButton().click();
    element.getUpperLeft().click();
    element.getBottomLeft().click();
    element.getUpperMiddle().click();
    element.getUpperRight().click();
    element.getMiddleLeft().click();
    element.getCenter().click();
    element.getWinMessage().contains('Congratulations player O!').should('exist')
  }) 

  //Assert we get an error message when invalid data is entered into the text box
  it('Number field validation', function () {
    element.getInputBox().type('Word');
    element.getPlayButton().click();
    element.getNumErrorMessage().contains('Please enter a valid number to start the game').should('exist')
  })

  //Assert we get an error message when we press play without data in the text box
  it('Require input before playing game', function () {
    element.getPlayButton().click();
    element.getBlankErrorMessage().contains('Please enter a number to start the game').should('exist')
  })

  //Assert that the game inputs are removed from the screen after the game starts
  it('Remove inputs after clicking play button', function () {
    element.getInputBox().type('3');
    element.getPlayButton().click();
    element.getInputBox().should('not.exist');
    element.getPlayButton().should('not.exist');
  })
})
