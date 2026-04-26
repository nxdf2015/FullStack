
const Header = ({course}) => <h1>{course}</h1>

const Part = ({course, exercise}) => <p>{course} {exercise}</p>

const Content = ({course1, course2, course3, exercise1, exercise2, exercise3}) => 
<>
  <Part course={course1} exercise={exercise1}/>
  <Part course={course2} exercise={exercise2}/>
  <Part course={course3} exercise={exercise3}/>
</>

const Total = ({part1,part2,part3}) => <p> Number of exercises {part1 + part2 + part3 }</p>

const App = () => {
const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content course1={part1} exercise1={exercises1}
       course2={part2} exercise2={exercises2}
       course3={part3} exercise3={exercises3}/>
      
      <Total part1={exercises1} part2={exercises2} part3={exercises3}/>
    </div>
  )
}


export default App