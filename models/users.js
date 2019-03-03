var mongoose = require('../config/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
	email: {
        type: String,
        unique: true,
        required: true
    }
});

exports.Users = mongoose.model('user', schema);