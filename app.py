from flask import Flask, jsonify
import threading
import time
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # CORS 허용

# Traffic light states
traffic_states = [
    {"color": "green", "duration": 10},
    {"color": "orange", "duration": 3},
    {"color": "red", "duration": 20}
]

# Shared state to track the current traffic light color
current_state = {"color": "red"}  # Default initial state

def cycle_traffic_light():
    while True:
        for state in traffic_states:
            current_state["color"] = state["color"]
            time.sleep(state["duration"])

# Start the traffic light cycle in a separate thread
thread = threading.Thread(target=cycle_traffic_light, daemon=True)
thread.start()

@app.route("/traffic-light", methods=["GET"])
def get_traffic_light():
    return jsonify(current_state)

if __name__ == "__main__":
    # app.run(debug=True, host="0.0.0.0", port=5000)
    app.run(debug=False, port=5000)
