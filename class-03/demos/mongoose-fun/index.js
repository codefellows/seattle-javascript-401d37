
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model('Cat', {
  name: String
});

async function createCat(name) {

  const kitty = new Cat({ name: name });

  await kitty.save();

  console.log('meow');

  const retreivedCat = await Cat.findById(kitty._id);

  console.log(retreivedCat.name);
}

createCat('Zildjian');


