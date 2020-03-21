from flask import Flask, request
from flask_cors import CORS, cross_origin

from Login.login import check_user
from Registration.registration import register_user
from Getter.getUser import get_user_by_username
from Heatmap.heatmap import get_heatmap_data
from Profile.profile_controller import profile_data
from Ranking.ranking import get_users_with_points, add_points_to_user, sub_points_to_user

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
def register_user():
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


@app.route("/profile")
def user_profile():
    username = request.json['username']

    return profile_data(username)


@app.route("/table")
def get_table():
    return get_users_with_points()


@app.route("/addpoints")
def add_points():
    username = request.json['username']
    points = request.json['points']
    return add_points_to_user(username, points)


@app.route("/subpoints")
def sub_points():
    username = request.json['username']
    points = request.json['points']
    return sub_points_to_user(username, points)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
