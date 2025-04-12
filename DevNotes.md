# 🛠️ Tank Game Dev Notes

## 📊 Database Structure (MySQL)

### Player
| Field       | Type       | Notes                 |
|-------------|------------|-----------------------|
| UID         | INT        | Primary Key (AUTO_INCREMENT) |
| Name        | VARCHAR    | Input                 |
| Age         | INT        | Input                 |
| Level       | INT        | Default 1             |
| HighScore   | INT        | Default 0             |
| IsDeleted   | TINYINT    | Default 0             |

### Levels
| Field         | Type     | Notes                |
|---------------|----------|----------------------|
| UID           | INT      | Primary Key          |
| LevelID       | INT      | 1, 2, 3...           |
| LevelName     | VARCHAR  | e.g. Level 1         |
| LevelDesc     | TEXT     | Description          |
| Score         | INT      | Total score required |
| typeOneScore  | INT      |                      |
| typeTwoScore  | INT      |                      |
| typeThreeScore| INT      |                      |
| typeFourScore | INT      |                      |

### PlayerLevel
| Field         | Type     | Notes                |
|---------------|----------|----------------------|
| Player        | INT      | Foreign key → Player.UID |
| Level         | INT      | Foreign key → Levels.UID |
| Score         | INT      |                      |
| Lives         | INT      |                      |
| BonusForLives | INT      |                      |
| LevelScore    | INT      | Total level score    |
| typeOne       | INT      |                      |
| typeTwo       | INT      |                      |
| typeThree     | INT      |                      |
| typeFour      | INT      |                      |
| Completed     | BOOLEAN  | TRUE if level finished |

### PlayerLevelHistory
(Same structure as PlayerLevel, for audit/history)

### LevelConfig
📝 *Structure TBD – can include time limits, allowed weapons, enemy difficulty, etc.*

---

## 🧠 Dev Notes

- Use foreign key constraints to ensure Player and Level consistency.
- Consider indexing PlayerLevel on `Player` + `Level` for fast lookup.
- Completion logic can be determined from scores or explicitly tracked (added `Completed` field).
- `PlayerLevelHistory` can be used to track retry attempts or improvements.
- Consider gamification elements: badges, progress bars, unlockable maps.
- Future configs: Add JSON-based field in LevelConfig for dynamic rule definitions.
