# E-commerce Admin Dashboard

## Description
A simple e-commerce admin dashboard built using Angular and the FakeStore API for product and user management. This project includes functionalities for user authentication, product management (listing, adding, editing, deleting), and user management.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technical Requirements](#technical-requirements)
- [Suggested Features](#suggested-features)

## Features

### User Authentication
- Implement a login page using the FakeStore API Login endpoint.
- Users can enter credentials and, upon successful login, the received token is stored in local storage.
- Users are redirected to the main dashboard upon successful login.

### Product Management
- **Product List Page**: Fetch and display all products using the FakeStore API Products endpoint.
- **Product Details**: Display detailed information about a selected product using the FakeStore API Product Details endpoint.
- **Add Product**: Create a form to add a new product using the POST method on the FakeStore API Add Product endpoint.
- **Update Product**: Allow editing of product details using the PUT method on the FakeStore API Update Product endpoint.
- **Delete Product**: Enable deletion of a product using the DELETE method on the FakeStore API Delete Product endpoint.

### User Management
- **List Users**: Fetch and display all users using the FakeStore API Users endpoint.
- Display basic information like username, email, and role (if available).

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/ecommerce-dashboard.git
   cd ecommerce-dashboard
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install Angular Material:**
   ```sh
   ng add @angular/material
   ```

## Usage

1. **Start the development server:**
   ```sh
   ng serve
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```
3. Login with your credentials to access the admin dashboard.

## API Endpoints
- **Login**: `https://fakestoreapi.com/auth/login` (POST)
- **Get All Products**: `https://fakestoreapi.com/products` (GET)
- **Get One Product**: `https://fakestoreapi.com/products/{id}` (GET)
- **Add Product**: `https://fakestoreapi.com/products` (POST)
- **Update Product**: `https://fakestoreapi.com/products/{id}` (PUT)
- **Delete Product**: `https://fakestoreapi.com/products/{id}` (DELETE)
- **List All Users**: `https://fakestoreapi.com/users` (GET)

## Technical Requirements
- Angular
- Angular Material
- Node.js

## Suggested Features
- **Filter/Search Products**: Add functionality to filter or search products in the product list.
- **Pagination**: Paginate the product and user lists for better performance and usability.
- **Responsive Design**: Ensure the app is mobile-friendly.

