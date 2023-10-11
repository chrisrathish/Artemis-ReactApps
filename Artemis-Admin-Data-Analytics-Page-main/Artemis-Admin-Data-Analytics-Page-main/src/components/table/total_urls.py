from pymongo import MongoClient
import pandas as pd
import json

# MongoDB URI with the database name
mongo_uri = "mongodb://artemis-admin:w1r3mdmArt3mis2020p@10.1.1.48:27017/admin"

# Connect to MongoDB
client = MongoClient(mongo_uri)

# Access the specific database and collection
db = client.get_database("artemis")  # Replace "your_database_name" with the actual database name
collection = db.advertisements
total_entries = collection.count_documents({})

print(total_entries)