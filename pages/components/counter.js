import React, { useState, useEffect } from 'react';


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => { 
    document.title = `Você clicou ${count} vezes`;  });
    return (
      <div>
        <p>Você clickou <span className="badge bg-primary">{count}</span> vezes</p>
        <button onClick={()=>setCount(count+1)}>Adicionar</button>
        <button onClick={()=>setCount(count-1)}>Remover</button>
      </div>
    );
  }

export default Counter;