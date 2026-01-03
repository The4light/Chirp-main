require('dotenv').config();
const app = require('./app');// call the app ( const app )
const PORT = process.env.PORT || 3000;// call the port const PORT
const connectdb = require('./config/db.js')

const connect = async () => {
    try{
        await connectdb();

        app.listen(PORT, (req, res) => {
            console.log(`✅ Backend running sucessfully on port ${PORT}`);
        }); // listen for where the port runs using app.listen
    }
    catch(err){
        console.log(`❌❗ Failed to connect successfully ${err.message}`);
    }
};

connect();
