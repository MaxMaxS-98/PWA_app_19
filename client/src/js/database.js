// this will import the openDB method from the idb library
import { openDB } from 'idb';

// this will create a new database called jate
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// this will add a new object to the database with the key 'jate' and the value 'value'
export const putDb = async (value, id) => {
  console.log ('putDb not implemented');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({ id:1, value });
  await req;
  console.log('putDb completed');
}


// this will get the value of the object with the key 'jate'
export const getDb = async () => {
  console.log('getDb not implemented');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.getAll(1);
  await req;
  console.log('getDb completed');
//   const result = await req;
// return result?.value
}
//this will initialize the database
initdb();
