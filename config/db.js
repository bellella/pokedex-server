import { MongoClient } from 'mongodb';

const dbName = process.env.DB_NAME;
export let db;
export let userCollection;
export let pokemonCollection;
export let userPokemonCollection;
  
export function config() {
    MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
    .then((client) => {
      db = client.db(dbName);
      console.log(`Connected to MongoDB: ${dbName}`);
  
      // collections here!
      userCollection = db.collection('users');
      pokemonCollection = db.collection('pokemons');
      userPokemonCollection = db.collection('user_pokemons');
    })
    .catch((err) => console.error('Failed to connect to MongoDB', err));
};