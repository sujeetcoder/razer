const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true)


const connectMongo = async () => {
    return  mongoose.connect( process.env.DB_URL, {dbName: 'razer'}, {useNewUrlParser: true, useUnifiedTopology: true}, async(req,res) =>{
          try {
              console.log("conncted to database")
          } catch (err) {
              console.log(err)
          }
    })
  }


  module.exports = connectMongo