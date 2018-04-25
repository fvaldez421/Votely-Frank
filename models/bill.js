var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object
var BillSchema = new Schema({
	name: {
		type: String,
		unique: false
	},
	bill_id: {
		type: String,
		unique: true
	},
	sponsor_name: {
		type: String,
		unique: false
	},
	sponsor_state: {
		type: String,
		unique: false
	},
	sponsor_party: {
		type: String,
		unique: false
	},
	sponsor_title: {
		type: String,
		unique: false
	},
	congressdotgov_url: {
		type: String,
		unique: false
	},
	govtrack_url: {
		type: String,
		unique: false
	},
	summary_short: {
		type: String,
		max: 2000,
		unique: false
	},
	summary: {
		type: String,
		max: 10000,
		unique: false
	},
	active: {
		type: Boolean,
	},
	introduced_date: {
		type: String,
		unique: false
	},
	latest_major_action: {
		type: String,
		unique: false
	},
	latest_major_action_date: {
		type: String,
		unique: false
	},
	votes_yes: {
		type: Array
	},
	votes_no: {
		type: Array
	},
	votes_undecided: {
		type: Array
	}
	
});

// Creates model for schema using Mongoose
var Bill = mongoose.model("Bill", BillSchema);

// export User Model
module.exports = Bill; 