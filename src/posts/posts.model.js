const mongoose = require('mongoose');
const { Schema } = mongoose;
// need to install npm using npm install
// need to nodemon using npm install -D nodemon

const postSchema = new Schema({
  Hospital_name: {
    type: String,
    required: true,
  },
  Hospital_Location: {
    type: String,
    required: true,
  },
  blood_stock: {
    type: String,
      validate: {
        validator: function (v) {
          return /(A|B|AB|O)[+-]/.test(v);
        },
        message: (props) => `${props.value} is not a valid Blood Group!`,
      }
  },
  Hospital_contact_number: {
    type: String,
    required: true,
  },
  Hospital_Branch: {
    type: String,
    required: true,
  },
  Hospital_fee: {
    type: String,
    required: true,
  },
  

},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Post', postSchema);