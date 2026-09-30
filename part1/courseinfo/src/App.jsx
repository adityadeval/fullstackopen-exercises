import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content from_app_p1={part1} from_app_e1={exercises1} from_app_p2={part2} from_app_e2={exercises2} from_app_p3={part3} from_app_e3={exercises3}/>
      <Total from_app_e1={exercises1} from_app_e2={exercises2} from_app_e3={exercises3}/>
    </div>
  )
}

export default App