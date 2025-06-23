from fastapi import APIRouter
from .models import CreateUserCommand, CreateUserResponse
from .handler import handle

router = APIRouter()

@router.post("/", response_model=CreateUserResponse)
async def create_user(command: CreateUserCommand):
    return await handle(command)