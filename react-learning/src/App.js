import React,{ useState } from "react"; 
import Tweet from "./tweet";
import "./App.css";

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const [users, setUsers] = useState([
    {name: 'pip', tweets:'Morning',likes:20}
  ])

  const changeColor = () => {
    setRed(!isRed);
  }

  return(
    <div className = "App">
      <Tweet name = 'ashley' tweets = 'Morning!' likes = '10'/>
      <Tweet name = 'john' tweets = 'hey my friends!' likes = '20'/>
      <h1 className = {isRed? 'red' : '' }>Change my color</h1>
      <button onClick = {changeColor}>change color</button>
      <button onClick = {increment}>Increment</button>
     <h1>{count}</h1> 
     {users.map(user => (
       <Tweet name = {user.name} tweets = {user.tweets} likes = {user.likes}/>
     ))}
    </div>

  );
}

export default App;