import React from "react";
import "./styles.css";
import { useRepositoy } from "../../contexts/repositories";

export const User = () => {
  const { user } = useRepositoy();

  return (
    <div className="container-user-card">
      <div class="card-container">
        <img width={110} class="round" src={user.avatar_url} alt="user" />
        <h3>{user.login}</h3>
        <h6>{user.location}</h6>
        <p className="bio-user">{user.bio}</p>
        <div class="buttons">
          <button class="primary">Repositórios</button>
          <button class="primary ghost">Visitados</button>
        </div>
      </div>
    </div>
  );
};
