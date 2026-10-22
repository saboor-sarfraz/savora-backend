import os
from pathlib import Path

from dotenv import load_dotenv
from langchain_groq import ChatGroq

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env", override=True)

groq_api_key = os.getenv("GROQ_API_KEY", "").strip()
groq_model = os.getenv("GROQ_MODEL", "openai/gpt-oss-120b").strip()

if not groq_api_key:
    raise RuntimeError(
        "GROQ_API_KEY is missing. Add a valid Groq API key to the project .env file."
    )

if not groq_model:
    raise RuntimeError("GROQ_MODEL must be a non-empty Groq model ID.")

model = ChatGroq(
    model=groq_model,
    groq_api_key=groq_api_key,
)
