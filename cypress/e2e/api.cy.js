/// <reference types='cypress' />

describe('API challenge', () => {
  it('should send a GET request', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body.data.list.name);
      expect(response.body.data.list.name).to.eq('Professional');
    });
  });
});
