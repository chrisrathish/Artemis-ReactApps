import sqlite3
import json

# Connect to the SQLite database
db_connection = sqlite3.connect('/home/clarice/db.sqlite3')

# Create a cursor object to interact with the database
cursor = db_connection.cursor()

# Define the SQL query to select all data from the 'auth_user' table
query = "SELECT id,username,first_name,last_name,email,date_joined,last_login FROM auth_user"
#query = "SELECT name FROM sqlite_master WHERE type='table';"

# Execute the query to fetch all data
cursor.execute(query)

# Fetch all rows from the result set
rows = cursor.fetchall()

# Close the cursor and database connection
cursor.close()
db_connection.close()

# Convert the data to a list of dictionaries
data = []
for row in rows:
    data.append({
        'id': row[0],
        'username': row[1],
        'first_name': row[2],
        'last_name': row[3],
        'email': row[4],
        'date_joined': row[5],
        'last_login': row[6],
        
        # Add more columns as needed
    })

# Define the output JSON file path
output_file = 'auth_user_data.json'

# Write the data to a JSON file
with open(output_file, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print(f'Data from auth_user table saved to {output_file}')
