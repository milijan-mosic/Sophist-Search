# LIBRARIES
from flask import Flask, json, render_template
import random


# CONFIG
app = Flask(__name__)


def RandomNumber():
	return random.randint(0, 15)


# DATA LOAD
db_load = open('data.json')
db_prep = json.load(db_load)
db_load.close()


# ROUTE
@app.route("/")
def index():
	# CHOP CHOP
	for i in range(4):
		lucky_number = str(RandomNumber())
		sophist_box = db_prep[lucky_number]
		if i == 0:
			masterpiece = sophist_box["masterpiece"]
			painter = masterpiece["painter"]
			artwork = masterpiece["artwork"]
			url = masterpiece["url"]

		if i == 1:
			advice = sophist_box["advice"]
			philosopher = advice["philosopher"]
			quote = advice["quote"]

		if i == 2:
			haiku = sophist_box["haiku"]
			poet = haiku["poet"]
			poem = haiku["poem"]

		if i == 3:
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


# 404
@app.errorhandler(404)
def page_not_found(error):
	return render_template('404.html'), 404


# INIT
if __name__ == "__main__": app.run()
