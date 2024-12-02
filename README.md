### 🚲 Bicycle Store and Order Management Application

A robust application for managing bicycle inventory, creating orders, and calculating revenue. This project demonstrates a full-stack implementation using Node.js, Express, TypeScript, and MongoDB for backend operations.

##**Features**

#1. Bicycle Store Management
  -Add new bicycles to the inventory.
    -View all bicycles or a single bicycle's details.
        -Update bicycle details, including stock status, price, and more.
            -Delete bicycles from the inventory.

#2. Bicycle Order Management
  -Create orders by specifying the product, quantity, and customer details.
    -Automatically update inventory after an order is placed:
      >Reduce quantity of bicycles in stock.
        >Mark bicycles as out of stock when inventory reaches zero.
          -Handle insufficient stock scenarios with appropriate error responses.

#3. Revenue Calculation
  -Calculate the total revenue generated from all completed orders.
    -Uses MongoDB aggregation to compute revenue efficiently.

> [!IMPORTANT]
##**Technology Stack**
>_Language: TypeScript
>_Framework: Express.js
>Database: MongoDB (Mongoose)
>Runtime Environment: Node.js_


##**Contributing**
Contributions are welcome! Please fork this repository and submit a pull request for any feature additions or improvements.

> [!WARNING]
##**License**
>This project is licensed under HaloZzen license

##**Contact**
>For inquiries or support, contact akib.chowdhury64@gmail.com
