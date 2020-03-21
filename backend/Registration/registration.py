import pandas
import csv

users_file = 'backend/Registration/users_data.csv'


def register_user(username, password, email, state):
    users = []
    with open(users_file, 'r') as csvfile:
        users_reader = csv.reader(csvfile, delimiter=',')
        print(users_reader)
        for row in users_reader:
            users.append(row)

    if len(users) == 0:
        with open(users_file, 'w') as csvfile:
            fieldnames = ['username', 'password', 'email', 'state', 'points']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

    new_user = {
        'username': username,
        'password': password,
        'email': email,
        'state': state,
        'points': 0
    }
    with open(users_file, 'a', newline='') as csvfile:
        fieldnames = ['username', 'password', 'email', 'state', 'points']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writerow(new_user)

    return 1
