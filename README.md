# ClearLabel Application

## Overview
ClearLabel is a web-based system designed to enhance transparency in food ingredient analysis. The platform enables different user roles to interact with product data while providing analytical insights into user behavior and engagement.

The system consists of a React-based front-end and a Node.js + Express + MongoDB back-end, following a structured and modular architecture.

---

## System Roles

### Guest
- Basic access to product information
- Limited interaction with system features

### User
- Full interaction with product analysis features
- Enhanced engagement and tracking

### Admin
- Access to analytics dashboard
- Filter data between Guest and User
- Monitor:
  - Saved images
  - Positive and negative interactions
  - Ingredient trends
  - Summary insights
- Profile modal with sign-out functionality

### Company
- Access to corporate-level dashboard and insights

---

## Key Features

### Front-End
- Role-based rendering using the State Design Pattern
- Dynamic UI updates based on user interaction
- Modular component-based architecture
- Interactive admin dashboard

### Back-End
- RESTful API implementation using Express.js
- MongoDB database integration
- Data validation and error handling
- Role-based analytics filtering (guest / user)
- Seeded data for testing and demonstration

---

## Technologies Used

### Front-End
- React (Class Components)
- JavaScript (ES6)
- CSS (Inline Styling)

### Back-End
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- nodemon

---

## Installation

### 1. Clone the repository
git clone https://github.com/SWE363-ClearLabel/front-end.git
cd front-end
### 2. Front-End setup
npm install
npm run dev
Open: http://localhost:5173/
### 3. Back-End setup
cd backend
npm install
Create a .env file inside backend:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/clearlabel
### 4. Run MongoDB
mongod
### 5. Seed database
npm run seed
### 6. Start server
npm run dev
Open: http://localhost:5000/

---

## Admin API Endpoints

### Get Dashboard
GET /api/admin/dashboard?roleType=user
### Get Positive Clicks
GET /api/admin/positive-clicks?roleType=user
### Get Negative Clicks
GET /api/admin/negative-clicks?roleType=user
### Get Classification
GET /api/admin/classification?roleType=user
### Get Top Ingredients
GET /api/admin/top-ingredients?roleType=user

---

## Validation Example
GET /api/admin/dashboard?roleType=admin
Response:
{
  "message": "roleType must be either guest or user"
}

---
## Usage
- Use role buttons (Guest, User, Admin, Company) to switch views
- Admin dashboard provides analytics with filtering
- Backend APIs can be tested using browser or Postman

---

## Design Approach
- Structured using the State Design Pattern
- Focus on modular, reusable components
- Clean separation between front-end and back-end logic
- Scalable architecture for future integration

---


## Team Contributions

- Khalid Alotaibi **Admin:** Dashboard implementation, filtering logic, UI components, state handling 

- Hashim Alramadhan Regular **User Portal:** REST API route implementation for User Portal, frontend-backend data pipeline, and React state handling for the User Dashboard

- Saad Alshlowiy **Company Guest** --> primary driver of the frontend UI components, panel routing, and initial repository setup. commits can be grouped into four main areas:

Routing & State Management: successfully wired up the navigation flow, particularly the transitions from the Guest state to the Company, Admin, and User states using the CurrentPanel architecture.

The Guest Panel: built out the first draft of the Guest interface, spending significant time perfecting the interactive ProfileComponent (making it clickable, fixing the blue highlight text-selection bug, and reusing it across different headers).

The Corporate Panel & Dashboards: developed the first drafts of MainPanelCorporate, Dashboard_1,Dashboard_2 , and Dashboard_3, which included integrating a flexible Pie Chart component
