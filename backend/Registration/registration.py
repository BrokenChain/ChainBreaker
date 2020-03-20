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

    print("users")
    print(users)


    if len(users) == 0:
        print("len 0")
        with open(users_file, 'w') as csvfile:
            fieldnames = ['username', 'password', 'email', 'state']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            print("header written")

    new_user = {
        'username': username,
        'password': password,
        'email': email,
        'state': state
    }
    with open(users_file, 'a', newline='') as csvfile:
        fieldnames = ['username', 'password', 'email', 'state']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writerow(new_user)

    return 1