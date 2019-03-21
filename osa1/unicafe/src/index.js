import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (caption) => {
    const headers = [
        { caption: 'Anna palautetta' },
        { caption: 'Statistiikka' }
    ]
    
    return (
        <div>
            <h2>{headers[caption.id].caption}</h2>
        </div>
    )
}

const Average = ({ good, neutral, bad }) => {

    const avg = (good - bad) / (good + bad + neutral)
    
    if (isNaN(avg)) {
        return (
            <div>Keskiarvo: -</div>
        )
    }


    return (
        <div>Keskiarvo:{avg}</div>
    )
}
const Total = ({ good, neutral, bad }) => {


    const sum = good + neutral + bad
    return (
        <div>Yhteensä: {sum} </div>
    )
}
const PositiveAverage = ({good , neutral , bad}) => {
    const positive = good / (good + neutral + bad) * 100
    if (isNaN(positive)) {
    return (
        <div>Positiivisia: -</div>
    )}
    return (
        <div>Positiivisia: {positive} %</div>
    )
}



const App = (props) => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)




    const increaseNeutral = () => {
        setNeutral(neutral + 1)

    }
    const increaseGood = () => {
        setGood(good + 1)
    }
    const increaseBad = () => {
        setBad(bad + 1)
    }



  



    return (
        <div>
            <Header id='0' />

            <button onClick={increaseGood}>Hyvä</button>
            <button onClick={increaseNeutral}>Neutraali</button>
            <button onClick={increaseBad}>Huono</button>
            <Header id='1' />
            <div>Hyvä: {good}</div>
            <div>Neutraali: {neutral}</div>
            <div>Huono: {bad}</div>

            <Total good={good} bad={bad} neutral={neutral} />
            <Average good={good} bad={bad} neutral={neutral} />
            <PositiveAverage good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)