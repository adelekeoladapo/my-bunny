

describe('MyBunny', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })


  it('has a title', () => {
    cy.contains('List of Pull Zones')
  })

  it(`has 'Add New' button`, () => {
    cy.get('#add-new-button')
      .should('contain', 'Add New');
  })

  it('should route to new pull zone page', () => {
    cy.get('#add-new-button').click();

    cy.url().should('include', 'new');
    cy.contains('New Pull Zone');
  })

  it('should populate new pull zone form', () => {
    cy.get('#add-new-button').click();
    cy.get('input[id=name]').type('test name');
    cy.get('input[id=origin-url]').type('https://test-url.com');
    cy.get('input[id=enable-geo-zone-sa]').click()
    cy.get('input[id=enable-geo-zone-us]').click()
  })

  it('should view a pull zone',  () => {
    cy.get('#pull-zone-table tbody tr:first').click();
    cy.contains('Pull Zone Details');
  });

})
