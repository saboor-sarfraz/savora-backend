FROM python:3.14-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN pip install --no-cache-dir uv \
    && uv sync --frozen --no-dev --no-install-project

COPY src ./src

CMD ["sh", "-c", "exec uv run --no-sync uvicorn main:app --app-dir /app/src --host 0.0.0.0 --port ${PORT:-8080}"]