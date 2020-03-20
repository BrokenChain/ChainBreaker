from flask import Flask, render_template
from Login.login import login

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(home.html)

@app.route("/login", methods=['GET', 'POST'])
def login():
    return render_template(personal_page.html)


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')