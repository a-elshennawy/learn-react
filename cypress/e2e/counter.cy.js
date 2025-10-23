describe("Counter Component", () => {
  it("should increment and decrement the count correctly", () => {
    // 1. Visit the page where your component is rendered
    cy.visit("http://localhost:5173");

    // 2. Find the heading and assert its initial state
    cy.get("h1").should("contain", "Count : 0");

    // 3. Find the '+' button and click it
    cy.get("button").contains("+").click();

    // 4. Assert that the count has updated to 1
    cy.get("h1").should("contain", "Count : 1");

    // 5. Find the '-' button and click it
    cy.get("button").contains("-").click();

    // 6. Assert that the count is back to 0
    cy.get("h1").should("contain", "Count : 0");

    cy.get("button").contains("-").click();
    cy.get("h1").should("contain", "Count : -1");

    // extra assurings
    cy.get("button").contains("+").click();
    cy.get("h1").should("contain", "Count : 0");
    cy.get("button").contains("+").click();
    cy.get("h1").should("contain", "Count : 1");
    cy.get("button").contains("+").click();
    cy.get("h1").should("contain", "Count : 2");
  });
});
