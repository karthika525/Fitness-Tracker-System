Weight loss Management System 

This is a React + Redux single-page app that stores everything in localStorage
(no external API). 
Main responsibilities:
• Auth: register, login, logout (stored in Redux and localStorage).
• Weights: add/edit/delete a daily weight record (one per user per day), 
store date/time, list with pagination, filter between dates to compute 
weight loss.
• Routing: public pages (Home, Login, Register) and a protected /weights
page (requires login).
• UI: navbar, forms, list, inline editing, filter, and pagination.

Key principles:
• All persistent data lives in localStorage.
• Redux is the single source of truth while the app is running.
• Components read from Redux via useSelector and update state via 
dispatch.


Directory Structure

src/
├── components/
│ ├── Navbar.js
│ ├── auth/
│ │ ├── Register.js
│ │ ├── Login.js
│ ├── weights/
│ │ ├── AddWeight.js
│ │ ├── WeightList.js
│ │ ├── WeightFilter.js
│ ├── pagination/
│ │ └── Pagination.js
│ ├── ProtectedRoute.js
│ ├── AutoLogin.js
│ └── Home.js
│
├── redux/
│ ├── store.js
│ ├── authSlice.js
│ └── weightSlice.js
│
├── router.js
├── App.js
├── App.css
├── index.js
└── index.cs

The Weight Loss Management Site features:

1. User Signup: The user can sign up in the website.
2. Add Weight: Logged in users can add their weight. The current date should also be automatically added.
3. Unique Daily Weight Entry: The logged in user should be able to add only 1 weight per day, after which it should show an error.
4. View Weight List: Logged in users can view the list of weights they added, along with the added time.
5. Pagination: The listing page should have pagination.
6. Weight Loss Calculation: Users should be able to find the weight loss between two dates.

Screenshots
<img width="1266" height="888" alt="signup" src="https://github.com/user-attachments/assets/7da3d77f-94f1-4cfd-9a5b-940d819c8a33" />
<img width="1160" height="780" alt="login" src="https://github.com/user-attachments/assets/73d12b2f-be8c-4af1-ad37-5ba2520feff0" />
<img width="1124" height="846" alt="weight_edit" src="https://github.com/user-attachments/assets/d02728b2-5f8e-427e-b624-b45dbe8e4ef8" />
<img width="929" height="882" alt="calculation" src="https://github.com/user-attachments/assets/c5fa9a3c-f0a9-4be4-bd63-21a7ad51af7f" />

7. Edit/Delete Weight: Logged in users can edit or delete the weight details.
8. Logout: Logged in users can logout of the website.
