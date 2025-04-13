import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate('/playerSelection');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tank Game</h1>
            <img className={styles.image} src="/assets/TankHomePage.png" alt="Tank Game" />
            <button className={styles.button} onClick={() => handleStartGame()}>
                Start Game
            </button>
        </div>
    );
};

export default Home;