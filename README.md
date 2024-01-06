# SkillLab: E-commerce Platform for Courses

SkillLab is an innovative e-commerce web application tailored to provide a diverse array of courses. Users can seamlessly navigate through different course categories, add courses to their cart, and enroll without schedule conflicts. Admin users have the authority to manage categories, courses, and associated category images. Below, you'll find an overview of the primary features and technologies utilized in SkillLab.

## Entity-Relationship Diagram (ERD)

![ERD Example](https://i.imgur.com/aKDpUTr.png)

## Wireframes


![Wireframe 1](https://i.imgur.com/rmWeTWl.png)


![Wireframe 2](https://i.imgur.com/wqIFSmy.png)


![Wireframe 2](https://i.imgur.com/4wRpTLk.png)


![Wireframe 2](https://i.imgur.com/vZj8hxb.png)


![Wireframe 2](https://i.imgur.com/M4HwSPJ.png)


## Trello Link
[Trello Board](https://trello.com/b/wOMz7tZ5/sei7-project-3)


# User Stories

## Admin Functionality
1. **As an Administrator,**
   - I want to add new courses, provide comprehensive details, setting prices, and assigning relevant categories.
   - *Objective:* Expand the course offerings and maintain diversity.

2. **As an Administrator,**
   - I aim to ensure authorized access during user sign-up, log-in, and log-out processes.
   - *Objective:* Uphold security measures for user accounts.

## User Experience
3. **As a User,**
   - I seek a seamless browsing experience without page refresh when interacting with forms or other elements.
   - *Objective:* Enhance user interaction without interruptions.

4. **As a Visitor,**
   - I desire a user-friendly interface to easily comprehend the website's purpose and details.
   - *Objective:* Provide intuitive navigation for new visitors.

5. **As a User,**
   - I aim to effortlessly browse and search courses by category, facilitating the discovery of courses aligned with my interests.
   - *Objective:* Facilitate easy exploration based on user preferences.

6. **As a User,**
   - I wish to manage courses in my cart, including the option to remove items as necessary, maintaining control over my shopping experience.
   - *Objective:* Grant users flexibility and control in their cart management.

7. **As a User,**
   - I intend to add courses to my cart, simplifying the process of tracking and managing desired courses.
   - *Objective:* Enable efficient tracking of preferred courses for potential purchase.

8. **As a User,**
   - I seek comprehensive course details such as title, description, price, and instructor information to make informed decisions regarding enrollment.
   - *Objective:* Provide necessary information for informed course selection.

## Administrator Account Management
9. **As an Administrator,**
   - I need access to view and manage user accounts, including user information, to offer support and ensure a seamless user experience.
   - *Objective:* Facilitate user management for improved support and experience.


## Key Features

### User Interface
- Explore diverse course categories and available courses within each category.
- Add multiple courses to the cart.
- Enroll in courses without conflicting schedules.
- Effortlessly edit personal profile details.

### Admin Control
- Create, edit, and remove course categories and individual courses.
- Utilize Multer to upload and manage category images for an enriched visual experience.

### Cart Functionality
- Intuitive cart system for adding and managing courses.
- Calculation of the total cost of selected courses at checkout.
- Confirmation page before finalizing course enrollment.
- Prevention of adding duplicate courses to the cart.

## Technologies Used:
- Nodejs
- Express
- MongoDB
- React
- Bootstrap

## Backend Dependencies

- **bcrypt**: Secure password hashing for enhanced data protection.
- **dayjs**: Efficient date and time manipulation library.
- **dotenv**: Simplified management of environment variables.
- **express**: Empowers the backend with the Node.js framework.
- **express-ejs-layouts**: Streamlined layout support for Express.
- **jsonwebtoken**: Implementation of JSON Web Tokens for user authentication.
- **jwt-decode**: Decoding of JWT tokens on the server-side.
- **method-override**: Middleware for HTTP method overriding.
- **mongoose**: Robust MongoDB object modeling.
- **multer**: Streamlining file uploads, particularly for images.

## Frontend Dependencies

- **axios**: Facilitates HTTP requests for browser and Node.js.
- **bootstrap**: Comprehensive UI framework ensuring responsive design.
- **bootstrap-icons**: Extensive library for seamless icon integration.
- **jwt-decode**: Aids in decoding JWT tokens on the client-side.
- **react**: Dynamic library for crafting user interfaces.
- **react-bootstrap**: React components aligned with Bootstrap standards.
- **react-dom**: Smooth integration of React elements into the DOM.
- **react-modal**: Provides an accessible modal dialog component for React.
- **react-router-dom**: Enables efficient routing in React applications.
- **react-scripts**: Configures and provides scripts for React applications.
- **web-vitals**: Measures and reports web performance metrics.


## Getting Started

- Clone the SkillLab repository to your local environment.
- Install required dependencies using `npm install`.
- Start the application by running `npm start`.


