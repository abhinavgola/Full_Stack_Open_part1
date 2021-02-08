import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const _Statistics = ({g,n,b}) => {

  var all = g + n + b
  var positive = (g/all)*100
  var average = ( g - b )/all
  
  if(all===0){
return (

<div>

 <p>No feedback given</p>

</div>
)
  }

return(
  <div>
     <p>Statistics</p>
    <table>
      <tbody>
     < Statistic text = 'Good' value = {g} />
     < Statistic text = 'Neutral' value = {n} />
     < Statistic text = 'Bad' value = {b} />
     < Statistic text = 'All' value = {all} />
     < Statistic text = 'Average' value = {average} />
     < Statistic text = 'Positive' value = {positive} />
     </tbody>
    </table>
  </div>
  )
}

const Statistic = ({text, value}) => {

  if ( text === 'Positive'){
    return (
        <tr>
          <td> {text} </td>
          <td> {value} % </td>
        </tr>
     )
  }

  else {
   return (
        <tr>
          <td> {text} </td>
          <td> {value} </td>
        </tr>
   )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleNeutralClick = ()  => {
    //console.log(neutral)
    setNeutral(neutral + 1)
  }
  
  const handleGoodClick = ()  => {
    //console.log(good)
    setGood(good + 1)
  }
  
  const handleBadClick = ()  => {
    //console.log(bad)
    setBad(bad + 1)
  }  

  return (
    <div>
      <p>Give feedback </p>
      
      <Button onClick = {handleGoodClick} text = 'Good' />
      <Button onClick = {handleNeutralClick} text = 'Neutral' />
      <Button onClick = {handleBadClick} text = 'Bad' />

      <_Statistics g ={good} n = {neutral} b ={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)