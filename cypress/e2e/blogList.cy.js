
// make sure there is a user called nakror4 with a password "motdepasse". Make sure to use the test db

describe("Blog list app", function() {
	beforeEach(function() {
		cy.request("POST", `${Cypress.env("BACKEND")}testing/reset`);
		const user = {
			username: "nakror4",
			name: "Matthieu Porte",
			password: "motdepasse"
		};
		cy.request("POST", `${Cypress.env("BACKEND")}users/`, user);
		cy.visit("");
	});

	it("front page can be opened", function() {
		cy.contains("Sign in");
	});

	it("Login works", function(){
		cy.get("#username").type("nakror4");
		cy.get("#password").type("motdepasse");
		cy.get("#login-btn").click();

		cy.contains("Welcome Matthieu Porte");
	});

	it("login fails with wrong password", function() {
		cy.get("#login-btn").click();
		cy.get("#username").type("nakror4");
		cy.get("#password").type("wrong");
		cy.get("#login-btn").click();

		cy.get(".notification").should("have.class", "error");
		cy.get(".notification").contains("Incorrect username or password");
		cy.get("html").should("not.contain", "Welcome Matthieu Porte");
	});


	describe("when logged in", function() {
		beforeEach(function() {
			cy.login({ username: "nakror4", password: "motdepasse" });
		});

		it("a new note can be created", function() {
			cy.get("#drawer-btn").click();
			cy.get("#title").type("a post created by cypress");
			cy.get("#url").type("https://www.cypress.io/");
			cy.get("#create-btn").click();
			cy.get("body").click(500, 40);
			cy.contains("a post created by cypress");
		});

		it("reloading keeps login info", function(){
			cy.createBlog({ title: "reloadProffblog", url: "google.com" });
			cy.reload();
			cy.contains("Welcome Matthieu Porte");
			cy.contains("reloadProffblog");
		});


		it("logout works", function() {
			cy.get("#logout-btn").click();
			cy.contains("Sign in");
		});
	});

});