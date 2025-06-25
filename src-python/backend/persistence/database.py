import motor
from motor.motor_asyncio import AsyncIOMotorClient
from core.settings import app_options
  
MONGO_URL= app_options.mongodb_url

client = AsyncIOMotorClient(MONGO_URL)
 
database = client.get_database("tasks")

user_collection = database.get_collection("users")
