from fastapi import FastAPI
from features.users.create_user.route import router as create_user_router

app = FastAPI()
app.include_router(create_user_router, prefix="/users")
