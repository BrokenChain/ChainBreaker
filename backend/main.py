from flask import Flask, request
from flask_cors import CORS, cross_origin

from Login.login import check_user
from Registration.registration import register_user
from Getter.getUser import get_user_by_username
from Heatmap.heatmap import get_heatmap_data

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {
        'success': 'true',
        'heatmap': get_heatmap_data()
    }

@app.route("/login", methods=['POST'])
@cross_origin()
def login():
    print(request.args)

    username = request.json['username']
    password = request.json['password']

    if not check_user(username, password):
        # return code fail
        return {
            "success": "false"
        }

    # return user data

    data = {
        'success': 'true',
        'heatmap': get_heatmap_data(),
        'userinfo': get_user_by_username(username)
    }
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
