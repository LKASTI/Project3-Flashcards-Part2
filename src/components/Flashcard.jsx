import react from "react"
import { useState, useEffect } from 'react'
import "./flashcard.css"

const Flashcard = (props) => {
    const [question, setQuestion] = useState(props.dictionary[0].q)
    const [answer, setAnswer] = useState(props.dictionary[0].a)
    const [cardIndex, setCardIndex] = useState(0)
    const [mediaSource, setMediaSource] = useState(props.dictionary[0].source)
    const [isFlipped, setIsFlipped] = useState(false)
    const [guess, setGuess] = useState("")
    const [isCorrectGuess, setIsCorrectGuess] = useState(false)
    const [isWrongGuess, setIsWrongGuess] = useState(false)
    
    useEffect(() => {
        setQuestion(props.dictionary[cardIndex].q)
        setAnswer(props.dictionary[cardIndex].a)
        setMediaSource(props.dictionary[cardIndex].source)
        setIsCorrectGuess(false)
        setIsWrongGuess(false)
    }, [cardIndex])

    const handleShuffle = () => {
        props.dictionary.sort(() => Math.random() - 0.5)
        setIsFlipped(false)
        setIsCorrectGuess(false)
        setIsWrongGuess(false)
        setTimeout(() => {
                setQuestion(props.dictionary[0].q)
                setAnswer(props.dictionary[0].a)
                setMediaSource(props.dictionary[0].source)
                setCardIndex(0)}
                , 150)
        console.log(props.dictionary)
    }

    const handleNextCard = () => {
        if(cardIndex < props.dictionary.length-1)
        {
            setIsFlipped(false)
            setTimeout(() => {setCardIndex(cardIndex+1)} , 150)
        }
    }

    const handlePrevCard = () => {
        if(cardIndex > 0)
        {
            setIsFlipped(false)
            setTimeout(() => {setCardIndex(cardIndex-1)} , 150)
        }
    }

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    const handleGuessChange = (e) => {
        setGuess(e.target.value)
    }

    const handleGuessSubmit = (e) => {
        e.preventDefault()
        if(guess === "" || guess === " ")
        {
            setIsWrongGuess(true)
            setIsCorrectGuess(false)
        }
        else{
            if(answer.includes(guess))
            {
                setIsCorrectGuess(true)
                setIsWrongGuess(false)
            }
            else
            {
                setIsWrongGuess(true)
                setIsCorrectGuess(false)
            }
        }
        
    }

    return(
        <>
            <div className="scene">
                <div className={`card ${isFlipped? "is-flipped" : ""}`}>
                    <div className="flashcard front" onClick={flipCard}>
                        <p className="flashcard-index">{cardIndex}</p>
                        <p className="flashcard-source">{mediaSource}</p>
                        <p className="flashcard-info">{question}</p>
                    </div>
                    <div className="flashcard back" onClick={flipCard}>
                        <p className="flashcard-info push-center">{answer}</p>
                    </div>
                </div>
            </div>
            <form className="guess-container" onSubmit={handleGuessSubmit}>
                <label className="description ">
                    Guess the answer here:
                    <input 
                        className={`${isCorrectGuess? "green-border" : (isWrongGuess? "red-border" : "grey-border")}`} 
                        type="text" 
                        value={guess} 
                        onChange={handleGuessChange}
                    />
                </label>
                <button type="submit">Submit Guess</button>
            </form>
            <div className='button-container'>
                <button onClick={handleShuffle}>Shuffle</button>
                <button onClick={handlePrevCard}>←</button>
                <button onClick={handleNextCard}>→</button>
            </div>
        </>
    );
}

export default Flashcard