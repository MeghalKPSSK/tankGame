# 🚀 Tank Classic Game (Web Version)

A modern browser-based remake of the classic "Tank" game with:
- 🎨 Enhanced graphics and animations
- 🎮 Real-time player controls and enemy AI
- 🧐 Scoring system with persistent leaderboard
- 🎨 Customizations (skins, upgrades)

Frontend: **React (CBMS structure)**  
Backend: **Node.js + Express**  
Database: **MongoDB (via Mongoose)**

---

## 📁 Folder Structure

```
/tank-classic-game/
│
├── client/                      # React Frontend (CBMS Style)
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Images, sprites, sound effects
│   │   ├── modules/             # Feature-based folders
│   │   │   ├── game/            # Game-specific components, hooks, and models
│   │   │   │   ├── components/  # GameCanvas, HUD, etc.
│   │   │   │   ├── hooks/       # useGameController
│   │   │   │   ├── models/      # GameModel
│   │   │   │   └── utils/       # Math, collision, movement utils
│   │   │   ├── leaderboard/     # Leaderboard-related views & services
│   │   │   └── score/           # Score saving logic
│   │   ├── services/            # Axios services for API calls
│   │   ├── App.js
│   │   └── index.js
│
├── server/                     # Node.js + Express Backend
│   ├── config/                 # DB connection & config
│   ├── controllers/            # Express route handlers
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   ├── middleware/             # Auth, error handling (optional)
│   └── app.js
│
├── .env
├── package.json
├── README.md
```

---

## ⚙️ Setup Instructions

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
Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
```
Start the backend server:
```bash
node app.js
```

### 3. Frontend Setup
```bash
cd client
npm install
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | /api/score         | Save player score        |
| GET    | /api/leaderboard   | Fetch top 10 scores      |

---

## 🧱 Sample Backend Code

### `models/Score.js`
```js
const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  playerName: String,
  score: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', ScoreSchema);
```

### `controllers/scoreController.js`
```js
const Score = require('../models/Score');

exports.saveScore = async (req, res) => {
  const { playerName, score } = req.body;
  const newScore = new Score({ playerName, score });
  await newScore.save();
  res.status(201).json({ message: 'Score saved!' });
};

exports.getLeaderboard = async (req, res) => {
  const scores = await Score.find().sort({ score: -1 }).limit(10);
  res.json(scores);
};
```

---

## 💻 Frontend Starter Code

### `modules/game/models/GameModel.js`
```js
const GameModel = {
  player: { x: 200, y: 200, direction: 'UP', health: 100 },
  enemies: [],
  bullets: [],
  score: 0
};

export default GameModel;
```

### `modules/game/components/GameCanvas.jsx`
```jsx
import { useRef, useEffect } from 'react';

const GameCanvas = ({ model }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';
      ctx.fillRect(model.player.x, model.player.y, 20, 20);
    };

    draw();
  }, [model]);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default GameCanvas;
```

### `modules/game/hooks/useGameController.js`
```js
import { useEffect } from 'react';

export const useGameController = (model, setModel) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newModel = { ...model };
      switch (e.key) {
        case 'ArrowUp': newModel.player.y -= 5; break;
        case 'ArrowDown': newModel.player.y += 5; break;
        case 'ArrowLeft': newModel.player.x -= 5; break;
        case 'ArrowRight': newModel.player.x += 5; break;
        default: break;
      }
      setModel(newModel);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [model]);
};
```

---

## ✨ Future Enhancements
- Enemy AI and bullet mechanics
- Destructible environments
- Player health, power-ups
- Skin & theme customizations
- Global scoreboards and player profiles

---

## 🙌 Acknowledgements
Inspired by the original "Tank 1990" game from the Brick Console era.

