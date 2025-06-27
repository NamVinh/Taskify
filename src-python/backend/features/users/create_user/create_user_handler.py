 
from features.users.create_user.create_user_command import CreateUserCommand
from features.users.create_user.create_user_response import CreateUserResponse
from infrastructure.persistence import user_collection

async def handle(command: CreateUserCommand) -> CreateUserResponse:
    user_dict = command.dict()
    user_dict.update({"is_active": True})
    print(user_dict)
    result = await user_collection.insert_one(user_dict)
    return CreateUserResponse(id=str(result.inserted_id))