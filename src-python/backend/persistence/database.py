import motor
import motor.motor_asyncio
from core import settings

MONGO_URL= settings.mongodb_url

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)

database = client.get_database("tasks")

user_collection = database.get_collection("users")
