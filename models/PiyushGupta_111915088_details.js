var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PiyushGuptaDetailSchema = new Schema({
    employeeNumber: String,
    firstName: String,
    lastName: String,
    dob: Date,
    contact: String,
    password: String,
}, {
    timestamps: true
});


const PiyushGuptaDetailSchema = mongoose.model('PiyushGuptaDetailSchema', PiyushGuptaDetailSchema);
module.exports = PiyushGuptaDetailSchema;
