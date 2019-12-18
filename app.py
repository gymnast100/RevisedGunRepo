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


# #postgreSQL connection
# rds_connection_string =  "postgres:5432@localhost:5432/GUN_VIOLENCE_PROJECT" 
# engine = create_engine(f'postgresql://{rds_connection_string}')
# @app.route("/barchartcol")
# def bar():
#     df = pd.read_sql_query('SELECT  * FROM guns_year LIMIT 5' , con=engine).head()
#     bar_dict = df.to_dict('dict')
#     print (bar_dict)
#     return jsonify(bar_dict)
#########################################################



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

@app.route("/couldiness")
def cloudiness():
     return render_template("cloudiness.html")

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
    