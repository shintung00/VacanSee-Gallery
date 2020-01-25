const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xillow'); //name of database

let houseSchema = mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  address: {type: String, required: true, unique: true},
  images: [{type: String}],
  description: {price: Number, bdrm: Number, bthrm: Number, sqft: Number}
});

let House = mongoose.model('House', houseSchema);

let save = (individualHouse) => {

  var newHouse = House({
    id: individualHouse.id,
    address: individualHouse.address,
    images: individualHouse.images,
    description: individualHouse.description
  });
  newHouse.save((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('House created!');
      res.send(success);
    }
  })
};

module.exports = {
  save: save
}