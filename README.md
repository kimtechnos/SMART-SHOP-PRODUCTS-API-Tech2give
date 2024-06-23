# SMART-SHOP PRODUCTS API

## Project Description

This project is a RESTful API built using Express.js and PostgreSQL that manages a collection of products. Clients can perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database.

## Installation Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/kimtechnos/SMART-SHOP-PRODUCTS-API-Tech2give.

```

2. **Initialize the project:**

```bash
npm init y

```

3. **Install the necessary dependencies:**

```bash
 npm install express
```

```bash
 npm install pg

```

```bash
npm install dotenv

npm install nodemon
```

## Running the Project

1. **Set up PostgreSQL:**

Ensure PostgreSQL is installed and running on your machine. Create a new database for this project.

```sql
CREATE DATABASE products_db;
```

2. **Create the products table and insert initial data:**

Use the provided SQL script to set up your database:

[ Download Sql Starter Code](https://drive.google.com/uc?export=download&id=1fhX2Zanflj5XA4-VWMsq_BrkzZKCAyiL)

3. **Set up environment variables**
   Create a .env file in the root of your project directory and add the following:

```
PG_USER =postgres
PG_PASSWORD= 1234
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=products_db
```

Replece password , port with your postegreSQL credentials.

4. **Start the server:**

```bash
npm run start
```

## Testing with insomnia

**Create a folder named `products api`:**
In Insomnia, create a new folder named `products api` to organize your requests.

1. **Set up the requests within the `products api` folder:**

   - **Get All Products**

     - **Method:** `GET`
     - **URL:** `http://localhost:3001/api/products`

   - **Get a Single Product**

     - **Method:** `GET`
     - **URL:** `http://localhost:3001/api/products/:id`

     - **Note:** Replace `:id` with the actual product ID.

   - **Create a Product**

     - **Method:** `POST`
     - **URL:** `http://localhost:3001/api/products`
     - **Request Body:**
       ```json
       {
         "productThumbnail": "http://example.com/thumbnail.jpg",
         "productTitle": "Product Title",
         "productDescription": "Product Description",
         "productCost": "$29.99",
         "onOffer": true
       }
       ```

   - **Update a Product**

     - **Method:** `PUT`
     - **URL:** `http://localhost:3001/api/products/:id`

     - **Note:** Replace `:id` with the actual product ID.
     - **Request Body:** (Include fields to update)

   - **Delete a Product**

     - **Method:** `DELETE`
     - **URL:** `http://localhost:3001/api/products/:id`

     - **Note:** Replace `:id` with the actual product ID.

2. **Run the requests:**
