import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onFilterChange = () => {} }) => (
  <StyledLabel className="label">
    Find contacts by name:
    <StyledInput
      className="input"
      type="text"
      name="name"
      value={value}
      placeholder="Who are you looking for?"
      onChange={onFilterChange}
    />
  </StyledLabel>
);

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
