from dataclasses import Field
from typing import Optional

from bson import ObjectId
from pydantic import BaseModel, EmailStr

from core.domain.common import PyObjectId

class User(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    email: EmailStr
    full_name: Optional[str] = None
    is_active: bool = True

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}