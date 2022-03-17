var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PiyushGuptaSalarySchema = new Schema({
    employeeNumber: String,
    jobRole: String,
    monthlySalary: Number,
    yearlyBonus: Number,
}, {
    timestamps: true
});


const PiyushGuptaSalarySchema = mongoose.model('PiyushGuptaSalarySchema', PiyushGuptaSalarySchema);
module.exports = PiyushGuptaSalarySchema;
