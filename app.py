from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), '..', 'database', 'college_predictor.db')


def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    cutoff = float(data.get('cutoff', 0))
    category = data.get('category')
    branch = data.get('branch')

    conn = get_connection()
    cursor = conn.execute(
        """
        SELECT name, branch, cutoff FROM colleges
        WHERE branch = ? AND category = ? AND cutoff <= ?
        ORDER BY cutoff DESC
        LIMIT 20
        """,
        (branch, category, cutoff)
    )
    colleges = [dict(row) for row in cursor.fetchall()]
    conn.close()

    return jsonify({'colleges': colleges})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
