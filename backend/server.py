from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Kann wer ein cooles Icon erstellen?"

if __name__ == '__main__':
    app.run()