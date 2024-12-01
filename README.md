# Truck Tracker Project

**Truck Tracker** is a web application designed to track the location and status of trucks in real-time. This project is built with **React** for the frontend and **FastAPI** for the backend. It provides an interactive dashboard for monitoring trucks, along with a REST API to manage truck data.

---

## Table of Contents
1. [Project Setup](#project-setup)
2. [Frontend Setup](#frontend-setup)
3. [Backend Setup](#backend-setup)


## Project Setup

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (for the frontend React app)
- [Python](https://www.python.org/downloads/) (for the backend FastAPI app)
- [pip](https://pip.pypa.io/en/stable/) (for Python package management)
- [Git](https://git-scm.com/) (for version control)

---

## Frontend Setup (React)

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend



### Detailed Breakdown of the Backend Setup:

1. **Navigate to the backend folder**: 
   - The first step is to go to the `backend` directory where your FastAPI project is located.

2. **Create a Python virtual environment**: 
   - The command `python -m venv venv` creates a virtual environment named `venv` in the `backend` folder. This isolates your project’s dependencies from your system’s Python packages.

3. **Activate the virtual environment**: 
   - You activate the environment with `. \venv\Scripts\activate` (Windows) or `source venv/bin/activate` (macOS/Linux).
   - This ensures that when you install dependencies, they are installed within the isolated environment, not globally on your machine.

4. **Install dependencies**: 
   - Using the `pip install -r requirements.txt` command, it installs all the required dependencies for your backend, which should be listed in the `requirements.txt` file (like FastAPI, Uvicorn, etc.).

5. **Start the FastAPI server**: 
   - Running the command `uvicorn main:app --reload` starts your backend server on `http://localhost:8000` in development mode. The `--reload` flag ensures the server automatically restarts when you modify the code.



