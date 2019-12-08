const dotenv=require("dotenv")
dotenv.config()
let MongoClient = require("mongodb").MongoClient;
let db;
const client = new MongoClient(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ComplexApp").collection("users");
  module.exports = client;
  const app = require("./app");
  app.listen(process.env.PORT);
  client.close();
});









































