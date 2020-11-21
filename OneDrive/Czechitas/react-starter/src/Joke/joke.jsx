import React from 'react';
import { Likes } from '../Likes/likes.jsx';
import './joke.css';

export const Joke = () => {
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src="img/user01" />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
      </div>
      <Likes />
    </div>
  );
};
