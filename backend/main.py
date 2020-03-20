from flask import Flask, render_template, request

from Login.login import check_user
from Registration.registration import register_user

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/login", methods=['POST'])
def login():

    print(request.args)

    username = request.form['username']
    password = request.form['password']

    if not check_user(username, password):
        return "fail"
    
    # return user data
    return "success"

@app.route("/users", methods=['POST'])
def registerUser():

    print(request.args)

    username = request.json['username']
    password = request.json['password']
    email = request.json["email"]
    state = request.json['state']


    if register_user(username, password, email, state):
        return {
            "success": "true"
        }
    else:
        return  {
            "success": "false"
        }


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')