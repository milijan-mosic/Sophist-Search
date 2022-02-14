# LIBRARIES
from flask import Flask, json, render_template
import gunicorn, random


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
	for i in range(5):
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
			sophist_box = db_prep["0"] # delete this line after you insert data
			book_quote = sophist_box["book_quote"]
			paragraph = book_quote["paragraph"]
			author = book_quote["author"]
			source = book_quote["book"]

		if i == 4:
			for i in range(3):
				lucky_number = str(RandomNumber())
				sophist_box = db_prep[lucky_number]
				books = sophist_box["books"]

				if i == 0:
					recommended_book = books["book1"]
					writer1 = recommended_book["author"]
					book1 = recommended_book["name"]

				if i == 1:
					recommended_book = books["book2"]
					writer2 = recommended_book["author"]
					book2 = recommended_book["name"]
				
				if i == 2:
					recommended_book = books["book3"]
					writer3 = recommended_book["author"]
					book3 = recommended_book["name"]


	return render_template(
		"index.html", 
		painter=painter,
		artwork=artwork,
		url=url,
		philosopher=philosopher,
		quote=quote,
		poet=poet,
		poem=poem,
		paragraph=paragraph,
		author=author,
		source=source,
		writer1=writer1,
		book1=book1,
		writer2=writer2,
		book2=book2,
		writer3=writer3,
		book3=book3
	), 200


# 404
@app.errorhandler(404)
def page_not_found(error):
	return render_template('404.html'), 404


# INIT
if __name__ == "__main__": app.run()
