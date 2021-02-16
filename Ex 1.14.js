import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0));

// (arr=[]).length; arr.fill(0); works faster than new Array(len);

  var max = votes.indexOf(Math.max(...votes));

  const handleNextClick = ()  => {

    setSelected(Math.floor (Math.random() * 6));
  }  

  const handleVoteClick = ()  => {

    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy)

  } 

  return (
    <div>
      
      <h2>Anecdote of the day</h2>
      <p> {props.anecdotes[selected]} </p>
      <p> has {votes[selected]} votes </p>

      <Button onClick = {handleNextClick} text = 'Next Anecdote' />
      <Button onClick = {handleVoteClick} text = 'Vote' />

      <h2>Anecdote with most votes</h2>

      <p> {props.anecdotes[max]} </p>
      <p> has {votes[max]} votes </p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({onClick,text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)