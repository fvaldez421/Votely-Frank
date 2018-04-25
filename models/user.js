var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object
var UserSchema = new Schema({
	userId: {
		type: String,
		unique: true,
		required: false

	},
	userName: {
		type: String,
		unique: true,
		required: false
	},
	age: {
		type: String,
		unique: true,
		required: false
	},
	gender: {
		type: String,
		unique: true,
		required: false
	},
	education: {
		type: String,
		unique: true,
		required: false
	},
	income: {
		type: String,
		unique: true,
		required: false
	},
	race: {
		type: String,
		unique: true,
		required: false
	},
	region: {
		type: String,
		unique: true,
		required: false
	}
});

// Creates model for schema using Mongoose
var User = mongoose.model("User", UserSchema);

// export User Model
module.exports = User; 