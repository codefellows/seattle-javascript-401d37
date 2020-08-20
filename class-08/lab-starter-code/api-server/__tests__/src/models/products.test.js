const Products = require('../../../src/models/products/products.js');
let products = new Products();

require('../../supergoose.js');

describe('Products Model', () => {
  it('can create() a new product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics'};
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics'};
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
