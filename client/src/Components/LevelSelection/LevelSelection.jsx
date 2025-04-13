import React, { useState, useEffect, useRef } from "react";
import styles from "./LevelSelection.module.css";

const LevelSelection = () => {
    const unlockedLevel = parseInt(sessionStorage.getItem("level")) || 1;
    const levels = [1, 2, 3, 4, 5];
    const [selectedLevel, setSelectedLevel] = useState(parseInt(sessionStorage.getItem("level")) || 1);
    const buttonsRef = useRef([]);

    useEffect(() => {
        // Focus the first unlocked level button on mount
        if (buttonsRef.current[selectedLevel - 1]) {
            buttonsRef.current[selectedLevel - 1].focus();
        }
    }, [selectedLevel]);

    const levelSelect = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            setSelectedLevel((prev) => Math.max(1, prev - 1));
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            setSelectedLevel((prev) => Math.min(unlockedLevel, prev + 1));
        } else if (e.key === "Enter") {
            alert(`Level ${selectedLevel} selected!`);
        } else if (e.type === "click") {
            const clickedLevel = parseInt(e.target.innerText.split(" ")[1]);
            if (clickedLevel) {
                setSelectedLevel(clickedLevel); 
                alert(`Level ${clickedLevel} selected!`);
                return;
            }
        }
    };

    const handleMouseEnter = (level) => {
        if (level <= unlockedLevel) {
            setSelectedLevel(level);
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowRight") {
            const hoveredButton = document.querySelector(`.${styles.selected}`);
            if (hoveredButton) {
                const hoveredLevel = parseInt(hoveredButton.innerText.split(" ")[1]);
                setSelectedLevel(hoveredLevel);
            }
        }
    };

    return (
        <div
            className={styles.container}
            onKeyDown={levelSelect}
            onKeyUp={handleKeyUp}
            onClick={levelSelect}
            tabIndex={0}
        >
            <h2>Level Selection</h2>
            <ul>
                {levels.map((level) => (
                    <li key={level}>
                        <button
                            ref={(el) => (buttonsRef.current[level - 1] = el)}
                            disabled={level > unlockedLevel}
                            className={level <= unlockedLevel ? (selectedLevel === level ? styles.selected : styles.unselected) : ""}
                            onMouseEnter={() => handleMouseEnter(level)}
                        >
                            Level {level}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LevelSelection;