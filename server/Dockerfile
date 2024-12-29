FROM python:3.12-alpine

WORKDIR /server

# Preventing python from writing
# pyc to docker container
ENV PYTHONDONTWRITEBYTECODE 1

# Flushing out python buffer
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .

RUN pip install gunicorn

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["sh", "-c", "python manage.py migrate && python manage.py collectstatic --no-input && gunicorn fibonacci.wsgi:application --bind 0.0.0.0:8000"]
