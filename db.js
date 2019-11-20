const dotenv=require("dotenv")
dotenv.config()
let MongoClient = require("mongodb").MongoClient;
let db;
const client = new MongoClient("mongodb://zuich:mwn0u6oUs2qUdbYC@cluster0-shard-00-00-lglvb.mongodb.net:27017,cluster0-shard-00-01-lglvb.mongodb.net:27017,cluster0-shard-00-02-lglvb.mongodb.net:27017/ComplexApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("ComplexApp").collection("users");
  module.exports = client.db();
  const app = require("./app");
  app.listen(process.env.PORT);
  client.close();
});




























