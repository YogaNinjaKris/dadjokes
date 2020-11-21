import React from 'react';
import './joke.css';

export const Joke = (props) => {
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={`../assets/img/${props.userId}.png`}
          />
          <p className="user-name">{props.userName}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
    </div>
  );
};
