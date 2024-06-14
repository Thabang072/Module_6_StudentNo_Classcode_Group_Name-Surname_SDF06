Shopping Cart Application - Progress and Challenges
Project Overview
The Shopping Cart application was developed to allow users to add items to a cart, store the items in a Firebase Firestore database, and display the items on the webpage. The main features include:

Adding items to the cart.
Storing cart items in Firebase Firestore.
Displaying cart items from Firebase Firestore on the webpage.
Progress

1. Setting Up Firebase
Successfully created a Firebase project and configured the web app with Firebase SDK.
Initialized Firebase in the project and connected to Firestore.

2. Developing the User Interface
Created a simple HTML layout with input fields for item name and price.
Added buttons for adding items to the cart and displaying cart items.
Styled the application using CSS for a clean and user-friendly interface.

3. Implementing Functionality
Implemented the functionality to add items to the cart and store them in Firestore.
Added functionality to fetch and display cart items from Firestore.
Implemented event listeners for button clicks to handle adding and displaying items.
Challenges

1. Firebase Configuration Issues
Problem: Encountered an error stating that the API key was missing.
Solution: Ensured that the Firebase configuration object was correctly set up with all necessary fields, including the API key, auth domain, and project ID.

2. Debugging JavaScript

Problem: Initially, the "Add to Cart" button did not add items to the cart or display them on the screen.
Solution: Ensured correct linking of the JavaScript file in the HTML, added console log statements for debugging, and corrected logical errors in the code.

3. Displaying Cart Items
Problem: Items were not appearing on the screen after being added to the cart.
Solution: Verified data storage in Firestore, ensured the function to fetch and display items was called after adding an item, and corrected DOM manipulation logic.

4. Testing
Problem: Testing integration with Firebase to ensure data was correctly added and fetched.
Solution: Used Firebase console to verify data presence and structure, and conducted multiple test runs for consistent behavior.

Future Improvements
User Authentication: Implement personalized carts.
Quantity Updates: Allow users to update item quantities.
Error Handling: Enhance error feedback.
UI Improvements: Improve user experience.
