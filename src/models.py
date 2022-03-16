from enum import unique
from . import app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.engine import Engine
from sqlalchemy import event
import os

USER = os.environ["user"]
PASS = os.environ["pass"]

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://' + USER + ':' + PASS + '@arjuna.db.elephantsql.com/kixztwtw'

db = SQLAlchemy(app)


class user(db.Model):
    id = db.Column('user_id' , db.Integer , primary_key=True)
    username = db.Column(db.String(100) , nullable=False)
    email = db.Column(db.String(100) , nullable=False , unique=True)
    password = db.Column(db.String(100) , nullable=False)

    def __init__(self , username , email , password):
        self.username = username
        self.email = email
        self.password = password


class animelist(db.Model):
    id = db.Column('anime_id' , db.Integer , primary_key=True)
    mal_id = db.Column(db.Integer , nullable=False)
    title = db.Column(db.String(100) , nullable=False)
    title_eng = db.Column(db.String(100))
    title_jp = db.Column(db.String(100))
    image_url = db.Column(db.String(100))
    youtube_url = db.Column(db.String(100))
    synopsis = db.Column(db.String(10000))
    background = db.Column(db.String(10000))
    anime_type = db.Column(db.String(20))
    source = db.Column(db.String(20))
    episodes = db.Column(db.Integer)
    airdate = db.Column(db.String(30))
    maturityrating = db.Column(db.String(30))
    ratings = db.Column(db.Float)
    broadcast = db.Column(db.String(40))
    producers = db.Column(db.String(100))
    licensors = db.Column(db.String(100))
    studios = db.Column(db.String(20))
    genres = db.Column(db.String(100))
    themes = db.Column(db.String(100))
    demographics = db.Column(db.String(30))

    def __init__(self , mal_id , title , title_eng , title_jp , 
            image_url , youtube_url , synopsis , background , 
            anime_type , source , episodes , airdate , maturityrating ,
            ratings , broadcast , producers , licensors , studios , 
            genres , themes , demographics):
        self.mal_id = mal_id
        self.title = title
        self.title_eng = title_eng
        self.title_jp = title_jp
        self.image_url = image_url
        self.youtube_url = youtube_url
        self.synopsis = synopsis
        self.background = background
        self.anime_type = anime_type
        self.source = source
        self.episodes = episodes
        self.airdate = airdate
        self.maturityrating = maturityrating
        self.ratings = ratings
        self.broadcast = broadcast
        self.producers = producers
        self.licensors = licensors
        self.studios = studios
        self.genres = genres
        self.themes = themes
        self.demographics = demographics


class users_list(db.Model):
    id = db.Column('userslist_id' , db.Integer , primary_key=True)
    users_id = db.Column('users_id' , db.Integer , db.ForeignKey('user.user_id' , ondelete="CASCADE") , nullable=False)
    anime_id = db.Column('anime_id' , db.Integer , db.ForeignKey('animelist.anime_id' , ondelete="CASCADE") , nullable=False)

    def __init__(self , users_id , anime_id):
        self.users_id = users_id
        self.anime_id = anime_id


class friends_list(db.Model):
    id = db.Column('friendslist_id' , db.Integer , primary_key=True)
    users_id = db.Column(db.Integer , db.ForeignKey("user.user_id" , ondelete="CASCADE") , nullable=False)
    friends_id = db.Column(db.Integer , db.ForeignKey("user.user_id" , ondelete="CASCADE") , nullable=False)

    def __init__(self , users_id , friends_id):
        self.users_id = users_id
        self.friends_id = friends_id
