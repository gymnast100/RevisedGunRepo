import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################


#postgreSQL connection
rds_connection_string =  "postgres:5432@localhost:5432/GUN_VIOLENCE_PROJECT" 
engine = create_engine(f'postgresql://{rds_connection_string}')
@app.route("/yeardata")
def year():
    df = pd.read_sql_query('SELECT  * FROM guns_year LIMIT 5' , con=engine).head()
    bar_list = df.to_dict(orient='records')
    print (bar_list)
    return jsonify(bar_list)

##############################################################

@app.route("/shootingtypes")
def shootingstypes():
     type_df = pd.read_sql_query('select * from gunshootingstype', con=engine).head(10)
     shootingstypes = type_df.to_dict(orient='records')
     return jsonify(shootingstypes)



#######################################################
# reading from postgres for pie chart 
# @app.route("/markercluster")
# def killings():
#       killings_df = pd.read_sql_query('SELECT * FROM killings_injuries_2018 ', con = engine)
#       killings_list = killings_df.to_dict(orient = 'records')
#       return jsonify(killings_list)

#########################################################
@app.route("/monthlydata")
def month():
     flaskdf = pd.read_csv("static/data/gun2014onwrd.csv")
     line_dict = flaskdf.to_dict(orient='records')
     return jsonify(line_dict)

#########################################################
# pie chart fron csv
@app.route("/incidents")
def incidents ():
     incidentdf = pd.read_csv("static/data/Years_Data_2014_2019.csv")
     incident_dict = incidentdf.to_dict(orient='records')
     return jsonify(incident_dict)



##########################################################

@app.route("/markercluster")
def markercluster():
     data = pd.read_sql_query('select * from markercluster', con=engine)
     markercluster_dict = data.to_dict(orient='records')
     print("xxxxxx")
     print(markercluster_dict)
     return jsonify(markercluster_dict)


#######################################################


# rendering templates for all html pages
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/barchart")
def bar():
     return render_template("barchart.html")


@app.route("/linechart")
def line():
     return render_template("linechart.html")

@app.route("/shootingtype")
def cloudiness():
     return render_template("shootingtype.html")

@app.route("/wind")
def wind():
     return render_template("wind.html")
   
    

@app.route("/current2019")
def current():
     return render_template("current2019.html")
   

@app.route("/data")
def data():
     return render_template("data.html")
   

if __name__ == "__main__":
     app.run(debug=True)
    