import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = ({
  name, states, iso3,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="country"
      onClick={() => navigate('/states', { state: { name } })}
      onKeyDown={() => navigate('/states', { state: { name } })}
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <h3 className="countryContents">
        {name}
      </h3>
      <div>
        <p className="countryInfo">
          Iso:
          {' '}
          {iso3}
        </p>
        <p className="countryInfo">
          States:
          {states.length}
        </p>
      </div>
    </div>
  );
};
Country.propTypes = {
  name: PropTypes.shape({
    name: PropTypes.string,
    states: PropTypes.string,
    iso3: PropTypes.string,
  }).isRequired,
};

export default Country;
