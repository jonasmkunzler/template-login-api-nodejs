const mongoose = require('mongoose')
const url_mongo = `${process.env.MONGO_URL}`

function connect() {
  
  
  main().catch(err => console.log(err));
  
  async function main() {
      await mongoose.connect(url_mongo)
    }

  const db = mongoose.connection
  db.once('open', () => {
    console.log('Conectado ao MongoDB')
  })
    
}
module.exports = {
  connect
}
