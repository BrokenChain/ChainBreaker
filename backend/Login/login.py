import pandas


def check_user(username, password):
    user_data = pandas.read_csv('Registration/users_data.csv')

    if user_data.empty:
        return 0

    for index, row in user_data.iterrows():
        if row['username'] == username and row['password'] == password:
            return 1
    return 0
