import { useState } from 'react';
import './index.scss';
import questions from './questions';
import Game from './Game';

function Result({ result }) {
    const [newAttempt, setNewAttempt] = useState(false)
    const tryAgain = () => {
        setNewAttempt(true)
    }
    if (!newAttempt) {
        return (
            <div className="result">
                <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>Вы отгадали {result} ответа из {questions.length}</h2>
                <button onClick={tryAgain}>Попробовать снова</button>
            </div>
        )
    }


    else return <Game questions={questions} />



}



export default Result
