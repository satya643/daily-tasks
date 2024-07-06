# Daily Task Application

## Introduction
The Daily Task Application is a web-based tool designed to help users efficiently manage their daily tasks. Users can add, view, edit, and delete tasks in a secure environment with a user-friendly interface.

## Features

### User Management
- **User Signup**: Users can sign up to create an account and start managing their tasks.
- **JWT Authentication**: A JSON Web Token (JWT) is generated for each user upon login to ensure secure authentication and data protection.

### Task Management
- **View Tasks**: Users can view all tasks they have created. Only tasks associated with the logged-in user are displayed.
- **Add Task**: Users can add new tasks by providing a title, description, and due date. The system automatically populates additional fields such as task status and creation date.
- **Edit Task**: Users can edit tasks to mark them as completed by toggling the "isCompleted" button.
- **Delete Task**: Each task has an individual delete button. Clicking this button will delete the specific task.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [MongoDB](https://www.mongodb.com/) (for storing tasks and user data)

### Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/satya643/daily-tasks.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd daily-tasks
    ```
3. **Install Dependencies**:
    ```bash
    npm install
    ```
4. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/daily-tasks
    JWT_SECRET=your_jwt_secret
    ```
5. **Start the frontend web application**:
    ```bash
    npm run start
    ```
6. **Start the backend node server application**:
    ```bash
    node index.js
    ```

## Usage

### Sign Up
1. Navigate to the signup page.
2. Enter your details to create an account.
3. Log in with your credentials to start managing your tasks.

### Manage Tasks
- **View Tasks**: Access the "View Tasks" page to see all your tasks.
- **Add Task**: Click the "Add Task" button and fill in the required fields (title, description, due date).
- **Edit Task**: Click on a task to edit its details or mark it as completed.
- **Delete Task**: Click the delete button next to a task to remove it from your list.

## Security

- **JWT Authentication**: Ensures that only authenticated users can access and manage their tasks.

## Contributing

1. **Fork the Repository**:
    ```bash
    git clone https://github.com/satya643/daily-tasks.git
    ```
2. **Create a Feature Branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit Your Changes**:
    ```bash
    git commit -m "Add your commit message"
    ```
4. **Push to the Branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Open a Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [satyaaa768@gmail.com](mailto:satyaaa768@gmail.com).

---

This README file provides an overview of the Daily Task Application, including installation instructions, usage guidelines, and information on contributing to the project.
