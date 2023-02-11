import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 30%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: border-bottom 0.3s ease-in-out;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--accent-color);
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export const StyledFormButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  color: var(--btn-text-color);
  font-size: 24px;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    var(--btn-hover-color)
  );
  background-size: 350%;
  border: none;
  border: 1px solid var(--btn-text-color);
  border-radius: 30px;
  z-index: 1;

  &:hover,
  &:focus-visible {
    outline: none;
    animation: btn-animate 8s linear infinite;
  }

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--btn-hover-color)
    );
    background-size: 350%;
    border-radius: 40px;
    opacity: 0;
    transition: 1s;
  }

  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: btn-animate 8s linear infinite;
  }

  @keyframes btn-animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`;
