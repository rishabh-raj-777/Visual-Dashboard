import json
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["visualization_db"]  # Database Name
collection = db["dashboard_data"]  # Collection Name

# Define the correct JSON file path
#json_file_path = "E:\Black-Cofee\Visual-Dashboard\visualization-dashboard\backend\venv\jsondata.json"  # Make sure this file exists in your backend folder
json_file_path = "jsondata.json"



try:
    with open(json_file_path, "r", encoding="utf-8") as file:
        data = json.load(file)

    # Clear existing data and insert new data
    collection.delete_many({})
    collection.insert_many(data)

    print("✅ Data successfully loaded into MongoDB!")

except FileNotFoundError:
    print(f"❌ Error: JSON file not found at {json_file_path}")
except json.JSONDecodeError:
    print(f"❌ Error: Invalid JSON format in {json_file_path}")
except Exception as e:
    print(f"❌ Error: {e}")
