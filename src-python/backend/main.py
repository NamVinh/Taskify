from fastapi import FastAPI 
from features.users import create_user_router

app = FastAPI()
app.include_router(create_user_router, prefix="/users")
