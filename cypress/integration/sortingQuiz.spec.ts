describe("Sorting quiz", () => {
  it("Should route to a house when the quiz is finished", () => {
    cy.visit("sorting-quiz")
    cy.get("[data-testid='startTheQuiz']").click()
    for (let i = 0; i < 9; i++) {
      cy.get("[data-testid=answer-3]").click()
      cy.contains("NEXT").click()
    }
    cy.get("[data-testid='answer-3']").click()
    cy.contains("SUBMIT").click()
    cy.get("[data-testid='sortedHousePage']")
  })
})
