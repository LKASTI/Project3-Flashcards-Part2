import react from "react"
import { useState } from 'react'
import "./flashcard.css"
const Flashcard = (props) => {
    const [question, setQuestion] = useState(props.dictionary[0].q)
    const [answer, setAnswer] = useState(props.dictionary[0].a)
    const [mediaSource, setMediaSource] = useState(props.dictionary[0].source)
    const [isFlipped, setIsFlipped] = useState(false)

    const handleChangeCard = () => {
        //generate a random integer between 0 and numCards-1
        //if the current card matches the card at that index then repeat
        //set question and answer state to the key and value at that index
        let index = 0;
        while(props.dictionary[index].q === question)
        {
            index = Math.floor(Math.random() * props.dictionary.length);
        }
        setIsFlipped(false)
        setTimeout(() => {
            setQuestion(props.dictionary[index].q)
            setAnswer(props.dictionary[index].a)
            setMediaSource(props.dictionary[index].source)}
            , 150)
    }

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    return(
        <>
            <div className="scene">
                <div className={`card ${isFlipped? "is-flipped" : ""}`}>
                    <div className="flashcard front" onClick={flipCard}>
                        <p className="flashcard-source">{mediaSource}</p>
                        <p className="flashcard-info">{question}</p>
                    </div>
                    <div className="flashcard back" onClick={flipCard}>
                        <p className="flashcard-info push-center">{answer}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleChangeCard}>↺</button>
        </>
    );
}

export default Flashcard