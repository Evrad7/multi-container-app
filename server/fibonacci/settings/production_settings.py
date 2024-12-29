from . import *
import os

DEBUG=False

SECRET_KEY = os.environ["SECRET_KEY"]

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    os.environ["SERVER_HOST"]
]


MEDIA_ROOT=BASE_DIR.parent/ "media"

STATIC_ROOT=BASE_DIR.parent / "static"
