
describe ('System tests', function() {
	it('Click on square', function() {
	   cy.visit('http://localhost:3000');
	   const elements =cy.get('button.square');
	   elements.first().click()
	   .should('contain','X');
	   
	   });
	});
