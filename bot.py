import discord
from discord.ext import commands
from flask import Flask, request, jsonify

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

app = Flask(__name__)

# 봇 토큰
DISCORD_TOKEN = "MTIzNTEyNDUxODkxODQyNjY2Ng.GrpmzW.7Rf1l4xpDG6mG4mO5Bk346ONYNMSjEhwrMlxLU"

# Discord 메시지 전송 엔드포인트
@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    channel_id = data.get('channel_id')
    message = data.get('message')

    if channel_id and message:
        channel = bot.get_channel(int(channel_id))
        if channel:
            bot.loop.create_task(channel.send(message))
            return jsonify({"status": "success", "message": "Message sent!"}), 200
        else:
            return jsonify({"status": "error", "message": "Invalid channel ID"}), 400
    return jsonify({"status": "error", "message": "Missing data"}), 400

# Flask 앱 실행
def run_flask():
    app.run(host="0.0.0.0", port=5000)

# 봇 실행
if __name__ == "__main__":
    import threading
    threading.Thread(target=run_flask).start()
    bot.run(DISCORD_TOKEN)
