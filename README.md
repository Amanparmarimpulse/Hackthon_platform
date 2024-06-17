#   HackConnect: Innovate Collaborate Dominate 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the MERN Hackathon Platform! This project is designed to facilitate live hackathons by allowing developers to register on the platform, connect with other developers, and form teams to participate in hackathons. The platform uses the MERN stack (MongoDB, Express.js, React, Node.js) along with Firebase for authentication.


![image](https://github.com/Amanparmarimpulse/Hackthon_platform/assets/129597590/889671ec-36f5-4522-99e1-8f1c49384ddd)
![image](https://github.com/Amanparmarimpulse/Hackthon_platform/assets/129597590/c8974e78-bcd3-4117-a30b-95e1f2cf1ece)


## Features

- **User Registration and Authentication:** Users can register and authenticate using Firebase.
- **Profile Management:** Users can create and manage their profiles.
- **Developer Directory:** Browse and search for developers registered on the platform.
- **Team Formation:** Connect with other developers and form teams for hackathons.
- **Live Hackathons:** Participate in live hackathons hosted on the platform.
- **User Login ans Signup:**
  
![image](https://github.com/Amanparmarimpulse/Hackthon_platform/assets/129597590/7924df1c-feb5-43a1-ac07-41427fafe187)

![image](https://github.com/Amanparmarimpulse/Hackthon_platform/assets/129597590/9e4f613d-1805-4849-87b2-d18ac695d88d)



## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Hosting:** (Specify hosting provider, e.g., Heroku, Vercel, AWS)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Firebase account

### Clone the Repository

```bash
git clone https://github.com/your-username/mern-hackathon-platform.git
cd mern-hackathon-platform
```

### Backend Setup

1. Install dependencies:

    ```bash
    cd backend
    npm install
    ```

2. Create a `.env` file in the `backend` directory and add your MongoDB connection string and Firebase configuration:

    ```env
    MONGO_URI=your-mongodb-connection-string
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    FIREBASE_APP_ID=your-firebase-app-id
    ```

3. Start the backend server:

    ```bash
   nodemon
    ```

### Frontend Setup

1. Install dependencies:

    ```bash
    cd Hackthon_platform-main
    npm install
    ```

2. Create a `.env` file in the `frontend` directory and add your Firebase configuration:

    ```env
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
    ```

3. Start the frontend development server:

    ```bash
    npm run start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with your existing credentials.
3. Create and manage your profile.
4. Browse the developer directory to connect with other developers.
5. Form or join teams to participate in live hackathons.

## Contributing

We welcome contributions to enhance the platform! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contact us if you have any questions or suggestions! Happy hacking!
