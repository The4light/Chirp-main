const mongoose = require('mongoose');
const URI  = process.env.MONGO_URI;


const connectDB = async () => {
    try{
        await mongoose.connect(URI)

        const db = mongoose.connection;
        
        db.on('error', (err) => {
            console.error ("Mongoose connection error", err);
        });

        db.once('open', () => {
            console.log("Database sucessfully opened");
        })
        console.log("✅ Sucessfully connected");
    }
    catch(err){
        console.log(`❌ COULD NOT CONNECT SUCCESSFULLY x${err.message}`);

        process.exit(1)
    }
};

module.exports = connectDB;
