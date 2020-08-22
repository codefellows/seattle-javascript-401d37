require('@code-fellows/supergoose');

const categoryModel = require('../../../src/models/categories.js');

beforeEach(async () => {
  await categoryModel.schema.deleteMany({});
});

it('should exist', () => {
  expect(categoryModel).toBeDefined();
});

it('should get all when empty', async () => {
  const allCategories = await categoryModel.get();
  expect(allCategories.length).toBe(0);
});

it('should create', async () => {
  const silverwareData = {name:'silverware', description:'polished'};
  const createdCategory = await categoryModel.post(silverwareData);
  silverwareData._id = createdCategory._id;
  verifyProps(silverwareData, createdCategory);
});

it('should get all when not empty', async () => {
  const silverwareData = {name:'silverware', description:'polished'};
  await categoryModel.post(silverwareData);
  const allCategories = await categoryModel.get();
  expect(allCategories.length).toBe(1);
  verifyProps(silverwareData, allCategories[0]);

});

it('should get one when not empty', async () => {
  const silverwareData = {name:'silverware', description:'polished'};
  const silverwareCreated = await categoryModel.post(silverwareData);
  const silverwareRetrieved = await categoryModel.get(silverwareCreated._id);
  verifyProps(silverwareData, silverwareRetrieved);
});

it('should put', async () => {
  const silverwareCreated = await createSilverware();
  const silverwareDataConverted = JSON.parse(JSON.stringify(silverwareCreated));
  silverwareDataConverted.description = 'tarnished';
  const silverwareRetrieved = await categoryModel.put(silverwareDataConverted._id, silverwareDataConverted);
  expect(silverwareRetrieved.description).toBe('tarnished');
});

it('should patch', async () => {
  const silverwareCreated = await createSilverware();
  const silverwareRetrieved = await categoryModel.patch(silverwareCreated._id, { description: 'tarnished'});
  expect(silverwareRetrieved.description).toBe('tarnished');
});

it('should delete', async () => {
  const silverware = await createSilverware();
  await categoryModel.delete(silverware._id);
  const allCategories = await categoryModel.get();
  expect(allCategories.length).toBe(0);
});

async function createSilverware(name='silverware', description='polished') {
  const silverwareData = {name, description};
  return categoryModel.post(silverwareData);
}

function verifyProps(a, b) {
  for(let key in a) {

    const valueA = a[key];

    const valueB = b[key];

    expect(valueA).toBe(valueB);
  }
}

