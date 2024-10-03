# Flow Distribution Algorithm

## Overview

This project implements a backend system that distributes users among astrologers in a fair and balanced manner. It also prioritizes top astrologers by giving them more connections. The project is built using **Node.js** and includes test cases to validate the functionality.

## Features

- **User Distribution**: Users are evenly distributed among astrologers.
- **Top Astrologer Priority**: Extra users are assigned to top astrologers.
- **REST API**: Provides endpoints to distribute users and toggle top astrologer status.
- **Unit Testing**: Uses **Jest** to test the functionality.

## Setup Instructions

### Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

Make sure you have these installed on your system.

### Installation

**Clone the repository** or download the project files:
   ```bash
   git clone https://github.com/uday-bhatiya/flow-distribution-algorithm

   Install dependencies: Run the following command in the root of the project:


1.** Install dependencies**: Run the following command in the root of the project 
 ```bash
npm install

## Running the Application

To start the server, run:
```bash
npm start

This will start the server at http://localhost:3000.

## API EndpointsRunning the Applicationnpm start

## Project Structure
flow-distribution-algorithm/
│
├── src/
│   ├── models/
│   │   └── astrologer.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   └── distribution.route.js
│   ├── controllers/
│   │   └── distribution.controller.js
│   └── server.js
│
└── tests/
    └── distribution.test.js

-**src/models/**: Contains the models for astrologers and users.
-**src/routes/**: Defines the API routes.
-**src/controllers/**: Contains the distribution logic.
-**tests/**: Contains the test cases to validate the distribution algorithm.

## Future Improvements
-**Scalability**: Implement more advanced algorithms to handle a larger number of users and astrologers.
-**Database Integration**: Add support for a database (e.g., MongoDB ) to store astrologer and user data persistently.
-
