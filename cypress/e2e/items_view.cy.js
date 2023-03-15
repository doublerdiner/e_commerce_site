describe('items view', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
  })

  it("should load the app", ()=>{
    cy.get("h1").should("contain", "Online");
  })
  
  it("should have 5 shop items", ()=>{
    cy.get("#item-view > li").should("have.length", 5);
  })

  it("should increase the basket when an item is added", ()=>{
    cy.get("#button").click();
    cy.get('#nav-basket').should("contain", "1")

  })

  
})