
const FoodModel = require('./food-schema.js');

class Food {

    create(info) {
        const newFood = new FoodModel(info);
        return newFood.save();
    }

    get() {
        return FoodModel.find({});
    }

    clear() {
        // DANGER: this is VERY destructive
        return FoodModel.deleteMany({});
    }


}

module.exports = Food;
