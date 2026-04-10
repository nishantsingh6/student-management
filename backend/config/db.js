 const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then( () => {
        console.log('DB Connected successfully');
    }).catch ((error) => {
        console.log(error);
        console.log('GOT ERROR TO CONNECT DB');
        process.exit(1);
    })
};

module.exports = connectDB;