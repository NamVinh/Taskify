import motor
from pymongo import AsyncMongoClient
from core.settings import app_options
  
MONGO_URL= app_options.mongodb_url

client = AsyncMongoClient(MONGO_URL)
 
database = client.get_database("tasks")

user_collection = database.get_collection("users")
