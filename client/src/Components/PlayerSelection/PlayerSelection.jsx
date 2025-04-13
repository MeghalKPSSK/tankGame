import React, { useState } from "react";
import style from "./PlayerSelection.module.css";
import { Modal, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const PlayerSelection = () => {
    const [players, setPlayers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [playerName, setPlayerName] = useState("");

    const addPlayer = () => setShowPopup(true);

    const resetPopup = () => {
        setShowPopup(false);
        setPlayerName("");
    };

    const handleAddPlayer = () => {
        if (playerName) {
            setPlayers([...players, { name: playerName }]);
            toast.success("Player added successfully!");
            resetPopup();
        } else {
            toast.error("Please fill in the name.");
        }
    };
    const navigate = useNavigate();
    const handleSession = (name) => {
        sessionStorage.setItem('PlayerSession',JSON.stringify({name:name}));
        console.log(`Starting session for ${name}`);
        navigate('/levelSelection');
    };

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img
                    src="/assets/PlayerSelectionPage.png"
                    alt="Player"
                    className={style.playerImage}
                />
            </div>
            <div className={style.playerList}>
                <ul>
                    <li className={style.addPlayer} onClick={addPlayer}>
                        + Add Player
                    </li>
                    {players.map((player, index) => (
                        <li key={index} className={style.playerItem} onClick={() => {handleSession(player.name)}}>
                            {player.name}
                        </li>
                    ))}
                </ul>
            </div>

            <Modal show={showPopup} onHide={resetPopup} centered >
            <div className={style.modalContainer}>
                <Modal.Header closeButton className={style.modalHeader}>
                    <Modal.Title className={style.modalTitle}>Add Player</Modal.Title>
                </Modal.Header>
                <Modal.Body className={style.modalBody}>
                    <Form>
                        <Form.Group controlId="playerName">
                            <Form.Label className={style.label}>Player Name</Form.Label>
                            <Form.Control
                                className={style.input}
                                type="text"
                                placeholder="Enter player name"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className={style.modalFooter}>
                    <Button className={style.neonButton} onClick={handleAddPlayer}>
                       + Add Player
                    </Button>
                </Modal.Footer>
                </div>
            </Modal>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}
                closeOnClick pauseOnHover draggable toastClassName={style.neonToast}
            />
        </div>
    );
};

export default PlayerSelection;
