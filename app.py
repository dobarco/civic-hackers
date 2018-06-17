import json

from flask import Flask, request
from core.reader import text_extractor
from core.nlu import insights

app = Flask(__name__)


@app.route('/insights', methods=['GET', 'POST'])
def analyze():
    file_path = ""
    if request.method == 'POST':
        f = request.files['file']
        file_path = 'files/{}'.format(f.name)
        f.save(file_path)
    result = insights(text_extractor(file_path))

    return json.dumps(result)


if __name__ == '__main__':
    app.run()