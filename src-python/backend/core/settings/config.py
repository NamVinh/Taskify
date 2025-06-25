from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    mongodb_url: str
    
    class Config:
        env_file=".env"
        
app_options = Settings() 
print(app_options)