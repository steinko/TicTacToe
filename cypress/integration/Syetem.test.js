
describe ('System tests', function() {
	
	beforeEach(function(){ cy.visit('http://localhost:3000')})
	
	it('should display X when a user click on a square not displaying a value', function() {
	   const elements =cy.get('button.square');
	   elements.first().click().should('contain','X');
	   });
	
	it('should fisrt display X then O when user click on differen squares not displaying a value ', function() {
		   const elements =cy.get('button.square')
		   elements.first().click()
		   elements.next().click().should('contain','O')
		   })
	
	xit('should not display any value ', function() {
		   const elements =cy.get('button.square');
		   elements.first().should('contain','****');
		   });
	
	it('should before start of game display: Next player: X ', function() {
		   const status =cy.get('div.status');
		   status.should('contain','Next player: X');
		   });
	
	it('should display: Next player: O ', function() {
		   const elements =cy.get('button.square')
		   elements.first().click()
		   const status = cy.get('div.status');
		   status.should('contain','Next player: O');
		   });
	
	it('should display: Next player: X ', function() {
		   const elements =cy.get('button.square')
		   elements.first().click()
		   elements.next().click()
		   const status = cy.get('div.status')
		   status.should('contain','Next player: X');
		   });
	
	it('X should win at first row', function() {
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
	
	it('X should win at first row', function() {
		   cy.get('button.square').then(($elements) => {
		     $elements[4].click()
		     $elements[0].click()
		     $elements[5].click()
		     $elements[1].click()
		     $elements[6].click()
		     $elements[2].click()
		     const status =cy.get('div.status')
		      status.should('contain','Winner: O')
		   })
	})
	
	
	
	
	
	});
