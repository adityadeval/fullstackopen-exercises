import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

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
      <Content from_app_p1={part1.name} from_app_e1={part1.exercises} from_app_p2={part2.name} from_app_e2={part2.exercises} from_app_p3={part3.name} from_app_e3={part3.exercises}/>
      <Total from_app_e1={part1.exercises} from_app_e2={part2.exercises} from_app_e3={part3.exercises}/>
    </div>
  )
}
export default App