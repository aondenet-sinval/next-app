import React, { useEffect, useState } from "react";
import api from "../services/api";
   
export default function ResumoTempo() {
    const [user, setUser] = useState();
    
    
    useEffect(() => {
      api
        .get("/users/aondenet-sinval")
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    
    return (
      <div className="App">
        <p>Usuário: {user?.login}</p>
        <p>Biografia: {user?.bio}</p>
        <p>Nome: {user?.name}</p>
        <p>Location: {user?.location}</p>
      </div>
    );
}

    fetch("")
