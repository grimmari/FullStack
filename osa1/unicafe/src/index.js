import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const headers = [
        { caption: 'Anna palautetta' },
        { caption: 'Statistiikka' }
    ]
    const Header = (props) => {
        return (
            <div>
                <h2>{headers[props.id].caption}</h2>
            </div>
        )
    }

    const increaseNeutral = () => {
        setNeutral(neutral + 1)
    }
    const increaseGood = () => {
        setGood(good + 1)
    }
    const increaseBad = () => {
        setBad(bad + 1)
    }
    const Good = () => {
        return (
            <div>Hyvä: {good}</div>
        )
    }
    const Neutral = () => {
        return (
            <div>Neutaraali: {neutral} </div>
        )
    }
    const Bad = () => {
        return (
            <div>Huono: {bad}</div>
        )
    }
    const Total = () => {

        return (
            <div>Yhteensä: {good + neutral + bad} </div>
        )
    }
    const Average = () => {
        let average = bad / good
        return (
            <div>Keskiarvo: {average}</div>

        )
    }
    const PositiveAverage = () => {
        let positive = good / (good + neutral + bad) * 100
        return (
            <div>Positiivisia: {positive} %</div>
        )
    }



    return (
        <div>
            <Header id='0' />

            <button onClick={increaseGood}>Hyvä</button>
            <button onClick={increaseNeutral}>Neutraali</button>
            <button onClick={increaseBad}>Huono</button>
            <Header id='1' />
            <Good />
            <Neutral />
            <Bad />
            <Total />
            <Average />
            <PositiveAverage />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)