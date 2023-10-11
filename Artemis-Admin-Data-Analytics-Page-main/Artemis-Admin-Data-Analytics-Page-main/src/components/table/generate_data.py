from pymongo import MongoClient
import pandas as pd
import json

# MongoDB URI with the database name
mongo_uri = "mongodb://artemis-admin:w1r3mdmArt3mis2020p@10.1.1.48:27017/admin"

# Connect to MongoDB
client = MongoClient(mongo_uri)

# Access the specific database and collection
db = client.get_database("artemis")  # Replace "your_database_name" with the actual database name
collection = db.city_count

# Retrieve documents from the collection and convert to pandas DataFrame
cursor = collection.find({})
df = pd.DataFrame(list(cursor))

# Save DataFrame to CSV
df.to_csv('city_count.csv', index=False)

total_ads = int(df['ad_count'].sum())
total_email = int(df['email_count'].sum())
total_phone = int(df['phone_count'].sum())

totals = {
    "total_ads": total_ads,
    "total_email": total_email,
    "total_phone": total_phone
}

# Convert the dictionary to JSON
totals_json = json.dumps(totals)

# Save the JSON to a file (optional)
with open('totals.json', 'w') as json_file:
    json.dump(totals, json_file)

print("total ad stats saved as totals.json")


city_count_collection = db.city_count

# Retrieve all documents from the collection
cursor = collection.find({})
df = pd.DataFrame(list(cursor))
print(df.columns)
df.drop('_id', axis=1, inplace=True)
df['avg_age'] = df['avg_age'].astype(int)
df.to_json('city_count.json', orient='records')




