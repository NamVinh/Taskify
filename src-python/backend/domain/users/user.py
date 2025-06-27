import datetime
from bson import ObjectId
from pydantic import BaseModel, Field

from core.domain import PyObjectId

class User(BaseModel):
    id: PyObjectId
    user_name: str
    email: str
    password: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    @classmethod
    def create(cls, user_name: str, email: str, password: str) :
        cls.user_name = user_name
        cls.email = email
        cls.password = password
        return cls()
        
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }

user = User.create("", "", "")