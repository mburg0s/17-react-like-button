import { useState, useEffect } from 'react'
import './button.css';



function App(){

  const [count, setCount] = useState(0)
  const [wLike,setLike] = useState('likes')
   
  useEffect(() => {
      count == 1 ? setLike('like') : setLike('likes')
  })


  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="like"> {count} {wLike}</button>
    </div>
  );
}
export default App;
