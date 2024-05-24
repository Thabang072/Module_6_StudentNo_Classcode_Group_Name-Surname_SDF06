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
Solution:
Ensured that the JavaScript file was correctly linked in the HTML.
Added console log statements to debug and verify that event listeners were properly attached.
Corrected any logical errors in the JavaScript code for adding and displaying items.
3. Displaying Cart Items
Problem: Items were not appearing on the screen after being added to the cart.
Solution:
Verified that items were successfully being stored in Firestore.
Ensured that the function to fetch and display items was called after adding an item.
Corrected the DOM manipulation logic to properly display items on the webpage.
4. Testing
Problem: Testing the integration with Firebase to ensure data was correctly being added and fetched.
Solution:
Used Firebase console to verify the presence and structure of the data.
Performed multiple test runs to ensure consistent behavior.
Conclusion
Despite facing several challenges during the development process, the Shopping Cart application is now functional. The project helped in gaining hands-on experience with Firebase integration, debugging JavaScript, and handling DOM manipulations. Moving forward, I plan to add more features such as user authentication, item quantity updates, and improved error handling.

Future Improvements
User Authentication: Implement user authentication to allow users to have personalized carts.
Quantity Updates: Allow users to update the quantity of items in the cart.
Error Handling: Enhance error handling to provide better feedback to the user.
UI Improvements: Improve the user interface for a better user experience.
This project has been a valuable learning experience in web development and cloud database integration. I look forward to building upon this foundation and adding more advanced features in the future.
