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

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/bellybutton.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/[GUN_VIOLENCE_PROJECT]'
# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# Guns_Year = Base.classes.guns_year

connection_string = "postgres:5432@localhost:5432/GUN_VIOLENCE_PROJECT"
engine = create_engine(f'postgresql://{connection_string}')

# Check for tables
# engine.table_names()



# # Save references to each table
# Samples_Metadata = Base.classes.sample_metadata
# Samples = Base.classes.samples

# # session = Session(db.engine)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/barchart")
def bar():
    return render_template("barchart.html")


# @app.route("/barchart")
# def bar():
#     df = pd.read_sql_query('select * from guns_year', con=engine).head(4)
#     print (list(df))
#     return jsonify(list(df))
    



if __name__ == "__main__":
     app.run(debug=True)
    