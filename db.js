const mongoose = require('mongoose');


const connectDB = async () =>
{
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect("mongodb+srv://21951a0549:test@cluster0.1bqs9zx.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
            });
            console.log('connected to database...');
    }
    catch (err) {
        console.log(err.message);
        console.log('db error');
        process.exit(1); 
    }
};

module.exports = connectDB;