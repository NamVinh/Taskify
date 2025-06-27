from pydantic import BaseModel, EmailStr


class CreateUserCommand(BaseModel):
    email: EmailStr
    full_name: str
    