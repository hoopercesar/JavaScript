const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

const client = new MongoClient(uri);
const dbname = "Chat";
const collection = "conversaciones";

const accountsCollection = client.db(dbname).collection(collection);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Conexión a la DB ${dbname} con éxito`);

    // Lista las bases de datos en el cluster
    const dbs = await client.db().admin().listDatabases();
    // console.table(dbs.databases);
  } catch (err) {
    console.error(`Error de conección a la DB, ${err}`);
  }
};

const sampleAccounts = { name: "euripides" };
// const sampleAccounts = { speak: { $eq: 1 } };

const main = async () => {
  try {
    await connectToDatabase();
    let resultado = await accountsCollection.find().toArray();
    resultado.map((elem) => {
      console.log(elem.mensaje);
    });
  } catch (e) {
    console.error(`Error de conexión, ${e}`);
  } finally {
    await client.close();
  }
};

main();
