import pandas


def get_user_by_username(username):
    user_data = pandas.read_csv('Registration/users_data.csv')

    if user_data.empty:
        return 0

    for index, row in user_data.iterrows():
        if row['username'] == username:
            return {
                "success": "true",
                "username:": row['username'],
                "email": row['email'],
                "state": row['state']
            }
    return {
        "success": "false"
    }
