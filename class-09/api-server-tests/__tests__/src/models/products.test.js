require('@code-fellows/supergoose');

const productModel = require('../../../src/models/products.js');

beforeEach(async () => {
  await productModel.schema.deleteMany({});
});

it('should exist', () => {
  expect(productModel).toBeDefined();
});

it('should get all when empty', async () => {
  const allProducts = await productModel.get();
  expect(allProducts.length).toBe(0);
});

it('should create', async () => {
  const forkData = {name:'fork', display_name:'Fork', category:'silverware'};
  const createdProduct = await productModel.post(forkData);
  forkData._id = createdProduct._id;
  verifyProps(forkData, createdProduct);
});

it('should get all when not empty', async () => {
  const forkData = {name:'fork', display_name:'Fork', category:'silverware'};
  await productModel.post(forkData);
  const allProducts = await productModel.get();
  expect(allProducts.length).toBe(1);
  verifyProps(forkData, allProducts[0]);
});

it('should get one when not empty', async () => {
  const forkData = {name:'fork', display_name:'Fork', category:'silverware'};
  const forkCreated = await productModel.post(forkData);
  const forkRetrieved = await productModel.get(forkCreated._id);
  verifyProps(forkData, forkRetrieved);
});

it('should put', async () => {
  const forkCreated = await createFork();
  const forkDataConverted = JSON.parse(JSON.stringify(forkCreated));
  forkDataConverted.category = 'cutlery';
  const forkRetrieved = await productModel.put(forkDataConverted._id, forkDataConverted);
  expect(forkRetrieved.category).toBe('cutlery');
});

it('should patch', async () => {
  const forkCreated = await createFork();
  const forkRetrieved = await productModel.patch(forkCreated._id, { category: 'cutlery'});
  expect(forkRetrieved.category).toBe('cutlery');
});

it('should delete', async () => {
  const fork = await createFork();
  await productModel.delete(fork._id);
  const allProducts = await productModel.get();
  expect(allProducts.length).toBe(0);
});

async function createFork(name='fork', display_name='Fork', category='silverware') {
  const forkData = {name, display_name, category};
  return productModel.post(forkData);
}

function verifyProps(a, b) {
  for(let key in a) {

    const valueA = a[key];

    const valueB = b[key];

    expect(valueA).toBe(valueB);
  }
}

