import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/* =========================
   PRODUCTS (REMOTE SOURCE)
========================= */

export async function fetchProducts(category = null) {
  const ref = collection(db, "products");

  const snap = await getDocs(ref);

  let items = snap.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));

  if (category && category !== "todos") {
    items = items.filter(p => p.category === category);
  }

  return items;
}

export async function fetchProductById(id) {
  const snap = await getDoc(doc(db, "products", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/* =========================
   ORDERS (REMOTE STORAGE)
========================= */

export async function createOrder(order) {
  return await addDoc(collection(db, "orders"), order);
}

export async function fetchOrders() {
  const snap = await getDocs(collection(db, "orders"));

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));
}
