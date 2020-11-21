import React, { useState } from 'react';
import './likes.css';

export const Likes = (props) => {
  const [upLike, setUpLike] = useState(props.likes);
  const [downLike, setDownLike] = useState(props.dislikes);

  return (
    <div className="joke__likes">
      <button
        id="btn-up"
        className="btn-like btn-like--up"
        onClick={() => {
          setUpLike(upLike + 1);
        }}
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">
        {upLike}
      </span>
      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={() => {
          setDownLike(downLike + 1);
        }}
      ></button>
      <span id="likes-down" className="likes-count likes-count--down">
        {downLike}
      </span>
    </div>
  );
};
