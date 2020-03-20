from Getter.getUser import get_user_by_username

def profile_data(username):

    result = get_user_by_username(username)

    if result["success"] == "false":
        return {
        "success": "false"
        }

    return {
        "username:": result['username'],
        "email": result['email'],
        "state": result['state']
    }