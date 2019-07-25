import React from "react";
import "./styles.scss";

const InputFilter = props => {
  const { adalabersList, handleSelect } = props;
  return (
    <form className="InputFilter">
      <label className="InputFilter__label">
        <select
          className="InputFilter__input"
          type="text"
          onChange={handleSelect}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Selecciona una usuaria
          </option>
          {adalabersList.map(adalaber => {
            return (
              <option
                key={adalaber.login}
                value={adalaber.login}
                className="InputFilter__input-name"
              >
                {adalaber.login}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

export default InputFilter;
