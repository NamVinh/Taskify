from features.users.create_user.models import CreateUserCommand, CreateUserResponse
from persistence.database import user_collection

async def handle(command: CreateUserCommand) -> CreateUserResponse:
  
    user_dict = command.dict()
    user_dict.update({"is_active": True})
    print(user_dict)
    result = await user_collection.insert_one(user_dict)
    return CreateUserResponse(id=str(result.inserted_id))