import { Inter } from "next/font/google";
import { useState } from "react";
import { questions } from "@/data/questions1";
import styles from "./Game.module.css";

const inter = Inter({ subsets: ["latin"] });

const Game = () => {
    const [question, setQuestion] = useState(``);

    const handleNewQuestion = () => {
        setQuestion(questions[_randInt(questions.length)]);
    };

    const _randInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    return (
        <div className={styles.game_container}>
            <h1 className={`${inter.className} ${styles.title_text}`}>Truth 🤔 or Drink 🍸?</h1>
            <button
                className={`${inter.className} ${styles.next_question_button}`}
                onClick={handleNewQuestion}
            >
                Next Question
            </button>
            {question ? (
                <div className={styles.question_container}>
                    <p className={`${inter.className} ${styles.question_text}`}>{question}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Game;
