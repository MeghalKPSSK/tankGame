# 🚀 Tank Classic Game (Web Version)

A modern browser-based remake of the classic "Tank" game featuring:
- 🎮 Real-time player controls and enemy AI
- 🧠 Scoring system with leaderboard
- 🎨 Skins and upgrades

Built with:
- **Frontend:** React (Vite-based CBMS)
- **Backend:** Node.js + Express
- **Database:** MongoDB via Mongoose

---

## 📁 Project Structure

```
/tank-classic-game/
├── client/       # React frontend
├── server/       # Node.js backend
├── .env
├── package.json
├── README.md
```

---

## ⚙️ Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tank-classic-game.git
cd tank-classic-game
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create `.env` file with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| POST   | /api/scores | Save player score   |
| GET    | /api/scores | Get top 10 scores   |

---

## ✨ Planned Features
- Advanced enemy AI
- Destructible walls
- Player power-ups
- Map themes and levels
- Multiplayer support
- Player authentication
- Global cloud leaderboard

---

## 🙌 Acknowledgements
Inspired by the classic "Tank 1990" brick console game.

