
describe ('System tests', function() {
	
	before(function(){ cy.visit('http://localhost:3000')})
	
	it('should display X when a user click on a square not displaying a value', function() {
	   const elements =cy.get('button.square');
	   elements.first().click().should('contain','X');
	   });
	
	xit('should fisrt display X then O when user click on differen squares not displaying a value ', function() {
		   const elements =cy.get('button.square')
		   elements.first().click()
		   elements.next().click().should('contain','O')
		   })
	
	xit('should not display any value ', function() {
		   const elements =cy.get('button.square');
		   elements.first().should('contain',' ');
		   });
	
	it('should before start of game display: Next player: X ', function() {
		   const status =cy.get('div.status');
		   status.should('contain','Next player: X');
		   });
	
	xit('should display: Next player: O ', function() {
		   const elements =cy.get('button.square')
		   elements.first().click()
		   const status =cy.get('div.status');
		   status.should('contain','Next player: O');
		   });
	
	xit('should display: Next player: X ', function() {
		   const elements =cy.get('button.square')
		   this.elements.first().click()
		   this.elements.next().click()
		   cy.get('div.status').as('status')
		   status.should('contain','Next player: X');
		   });
	
	xit('X should win at first row', function() {
		   cy.get('button.square').then(($elements) => {
		     $elements[0].click()
		     $elements[4].click()
		     $elements[1].click()
		     $elements[5].click()
		     $elements[2].click()
		     const status =cy.get('div.status')
		      status.should('contain','Winner: X')
		   })
	})
	
	
	
	
	
	});
