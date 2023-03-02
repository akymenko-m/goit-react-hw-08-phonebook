import { addFilter } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterTitle } from './Filter.styled';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>

      <Input
        width="auto"
        variant="outline"
        placeholder="Enter name"
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </FilterContainer>
  );
};
