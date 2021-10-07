const mongoose = require("mongoose");


mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.et9fo.mongodb.net/projet-chat",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        }
    )
    .then(() => console.log('connect to mongoDB'))
    .catch((err) => console.log("Failed to connect to mongoDB", err));