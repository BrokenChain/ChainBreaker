import pandas

users_file = 'backend/Registration/users_data.csv'


def get_users_with_points():
    table = []
    data = pandas.read_csv(users_file)

    for index, row in data.iterrows():
        user = {
            'username': row['username'],
            'state': row['state'],
            'points': row['points']
        }
        table.append(user)

    return {
        "success": "true",
        "table": table
    }


def add_points_to_user(username, points):
    data = pandas.read_csv(users_file)
    for index, row in data.iterrows():
        if row['username'] == username:
            row['points'] += points
    data.to_csv(users_file)
    return {
        "success": "true"
    }


def sub_points_to_user(username, points):
    data = pandas.read_csv(users_file)
    for index, row in data.iterrows():
        if row['username'] == username:
            row['points'] -= points
    data.to_csv(users_file)
    return {
        "success": "true"
    }
