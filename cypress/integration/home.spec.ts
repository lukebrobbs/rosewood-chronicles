describe("Home page", () => {
  it("Should link to sorting quiz", () => {
    cy.visit("/")
    cy.get("[data-testid=home_sortingQuiz_link]").click()
    cy.contains("house sorting quiz")
  })
})
