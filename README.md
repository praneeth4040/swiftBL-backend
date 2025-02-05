# swiftBL-backend
## Introduction
This project is designed to manage and track shipments using a Node.js, Express, and MongoDB backend. It includes various API endpoints for retrieving, updating, and creating shipment data.

## Features
- Retrieve all shipments with their details (status, route, current location, ETA, etc.).
- Retrieve details of a specific shipment.
- Update the current location of a shipment.
- Retrieve the estimated time of arrival (ETA) based on current location and route data.
- Create a new shipment using container ID and other details.

## Installation
To install and run the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/praneeth4040/swiftBL-backend.git

2. Navigate to the project directory:
   cd your-project

3.Install the dependencies:
  npm install

4.Define the MongoDB URL & PORT in the environment variable by creating a .env file in the root of the project and adding the following line:
  MONGODB_URI=your_mongodb_connection_string
  PORT = your_port

5.Start the server
  npm start
