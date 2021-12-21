import React, { useState, useEffect } from 'react';



function Counter() {
    const [count, setCount] = useState(0);

     
    return (
      <div>
        <p>You clicked <span className="badge bg-dark">{count}</span> times</p>
        <button onClick={()=>setCount(count+1)}>Adicionar</button>
        <button onClick={()=>setCount(count-1)}>Remover</button>
      </div>
    );
  }

export default Counter;