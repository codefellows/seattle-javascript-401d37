'use strict';

// Build this first, Without Supergoose ...
// const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/food';
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Later, Add Supergoose. What's the difference?
require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');
const food = new Food();

beforeEach(food.clear);

describe('Food collection', () => {
    it('can create a new food', async () => {
        const hummus = { name: 'hummus', calories: 200, type: 'protein' };
        const createdHummus = await food.create(hummus);
        expect(createdHummus._id).toBeDefined();

        // NOTE use compareProps if you like
        expect(createdHummus.name).toBe('hummus');
        expect(createdHummus.calories).toBe(200);
        expect(createdHummus.type).toBe('protein');
    });

    it('can get all foods', async () => {
        const hummus = { name: 'hummus', calories: 200, type: 'protein' };
        const date = { name: 'date', calories: 25, type: 'fruit' };
        await food.create(hummus);
        await food.create(date);
        const foods = await food.get();
        expect(foods.length).toBe(2);

        compareProps(hummus, foods[0]);
        compareProps(date, foods[1]);
    });
});

function compareProps(a, b) {
    for (const key in a) {
        expect(a[key]).toBe(b[key]);
    }
}
