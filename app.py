from flask import Flask, redirect, render_template, request

app = Flask(__name__, template_folder="", static_folder="")
app.config["EXPLAIN_TEMPLATE_LOADING"] = True
@app.route('/', methods=["GET","POST"])
def index():
    return render_template('main.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)