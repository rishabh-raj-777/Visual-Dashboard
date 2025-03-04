# Visual-Dashboard

## Project Overview
This project is a **Data Visualization Dashboard** built using:
- **Front-end:** React.js
- **Back-end:** Flask (Python)
- **Database:** MongoDB

The dashboard visualizes key insights from a JSON dataset and provides interactive charts for data analysis.

---

## Features
- **Data Ingestion:** Reads JSON data and stores it in MongoDB.
- **REST API:** Built with Flask to serve data from MongoDB.
- **Interactive Visualizations:** Uses **D3.js, Chart.js, Plotly.js, Highcharts**, etc.
- **Filtering Options:** End year, topics, sector, region, PEST, SWOT, source, country, and city.
- **Responsive UI:** Built with React.js for a seamless user experience.

---

## Technologies Used
- **React.js** (Front-end framework)
- **Flask** (Back-end API framework)
- **MongoDB** (NoSQL database for storing JSON data)
- **Chart Libraries:** D3.js, Chart.js, Plotly.js
- **Bootstrap/Tailwind CSS** (Styling framework)

---

## Installation Guide
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python 3 & pip
- MongoDB

### Backend Setup (Flask)
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # For Mac/Linux
   venv\Scripts\activate  # For Windows
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```sh
   python app.py
   ```
   The backend should now be running on **http://127.0.0.1:5000**.

### Frontend Setup (React.js)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The frontend should now be running on **http://localhost:3000**.

---

## API Endpoints
- **GET /api/data** → Fetches visualization data
- **GET /api/data?filter=value** → Fetches filtered data
- **POST /api/data** → Adds new data entry

---
