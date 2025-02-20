# Project Description: Travel Planner

### Overview

The Travel Planner is a React-based web application designed to help users organize their trips efficiently. Users can add, edit, and delete travels, as well as manage activities within each travel. The project integrates Redux Toolkit for global state management and localStorage for data persistence.

### Features

1. Travel Management

   Add new travels with details such as title, location, and date.
   Edit and delete existing travels.

2. Activity Management

   Each travel can have multiple activities associated with it.
   Users can add, edit, and remove activities within a selected travel.

3. State Management with Redux Toolkit

   Global State: All travel and activity data is managed using Redux.
   Preloaded State: Travels are retrieved from localStorage on application startup.
   Persistence: Travels are automatically saved to localStorage when changes occur.

4. Modal System for User Interactions

   A modal window is used for adding and editing travels and activities.
   The modal state (isOpen, modalType, data) is stored in Redux for centralized control.

### Technical Implementation

    1. React: Component-based architecture for UI management.
    2. React Router: Efficient client-side navigation using createBrowserRouter, RouterProvider NavLink
    3. Redux Toolkit: Efficient state handling via configureStore and createSlice.
    4. localStorage: Data persistence across sessions.

### File Structure

    /components – Contains reusable UI components like TravelForm, ActivityModal, etc.
    /features/redux – Redux slices (travelSlice.js) for state logic.
    /store – Configures Redux store with preloaded state from localStorage.
    /pages – Main pages where travels and activities are displayed.

### How It Works

    State Initialization:
        When the app loads, the store retrieves travels from localStorage.
        If no saved travels exist, an empty state is initialized.

    User Interaction:
        The user can create travels, add activities, and modify existing data.

    Data Persistence:
        Every change in Redux state triggers a save operation to localStorage.

## How to Run the Project

### Clone the Repository:

    git clone <repository-url>
    cd <project-folder>

### Install Dependencies:

    npm install

### Run the Development Server:

    npm run dev
    This will start a local development server, typically on
    http://localhost:5173
