# Moscow Ski

Welcome to the Moscow Ski project! This repository contains the source code for the Moscow Ski Marathon website.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Moscow Ski Marathon is a new amateur competition in the city sports calendar. The event will take place on February 11, 2024, and will attract a large number of ski sports fans from Russia. The marathon is part of the Russialoppet cup standings.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/moscow-ski.git
  ```
2. Navigate to the project directory:
  ```sh
  cd moscow-ski
  ```
3. Install dependencies:
  ```sh
  npm install
  ```
  or
  ```sh
  yarn install
  ```

## Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in development mode.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm start` or `yarn start`: Runs the built app in production mode.
- `npm run lint` or `yarn lint`: Lints the codebase.

## Dependencies

The project uses the following main dependencies:

- `@emotion/react`
- `@emotion/styled`
- `@mui/material`
- `next`
- `react`
- `react-dom`
- `typescript`

For the full list of dependencies, refer to the `package.json` file.

## Docker

The project includes a Dockerfile for containerization. To build and run the Docker container:

1. Build the Docker image:
  ```sh
  docker build -t moscow-ski .
  ```
2. Run the Docker container:
  ```sh
  docker run -p 3000:3000 moscow-ski
  ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

Distributed under the MIT License. See the `LICENSE` file in the root of the project for more information.