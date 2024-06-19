# Decentralized To-Do Application

This repository contains a decentralized To-Do application that utilizes Node.js for the backend and Solidity for the smart contracts. The application allows users to create, read, update, and delete to-do items, with all data stored securely on the blockchain.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Smart Contracts](#smart-contracts)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

The Decentralized To-Do Application is built to demonstrate how blockchain can be utilized to manage simple CRUD operations in a decentralized manner. This ensures that all to-do items are stored in an immutable and transparent way.

## Features

- Create a new to-do item
- Read all to-do items
- Update an existing to-do item
- Delete a to-do item
- Store all data on the blockchain

## Architecture

The application consists of two main components:

1. **Backend**: Built with Node.js and Express, this handles API requests and interacts with the blockchain.
2. **Smart Contracts**: Written in Solidity, these contracts manage the storage and manipulation of to-do items on the blockchain.

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Truffle (v5.x or higher)
- Ganache CLI (for local blockchain development)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/decentralized-todo-app.git
    cd decentralized-todo-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Compile the smart contracts:
    ```sh
    truffle compile
    ```

4. Migrate the smart contracts to the blockchain:
    ```sh
    truffle migrate
    ```

## Usage

1. Start the local blockchain:
    ```sh
    ganache-cli
    ```

2. Start the backend server:
    ```sh
    npm start
    ```



## API Endpoints

- **GET /todos**: Retrieve all to-do items.
- **POST /todos**: Create a new to-do item.
- **PUT /todos/:id**: Update an existing to-do item.
- **DELETE /todos/:id**: Delete a to-do item.

## Smart Contracts

The main smart contract file is located at `contracts/TodoList.sol`. This contract defines the structure of the to-do items and the functions to create, read, update, and delete items.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
