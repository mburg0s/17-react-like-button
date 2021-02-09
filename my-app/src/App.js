import { useState, useEffect } from 'react'
import './App.css';

// function Button(props) {
//   return <button> number is {props.number}</button>
// }

function App(){

  // useEffect(() => {

  // })

  const [count, setCount] = useState(0)
  const [wLike,setLike] = useState('Like')

  function countClick(){
    if (count > 0) {
      setLike('Likes')
  }
  setCount(count+1)

}
  return (
    <div>
      <button onClick={countClick} className='like'>{count} {wLike}</button>
    </div>
  );
}
export default App;
