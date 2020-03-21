import pandas

users_file = 'backend/Registration/users_data.csv'


def get_users_with_points():
    table = {}
    data = pandas.read_csv(users_file)

    for index, row in data.iterrows():
        table[row['username']] = row['points']

    return {
        "success": "true",
        "table": table
    }
