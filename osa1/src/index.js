import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
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
      }
    
    const Header = () => {
        console.log(course)
        return (
            <h1>{course.name}</h1>
        )
    }
    const Content = () => {
        
        return (
            <div>
                <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
                <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
                <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
                
            </div>
    
        )
    }
    const Total = () => {
        
        return (
            <p>yhteensä {course.parts[0].exercises + course.parts[1].exercises+course.parts[2].exercises} tehtävää</p>
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
            <Content parts={course.parts}/>
            <Total />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))