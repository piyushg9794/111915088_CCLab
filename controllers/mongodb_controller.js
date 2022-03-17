const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        mongoose.connect("mongodb://localhost:27017/111915088_CC", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err) => {
            if(err) throw err;
            console.log("DB UP");
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB ;