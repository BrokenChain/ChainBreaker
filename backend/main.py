from flask import Flask, render_template, request

from Login.login import check_user
from Registration.registration import register_user
from Getter.getUser import get_user_by_username
from Heatmap.heatmap import get_heatmap_data

app = Flask(__name__)


@app.route("/")
def home():
    return get_heatmap_data()


@app.route("/login", methods=['POST'])
def login():
    print(request.args)

    username = request.form['username']
    password = request.form['password']

    if not check_user(username, password):
        # return code fail
        return {
            "success": "false"
        }

    # return user data

    data = {'heatmap': get_heatmap_data(), 'userinfo': get_user_by_username(username)}
    return data


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
        return {
            "success": "false"
        }


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
