//All html elements in the tic tac toe game being or will be used in automation scripts are defined here by their IDs
class pageElements{
    getInputBox() {
        return cy.get('#number')
     } 
    getPlayButton() {
        return cy.get('#start')
    }
    getUpperLeft() {
        return cy.get('#0')
    }
    getUpperMiddle() {
        return cy.get('#1')
    }
    getUpperRight() {
        return cy.get('#2')
    }
    getMiddleLeft() {
        return cy.get('#3')
    }
    getCenter() {
        return cy.get('#4')
    }
    getMiddleRight() {
        return cy.get('#5')
    }
    getBottomLeft() {
        return cy.get('#6')
    }
    getBottomMiddle() {
        return cy.get('#7')
    }
    getBottomRight() {
        return cy.get('#8')
    }
    getWinMessage() {
        return cy.get('#endgame')
    }
    getNumErrorMessage() {
        return cy.get('#numerror')
    }
    getBlankErrorMessage() {
        return cy.get('#blankerror')
    }
    }
    export default pageElements;