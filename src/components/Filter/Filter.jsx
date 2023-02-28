import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';

import { StyledLabel, StyledInput } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <StyledLabel className="label">
      Find contacts by name:
      <StyledInput
        className="input"
        type="text"
        name="name"
        value={filter}
        placeholder="Who are you looking for?"
        onChange={handleFilter}
      />
    </StyledLabel>
  );
};
