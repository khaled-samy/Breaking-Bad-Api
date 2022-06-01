import React from "react";
import { useParams } from "react-router-dom";

import './CharCard.css';

const CharCard = ({ char }) => {
  const { id } = useParams();

  return (
    <>
      {char.length ? (
        char
          .filter((item) => item.char_id === +id)
          .map((item) => {
            return (
              <div className="char-card-info">

              <div className="card-container">
                <img className="char-img" src={item.img} alt={item.name} />
                <div className="char-card-details">
                <p className="char">Name : {item.name}</p>
                <p className="char">Nickname : {item.nickname}</p>
                <p className="char"> Status : {item.status}</p>
                <p className="char">Birthday : {item.birthday}</p>
                </div>
                </div>
              </div>
            );
          })
      ) : (
        <div class="louder-container">
        <div class="loader"></div>
      </div>
      )}
    </>
  );
};

export default CharCard;
