import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const headers = [{
        caption: 'Anna palautetta'
    }, {
        caption: 'Statistiikka'
    }
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
    const Good=()=>{
        return (
            <div>hyvä: {good}</div>
        )
    }
    const Neutral=()=>{
        return (
            <div> neutaraali: {neutral} </div>
        )
    }
    const Bad=()=>{
        return (
            <div>huono: {bad}</div>
        )
    }



    return (
        <div>
            <Header id='0' />

            <button onClick={increaseGood}>
                Hyvä
      </button>
            <button onClick={increaseNeutral}>
                Neutraali
      </button>
            <button onClick={increaseBad}>
                Huono
      </button>
            <Header id='1' />
            <Good />
            <Neutral />
            <Bad />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)