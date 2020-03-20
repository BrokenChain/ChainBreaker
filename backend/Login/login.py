import pandas

def login(username, password):
    user_data = pandas.read_csv('login_credentials.csv', names = ['user', 'password'])

    if user_data.empty:
        return 0

    for index, row in user_data.iterrows():
        if row['user'] == username and row['password'] == password:
            return 1

    return 0