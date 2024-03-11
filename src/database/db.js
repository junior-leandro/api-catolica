const mongoose = require('mongoose');

const conectDatabase = () => {
    console.log("Wait connection on to the Database");

    mongoose.connect(
        "mongodb+srv://contatojr:<password>@cluster0.5ee0gus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

module.exports = conectDatabase;