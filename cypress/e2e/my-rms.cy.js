describe('My rms', () => {
  describe('Display list of max repetitions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/my-rms');
    });
    it('user is redirect to login page if access the page with no auth', () => {});
    it('should show empty state if there are no max reps', () => {});
    it('should show a card with latest Power clean max reps', () => {});
  });
});
