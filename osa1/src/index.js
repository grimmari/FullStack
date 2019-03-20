import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    const Header = () => {
        return (
            <h1>Half Stack -sovelluskehitys</h1>
        )
    }
    const Content = () => {
        
        return (
            <div>
                <Part part={parts[0].name} exercises={parts[0].exercises} />
                <Part part={parts[1].name} exercises={parts[1].exercises} />
                <Part part={parts[2].name} exercises={parts[2].exercises} />
    
            </div>
    
        )
    }
    const Total = () => {
        
        return (
            <p>yhteensä {parts[0].exercises + parts[1].exercises+parts[2].exercises} tehtävää</p>
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
            <Content parts={parts}/>
            <Total />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))