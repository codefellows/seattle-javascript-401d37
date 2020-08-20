const Categories = require('../../../src/models/categories/categories.js');
require('../../supergoose.js');

let categories = new Categories();

describe('Categories Model', () => {
  it('can create() a new category', () => {
    let obj = {name:'Test Categories'};
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e) );
  });

  it('can get() a category', () => {
    let obj = {name:'Test Categories 2'};
    return categories.create(obj)
      .then(record => {
        return categories.get(record.id)
          .then(category => {
            Object.keys(obj).forEach(key =>{
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
