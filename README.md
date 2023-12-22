# QRcode# Node.js Dockerized Application

This repository contains a Node.js application configured to run in a Docker container.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.

## Getting Started

To run this application using Docker, follow these steps:

### 1. Clone the Repository

```bash
git cloneTo https://github.com/DurgeshBabu/QRcode
cd QRcode

### 2. Build the Docker Image
docker build -t  my-node-app:v1

3. Run the Docker Container
docker run -p 3000:3000 my-node-app:v1

4. Access the Application
Open a web browser and navigate to http://localhost:3000 to view the application.
