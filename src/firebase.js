import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  push,
} from "firebase/database";

const firebaseConfig = {
  projectId: "utak-react-dt",
  projectName: "Utak React DT",
  projectNumber: "60704331598",
  databaseURL:
    "https://utak-react-dt-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, update, remove, onValue, push };
