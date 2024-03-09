const mongoose = require('mongoose');

const conectDatabase = () => {
    console.log("Wait connection on to the Database");

    mongoose.connect(
        "MONGODB CONNECTION",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

module.exports = conectDatabase;