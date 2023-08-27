const mongoose = require('mongoose');


const dbconnection = () => {

    mongoose.connect(process.env.dburl)
        .then((con) => console.log(`MongoDB is connected to the host : ${con.connection.host}`))
        .catch((err) => {
            console.log(err)
        })

}

module.exports = dbconnection   