import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4VNkiEJZXI9d-gg6_qxmbhHkiC0y0F-k",
  authDomain: "mariowms-7d1c7.firebaseapp.com",
  projectId: "mariowms-7d1c7",
  storageBucket: "mariowms-7d1c7.appspot.com",
  messagingSenderId: "272217450320",
  appId: "1:272217450320:web:2516a1d6895f17d0fe2e55",
  measurementId: "G-JB9WHLYMSR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)