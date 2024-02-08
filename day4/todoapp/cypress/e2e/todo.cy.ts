describe("TodoApp Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Başlık doğru şekilde render edilmeli", () => {
    cy.get("[data-cy=logo]").should("have.text", "todos app");
  });

  it("Varsayılan olarak üç eleman listelenmeli", () => {
    cy.get(".todo-list li").should("have.length", 3);

    cy.get(".todo-list li")
      .first()
      .should("have.text", "Unit test Öğren")
      .should("not.have.class", "completed");

    cy.get(".todo-list li")
      .last()
      .should("have.text", "React Eğitimi Al")
      .should("have.class", "completed");
  });

  it("Yeni bir eleman eklenebilmeli", () => {
    const newItem = "Markete git";

    cy.get("[data-cy=new-todo-input]").type(`${newItem}{enter}`);
    cy.get("[data-cy=new-todo-input]").should("have.value", "");

    cy.get(".todo-list li")
      .should("have.length", 4)
      .first()
      .should("have.text", newItem);

    cy.get("[data-cy=items-left]").should("have.text", "3 items left");
  });

  it("Bir görev tamamlandı olarak işaretlenebilmeli", () => {
    cy.get(".todo-list li").first().find("[data-cy=toggle]").click();
    cy.get(".todo-list li").first().should("have.class", "completed");
    cy.get("[data-cy=items-left]").should("have.text", "1 item left");
  });

  it("Bir görev silinebilmeli", () => {
    cy.get(".todo-list li").first().find("[data-cy=delete]").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("Tamamlanan görevler silinebilmeli", () => {
    cy.get("[data-cy=clear-completed]").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("Filtreleme işlemleri yapılabilmeli", () => {
    cy.get("[data-cy=filter-all]").click();
    cy.get(".todo-list li").should("have.length", 3);

    cy.get("[data-cy=filter-active]").click();
    cy.get(".todo-list li").should("have.length", 2);

    cy.get("[data-cy=filter-completed]").click();
    cy.get(".todo-list li").should("have.length", 1);
  });
});
