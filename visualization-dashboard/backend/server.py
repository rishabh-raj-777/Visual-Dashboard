from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["visualization_db"]  # Create or connect to 'visualization_db'
collection = db["dashboard_data"]  # Collection for the JSON data

@app.route("/", methods=["GET"])
def home():
    return "Flask API is running!", 200


@app.route("/api/data", methods=["GET"])
def get_data():
    data = list(collection.find({}, {"_id": 0}))  # Get all data, excluding MongoDB _id field
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
