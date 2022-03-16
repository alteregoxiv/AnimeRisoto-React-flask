from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = "sfsf231224gsdgrhrh45yw5gthetyjyjukr@1324rg4h5j7jytfaererrwr2342"


from .models import db , user , animelist , users_list , friends_list
