# Node.js-REST-API
This project is a comprehensive implementation of a RESTful API using Node.js and Express.js. It demonstrates key concepts of building scalable and efficient APIs, including CRUD operations, pagination, and search functionality.

## Features
- **CRUD Operations** - Create, Read, Update, and Delete functionality for managing data resources
- **Pagination** - Implemented to handle large datasets effectively by retrieving data in chunks
- **Search Functionality** - Allows searching and filtering data based on query parameters
- **MVC Architecture** - Organized codebase following the Model-View-Controller (MVC) pattern for better maintainability
- **Express Router** - Modular routing system for separating concerns and keeping the code clean

## Technologies Used
- **Backend Framework** - Node.js with Express.js
- **Database** - MongoDB
- **Routing** - Express Router
- **Code Architecture** - MVC

## How to Use
1. Clone this repository
```bash
git clone https://github.com/your-username/rest-api-learning-project.git
```
2. To start the App
```bash
npm run dev
```

## Endpoints
- GET /getProducts
- GET /getProducts/:id
- POST /postProduct
- PATCH /updateProduct/:id
- DELETE /deleteProduct/:id
- GET /getDataByQuery
- GET /paginationDemo

