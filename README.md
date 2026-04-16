# ClearLabel Front-End
## Overview
ClearLabel is a web-based application designed to improve transparency in food ingredient analysis. The system allows different types of users to interact with product data while providing analytical tools for monitoring usage patterns and engagement.

The application is built using React and follows a structured approach based on the **State Design Pattern** to manage different user roles.

---
## System Roles

### Guest

### User

### Admin
- Access a dashboard with analytical insights
- Filter data between **Guest** and **User**
- Monitor key metrics such as:
  - Saved images
  - Positive and negative interactions
  - Ingredient trends
  - Summary insights
- Profile interface with modal interaction

### Company

## Key Features
- Role-based rendering using the State Design Pattern
- Dynamic UI updates based on user interaction
- Filtering system for comparing different user types
- Modular component-based design
- Interactive admin dashboard

---

## Technologies Used
- React (Class Components)
- JavaScript (ES6)
- Inline Styling (CSS-in-JS)


## Installation

1. Clone the repository:

git clone https://github.com/SWE363-ClearLabel/front-end.git

2. Navigate to the project directory:
cd front-end
3. Install dependencies:
npm install
---
## Usage
Run the development server:
npm run dev
Then open your browser and navigate to:
http://localhost:5173/
Use the role buttons (Guest, User, Admin, Company) to switch between system states and explore the application features.
---
## Design Approach
The user interface is developed based on the provided wireframes and design references.  
The focus was on:
- Clear layout and readability
- Reusable components
- Interactive and responsive elements

---

## Team Contributions

- Khalid Alotaibi **Admin:** Dashboard implementation, filtering logic, UI components, state handling  

- Saad Alshlowiy **Company Guest** --> primary driver of the frontend UI components, panel routing, and initial repository setup. commits can be grouped into four main areas:

Routing & State Management: successfully wired up the navigation flow, particularly the transitions from the Guest state to the Company, Admin, and User states using the CurrentPanel architecture.

The Guest Panel: built out the first draft of the Guest interface, spending significant time perfecting the interactive ProfileComponent (making it clickable, fixing the blue highlight text-selection bug, and reusing it across different headers).

The Corporate Panel & Dashboards: developed the first drafts of MainPanelCorporate, Dashboard_1,Dashboard_2 , and Dashboard_3, which included integrating a flexible Pie Chart component
