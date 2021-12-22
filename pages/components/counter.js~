import React, { useState, useEffect } from 'react';


function Counter() {
	const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => { 
    document.title = `Você clicou ${count} vezes`;  });
    return (
      <div> 
        <p>Você clickou <span className="badge bg-primary">{count}</span> vezes</p>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Adicionar</button>
        <button onClick={()=>setCount(count-1)}>Remover</button>
      </div>
    );
  }

export default Counter;