'use strict';

const { server } = require('../../../src/lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const { verifyProps } = require('../../helpers');

const categoriesModel = require('../../../src/models/categories.js');

const mockRequest = supergoose(server);

beforeEach(async () => {
  await categoriesModel.schema.deleteMany({});
});

describe('Categories API', () => {

  it('gets empty when empty', async () => {

    const categories = await mockRequest.get('/api/v1/categories');

    expect(categories.body.count).toBe(0);

    expect(categories.body.results.length).toBe(0);
  });


  it('can post() a new category', async () => {

    const shinyData = { name: 'shiny', description: 'very attractive to birds' };

    const response = await mockRequest.post('/api/v1/categories').send(shinyData);

    expect(response.status).toBe(200);

    verifyProps(shinyData, response.body);
  });

  it('can get() a category', async () => {

    const shinyData = { name: 'shiny', description: 'very attractive to birds' };

    const { body: createdCategory } = await mockRequest.post('/api/v1/categories').send(shinyData);

    const { body: fetchedCategory } = await mockRequest.get('/api/v1/categories/' + createdCategory._id);

    verifyProps(createdCategory, fetchedCategory);
  });

  it('can get() all categories', async () => {

    const shinyData = { name: 'shiny', description: 'very attractive to birds' };

    await mockRequest.post('/api/v1/categories').send(shinyData);

    const dullData = { name: 'dull', description: 'not shiny at all' };

    await mockRequest.post('/api/v1/categories').send(dullData);

    const response = await mockRequest.get('/api/v1/categories');

    expect(response.body.count).toBe(2);

    expect(response.body.results.length).toBe(2);

  });

});

it('can update (PUT) a category', async () => {

  const shinyData = { name: 'shiny', description: 'very attractive to birds' };

  const { body: createdCategory } = await mockRequest.post('/api/v1/categories').send(shinyData);

  shinyData.description = 'gleaming, brilliant';

  const { body: putCategory } = await mockRequest.put('/api/v1/categories/' + createdCategory._id).send(shinyData);

  verifyProps(shinyData, putCategory);
});

it('can update (PATCH) a category', async () => {

  const shinyData = { name: 'shiny', description: 'very attractive to birds' };

  const { body: createdCategory } = await mockRequest.post('/api/v1/categories').send(shinyData);

  shinyData.description = 'gleaming, brilliant';

  const { body: patchedCategory } = await mockRequest.patch('/api/v1/categories/' + createdCategory._id).send(shinyData);

  verifyProps(shinyData, patchedCategory);
});

it('can delete a product', async () => {

  const shinyData = { name: 'shiny', description: 'very attractive to birds' };

  const { body: createdCategory } = await mockRequest.post('/api/v1/categories').send(shinyData);

  const { body: deletedCategory } = await mockRequest.delete('/api/v1/categories/' + createdCategory._id);

  verifyProps(deletedCategory, createdCategory);

});
