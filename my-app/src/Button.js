import { useState, useEffect } from 'react'
import './app.css';



function App(){

  const [count, setCount] = useState(0)
  const [wLike,setLike] = useState('likes')
  const handleClick = () => setCount(count + 1)
  
  useEffect(() => {
      count == 1 ? setLike('like') : setLike('likes')
  })

  return (
    <div>
      <button onClick={handleClick} className="like"> {count} {wLike}</button>
    </div>
  );
}
export default App;
