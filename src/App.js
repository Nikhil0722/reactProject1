import { useState } from "react";
function App() {
const [count, setCount] = useState(0);
const add=()=>{
  if(count==20){
    setCount(count);
  }else{
    setCount(count+1);
  }
    
}
const sub=()=>{
  if(count<=0){
    setCount(count);
  }else
    {setCount(count-1);}
}

  return (
    <>
    <h1>Counter = {count}</h1>
    <button onClick={add}>Increment</button>
    <p></p>
    <button onClick={sub}>Decrement</button>
    </>
  );
}

export default App;
