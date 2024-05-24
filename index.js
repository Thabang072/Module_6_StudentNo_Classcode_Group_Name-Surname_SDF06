// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

// Function to add item to cart
async function addItemToCart(item) {
  try {
    const docRef = await addDoc(collection(db, "cart"), item);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Function to display cart items
async function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = "";

  try {
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(itemElement);
    });
  } catch (error) {
    console.error("Error displaying cart items: ", error);
  }
}

// Event listener for "Add to Cart" button
document.getElementById('add-to-cart').addEventListener('click', async () => {
  const itemName = document.getElementById('item-name').value.trim();
  const itemPrice = parseFloat(document.getElementById('item-price').value);

  if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
    const itemDetails = {
      name: itemName,
      price: itemPrice,
      quantity: 1
    };
    await addItemToCart(itemDetails);
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    displayCartItems();
  } else {
    alert("Please enter a valid item name and price.");
  }
});

// Display cart items on page load
displayCartItems();
