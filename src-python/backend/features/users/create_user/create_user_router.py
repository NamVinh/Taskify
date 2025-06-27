from fastapi import APIRouter

from features.users.create_user import create_user_handler
from features.users.create_user.create_user_command import CreateUserCommand
from features.users.create_user.create_user_response import CreateUserResponse

create_user_router  = APIRouter()

@create_user_router.post("/", response_model=CreateUserResponse)
async def create_user(command: CreateUserCommand):
    return await create_user_handler(command)