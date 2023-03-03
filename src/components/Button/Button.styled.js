import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 43px;
  padding: 2px 16px;
  font-size: 24px;
  color: var(--btn-text-color);
  background: linear-gradient(
    90deg,
    var(--accent-color),
    var(--btn-hover-color)
  );
  background-size: 350%;
  border: 1px solid var(--btn-text-color);
  border-radius: 30px;
  transition: background-image 0.3s ease;
  z-index: 1;

  &:disabled {
    cursor: progress;
    background-image: none;
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
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
    transition: 0.5s;
  }

  &:not(:disabled):hover:before,
  &:not(:disabled):focus-visible:before {
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

export const LinkAsButtonStyled = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  min-height: 43px;
  padding: 2px 16px;
  font-size: 24px;
  color: var(--btn-text-color);
  background: linear-gradient(
    90deg,
    var(--accent-color),
    var(--btn-hover-color)
  );
  background-size: 350%;
  border: 1px solid var(--btn-text-color);
  border-radius: 30px;
  transition: background-image 0.3s ease;
  z-index: 1;

  &:disabled {
    cursor: progress;
    background-image: none;
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
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
    transition: 0.5s;
  }

  &:not(:disabled):hover:before,
  &:not(:disabled):focus-visible:before {
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

export const ButtonCancelStyled = styled(ButtonStyled)`
  width: 138px;
  height: auto;
  font-size: 16px;
  background: none;
  border: none;
  color: var(--red-color);
  transition: color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  &:before {
    content: '';
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  &:hover,
  &:focus-visible {
    color: var(--btn-hover-color);
  }
`;
