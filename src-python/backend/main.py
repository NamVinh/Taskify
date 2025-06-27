from fastapi import FastAPI

from features.users.create_user.create_user_router import create_user_router

  
app = FastAPI()
app.include_router(create_user_router, prefix="/users")
