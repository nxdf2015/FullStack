import { useState } from 'react'

const ButtonFeedBack = ({handler, name})=> 
    <button   onClick={ handler }>{name}</button>


const StatisticLine = ({text, value}) => <tr><th> {text}</th><td>  {value} </td></tr>
const Statistics = ({good, neutral, bad}) => {
let total = bad + neutral + good 
let  average =  total == 0 ? 0 : (good - bad )/ total
return  <div>

 { total > 0 ?  <div> 
    <table>
      <thead>
      <tr>
        <th>

        <h1>statistics</h1>
        </th>
        </tr>

      </thead>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="total" value={total}/>
       
      </tbody>
    </table>
  </div>:
  "No feedback given"
}

</div>


}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  return (
    <div>
      <h1>give feedback</h1>
      <ButtonFeedBack name="good" handler={ () => setGood(good + 1)}/>
      <ButtonFeedBack name="neutral" handler={ () => setNeutral(good + 1)}/>
      <ButtonFeedBack name="bad" handler={ () => setBad(good + 1)}/>
       

     <Statistics bad={bad} neutral={neutral} good={good}/>
    </div>
  )
}

export default App