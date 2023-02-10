import PropTypes from 'prop-types';
import { FilterContainer, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange = () => {} }) => {
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
