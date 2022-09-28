describe('Exercises page', () => {
  describe('Display list of exercises', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/exercises');
    });
    it('An element called Power Clean is displayed and send user to details page when click', () => {
      cy.get('a').contains('Power Clean').click().wait(300);
      cy.get('h1').should('contain', 'Power Clean');
    });
  });
});
