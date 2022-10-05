import { useState } from 'react';
import './index.scss';
import Result from './Result'


function Game({ questions }) {
    const [step, setStep] = useState(0);
    let [result, setResult] = useState(0)

    const chooseAnswer = (variant) => {
        setStep(step + 1);
        if (questions[step].variants.indexOf(variant) === questions[step].correct) { setResult(result += 1) }
        console.log(result);
    }
    const percentage = (step / questions.length) * 100

    if (percentage < 100) {
        return (<>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{questions[step].title}</h1>
            <ul>
                {questions[step].variants.map(variant => <li key={variant} onClick={() => chooseAnswer(variant)}>{variant}</li>)}
            </ul>
        </>)
    }

    else return (<Result result={result} />)




}

export default Game;