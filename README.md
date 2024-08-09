# Avenue-The Blog App

Avenue-The Blog App is a comprehensive blogging platform developed using the MERN stack (MongoDB, Express.js, React, and Node.js). This application provides a seamless experience for users to create, read, update, and delete blog posts. It includes user authentication, Google authentication, and various interactive features such as commenting and liking posts. Additionally, it offers a dedicated admin view for monitoring user activities.

## Features

- **CRUD Operations**: Users can create, read, update, and delete their blog posts.
- **User Authentication**: Secure login and registration system.
- **Google Authentication**: Users can log in using their Google accounts.
- **Post Interaction**: Users can edit their posts, comment on other posts, and like posts.
- **Admin Dashboard**: A dedicated view for administrators to monitor user activities on the platform.

## Live Demo

You can view the live application at [Avenue-The Blog App](https://avenue-the-blog-app.onrender.com).

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MayankVerma1702/Avenue-The-Blog-App.git
   cd avenue-the-blog-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   npm install --prefix client
   ```

3. **Environment Variables**:
   - Create a `.env` file in the `api` directory and add the necessary environment variables:
     ```plaintext
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     VITE_FIREBASE_API_KEY=your_api_key
     ```

4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

5. **Build the client**:
   ```bash
   npm run build
   ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

We welcome contributions to improve Avenue-The Blog App. If you have any suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the ISC License.

---

Thank you for using Avenue-The Blog App! We hope you enjoy your experience.
