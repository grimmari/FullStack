import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    const Header = () => {
        return (
            <h1>Half Stack -sovelluskehitys</h1>
        )
    }
    const Content = (props) => {
        const part = props.part
        const excercises = props.excercises
        return (
            <div>
                <Part part={part1} exercises={exercises1} />
                <Part part={part2} exercises={exercises2} />
                <Part part={part3} exercises={exercises3} />

            </div>

        )
    }
    const Total = () => {
        return (
            <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
        )
    }

    const Part = (props) => {
        return (
            <p>
                {props.part} {props.exercises}
            </p>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Content />
            <Total />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))