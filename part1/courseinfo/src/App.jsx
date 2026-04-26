
const Header = ({course}) => <h1>{course}</h1>

const Part = ({course}) => <p>{course.name} {course.exercises}</p>

const Content = ({course1, course2, course3}) => 
<>
  <Part course={course1}/>
  <Part course={course2}/>
  <Part course={course3}/>
  
</>

const Total = ({part1,part2,part3}) => <p> Number of exercises {part1.exercises + part2.exercises + part3.exercises }</p>

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
      <Content course1={part1} 
       course2={part2}
       course3={part3} />
      
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}


export default App