from flask import request , render_template , session , redirect
import requests , json
from flask.helpers import flash
from werkzeug.security import generate_password_hash , check_password_hash
from .models import db , user , animelist , users_list , friends_list
from . import app

@app.route('/hello')
def index():
    return {"HI": "Hello"}

@app.route('/anime')
def anime():
    title = request.args.get("title")
    httpresponse = requests.get("https://api.jikan.moe/v4/anime?q=" + title + "&sfw")
    # httpresponse = requests.get("https://api.jikan.moe/v4/anime?q=naruto")
    textdata = httpresponse.text
    jsondata = json.loads(textdata)

    return jsondata
    # name = request.args.get("title")
    # anime = animelist.query.filter(animelist.title.like("%" + name + "%")).all()
    # if len(anime) > 0:
        # return anime
    # else: 
        # httpresponse = requests.get("https://api.jikan.moe/v4/anime?q=naruto&sfw" + name)
        # textdata = httpresponse.text
        # jsondata = json.loads(textdata)

        # for i in jsondata['data']:
            # producer = ""
            # for j in i.producers:
                # producer += j.name + " "

            # licensor = ""
            # for j in i.licensors:
                # licensor += j.name + " "

            # studio = ""
            # for j in i.studios:
                # studio += j.name + " "

            # genre = ""
            # for j in i.genres:
                # genre += j.name + " "

            # theme = ""
            # for j in i.themes:
                # theme += j.name + " "

            # demographic = ""
            # for j in i.demographics:
                # demographic += j.name + " "
                
            # newanime = animelist(i.mal_id , i.title , i.title_english,
                    # i.title_japanese , i.images.jpg.image_url , 
                    # i.trailer.url , i.synopsis , i.background ,
                    # i.type , i.source , i.episodes , i.aired.string ,
                    # i.rating , i.score , i.broadcast.string , producer ,
                    # licensor , studio , genre , theme , demographic)

            # db.session.add(newanime)
            # db.session.commit()

            # return animelist.query.filter(animelist.title.like("%" + name + "%")).all()
