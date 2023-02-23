import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </FilterContainer>
  );
};
