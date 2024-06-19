# Import necessary libraries
# Flask is a web framework, jsonify is used to convert objects to JSON
from flask import Flask, jsonify  
# PostgreSQL database adapter for Python
import psycopg2 
# pandas is a powerful data analysis and manipulation library 
import pandas as pd  

# Create a new Flask web application
app = Flask(__name__)

# Function to establish a connection to the PostgreSQL database
def get_db():
    conn = psycopg2.connect(
        # Name of your database
        dbname="FinanceDB", 
        # Username to connect to the database
        user="postgres",
        # Password to connect to the database
        password="postgres",
        # Host where the database is running
        host="localhost", 
        # Port on which the database is running 
        port="5433"  
    )
    # Return the connection object
    return conn  

# Define a route for your API
@app.route('/api/data')
def get_data():
    # Get the database connection using the function defined above
    conn = get_db() 
    # SQL query to fetch data 
    query = 'SELECT * FROM ETFprices;'
    # Execute the SQL query and load the results into a pandas DataFrame  
    df = pd.read_sql_query(query, conn) 
    # Convert the DataFrame to a dictionary and then to a JSON object 
    return jsonify(df.to_dict(orient='records'))  

# Main driver function
if __name__ == '__main__':
    # Run the Flask web server in debug mode
    app.run(debug=True)  
