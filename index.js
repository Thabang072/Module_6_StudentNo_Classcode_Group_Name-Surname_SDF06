import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM0qpnH4lhC9qSwNwV6NZjVDvjOsc4WJc",
  authDomain: "sdf06-7b472.firebaseapp.com",
  databaseURL: "https://sdf06-7b472-default-rtdb.firebaseio.com",
  projectId: "sdf06-7b472",
  storageBucket: "sdf06-7b472.appspot.com",
  messagingSenderId: "465521063586",
  appId: "1:465521063586:web:d12e55c993eb63fcdf49fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addItemToCart(item) {
  try {
    const docRef = await addDoc(collection(db, "cart"), item);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ""; // Clear the container before displaying new items

  const querySnapshot = await getDocs(collection(db, "cart"));
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsContainer.appendChild(itemElement);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', () => {
      const itemDetails = {
        name: button.parentElement.querySelector('span').textContent.split(' - ')[0],
        price: parseInt(button.parentElement.querySelector('span').textContent.split(' - $')[1]),
        quantity: 1
      };
      addItemToCart(itemDetails);
    });
  });

  document.querySelector('button#display-cart').addEventListener('click', displayCartItems);
});
