# Node.js Express Contact manager API Project

![Node.js](https://img.shields.io/badge/Node.js-v16.13.1-green)
![Express.js](https://img.shields.io/badge/Express-v4.17.1-blue)

## Overview

This project is a Node.js application built using the [Express.js](https://expressjs.com/) framework. The app provides a set of APIs designed for Contact management app. The APIs are organized in a RESTful structure, supporting various operations such as Create, Read, Update, and Delete (CRUD).

### Key Features

- RESTful API using Express.js
- Modular and scalable code structure
- Environment configuration for development and production
- API error handling and validation
-  Authentication with JWT 
- Well-documented API routes with request/response samples

---

## Table of Contents

- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Running the Application](#running-the-application)


---

## Installation

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

1. **Clone the repository**:
    ```bash
    git clone git@github.com:saaifulislam1/contact-management-app-node.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd backend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following:
   
   ```bash
   PORT=5001
   CONNECTION_STRING=
   ACCESS_TOKEN_SECRET=

## Running-the-application
To start the application, use the following commands:
 ```bash
    npm run dev

 ```

## API Documentation

Here is an overview of the API endpoints available in this project. Each endpoint supports different HTTP methods.

### Endpoints

| HTTP Method | Endpoint                     | Description              | Request Body                        | Response    |
|-------------|---------------------|-----------------------------------|------------------------------------=|---------------------|----------------
| `POST`       | `/api/users/registers`      | Register User            | JSON Object                         | Success/Fail     |
| `POST`       | `/api/users/login`          | Login User               | JSON Object                         | JSON Object      |
| `GET`        | `/api/users/current`        | Get Current User         | Bearer Token in Header              | JSON Object      |
| `POST`       | `/api/contacts`             | Post a contact           | JSON Object                         | JSON Object      |
| `GET`        | `api/contacts/`             | Get all contacts         | None                                | JSON Array       |
| `DELETE`     | `api/contacts/:id`          | Delete a Contact by ID   | None                                | Success/Fail     |
| `PUT`        | `api/contacts/:id`          | Update a Contact by ID   | None                                | Success/Fail     |
| `GET`        | `api/contacts/:id`          | GET a Contact by ID      | None                                | JSON Object      |


