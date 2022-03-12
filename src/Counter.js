import React, {useState} from "react";

const Counter = () => {
    
  const [count , setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1)
  }

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={handleChange}>Add</button>
    </React.Fragment>
  );
}

export default Counter