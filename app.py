# LIBRARIES
from flask import Flask, json, render_template
import random


# CONFIG
app = Flask(__name__)

def RandomNumber():
	return random.randint(1, max_num)
max_num = 1


# ROUTES
@app.route("/")
def index():
	# DATA LOAD
	db_load = open('data.json')
	db_prep = json.load(db_load)

	max_num = db_prep["Number of Entries"]
	lucky_number = str(RandomNumber())
	
	sophist_box = db_prep[lucky_number]


	# CHOP CHOP
	masterpiece = sophist_box["masterpiece"]
	painter = masterpiece["painter"]
	artwork = masterpiece["artwork"]
	url = masterpiece["url"]
	
	advice = sophist_box["advice"]
	philosopher = advice["philosopher"]
	quote = advice["quote"]
	
	haiku = sophist_box["haiku"]
	poet = haiku["poet"]
	poem = haiku["poem"]
	
	prayer = sophist_box["prayer"]


	return render_template(
		"index.html", 
		painter=painter,
		artwork=artwork,
		url=url,
		philosopher=philosopher,
		quote=quote,
		poet=poet,
		poem=poem,
		prayer=prayer), 200


@app.errorhandler(404)
def page_not_found(error):
	return render_template('404.html'), 404


# INIT
if __name__ == "__main__": app.run()
