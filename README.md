#  Employee Management Web App

A responsive **Angular + Bootstrap** web application for managing employee data with full **CRUD operations**.

---

##  Features

###  1. Login Page
- Fields:
  - **Email**
  - **Password**
- Validations:
  - Required fields
  - Proper email format
- Behavior:
  - On successful login, redirects to the Home page

---

###  2. Home Page

####  Employee List
- Displays employee data as **Bootstrap cards**
- Each card includes:
  -  Name
  -  Email
  -  Salary
  -  Image (centered & circular)

####  CRUD Operations

- **Create Employee**
  - Opens a Bootstrap modal
  - Reactive form with: Name, Email, Image URL, Salary
  - Validations: Required, valid email, numeric salary
  - On submit: stores data in **local storage** and refreshes list dynamically

- **Read Employee**
  - Fetches and displays data from local storage

- **Update Employee**
  - Reuses the same modal/form component with pre-filled data
  - Edits data and updates local storage

- **Delete Employee**
  - Deletes the selected employee and updates the view instantly

---

###  Search Functionality
- A **search bar** filters employees by **name** or **email** in real time

---

##  Technology Stack

| Category         | Technology       |
|------------------|------------------|
| Frontend         | Angular +9       |
| UI Styling       | Bootstrap 5      |
| Forms            | Angular Reactive Forms |
| Data Persistence | Local Storage (JSON simulation) |

---

##  UI/UX Highlights

- Fully responsive layout (mobile, desktop)
- Bootstrap cards, modals, and form controls
- Disabled submit button until form is valid
- Centered "No Employees" message when list is empty
- Clean and modern user interface

---

##  Functional Overview

- All forms use Angular **Reactive Forms** with validation
- Modals opened via Bootstrap (`data-bs-toggle`, `data-bs-target`)
- Forms are reused for both Create and Update operations
- Form state and submission handled dynamically
- Error handling and inline validation feedback
- Live updates with **no page reloads**

---

## Additional Features

- SweetAlert2: This project uses the SweetAlert2 package to provide clean and user-friendly alert and confirmation dialogs, especially for delete confirmations.

- NotFound Component: A dedicated 404 page component (NotFoundComponent) is implemented to gracefully handle undefined routes and improve user navigation  experience.

##  Project Structure (Simplified)

