import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
      }
      const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      }
      const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
      }

    const Header = () => {
        return (
            <h1>Half Stack -sovelluskehitys</h1>
        )
    }
    const Content = (props) => {
        
        return (
            <div>
                <Part part={part1.name} exercises={part1.exercises} />
                <Part part={part2.name} exercises={part2.exercises} />
                <Part part={part3.name} exercises={part3.exercises} />
    
            </div>
    
        )
    }
    const Total = (props) => {
        
        return (
            <p>yhteensä {part1.exercises + part2.exercises + part3.exercises} tehtävää</p>
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