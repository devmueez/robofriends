import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="ma3 pa2 bw2 shadow-5 grow tc br3 bg-light-green dib">
      <img alt="Robot" src={`https://www.robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
