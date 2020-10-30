import React from "react";

const Details = ({ characters, id, weight, name, types }) => {
  const newId = String(`00${id}`).slice(-3);
  const allCharacters = characters.concat(weight);
  const describeOpprtunity = ["Attack", "Defense", "HP", "SP Attack", "SP Defence", "Speed", "Weight"];
  return (
    <div className="details">
      <div className="details__img">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            id || 1
          }.png`}
          alt="pockemon-icon"
          width="150"
        />
      </div>
      <div className="details__name">
        {name} {`#${newId}`}
      </div>
      <div className="details__opportunity">
        <div className="details__opportunity-describe">
          <div className="details__opportunity-name">Type</div>
          <div className="details__opportunity-number">
            {types.map((el, i) => (
              <div key={`${id}+${i}`}>{el}</div>
            ))}
          </div>
        </div>
        {allCharacters.map((elem, index) => (
          <div key={`${id}-${index}`} className="details__opportunity-describe">
            <div className="details__opportunity-name">{describeOpprtunity[index]}</div>
            <div className="details__opportunity-number">{elem}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
