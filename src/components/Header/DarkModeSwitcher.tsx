import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../theme/themeContext';

interface Props {
  color?: string;
}

const DarkModeSwitcher = ({ color }: Props) => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return (
    <StyledButton
      color={color}
      onClick={toggleDarkMode}
      aria-label="Switch dark and light mode"
      data-testid="darkmode-switcher"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          id="light"
          d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"
        />
        <path
          id="dark"
          d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439zm14.24 4.045h-10.292c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.354 2.278z"
        />
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  z-index: 1;
  border: none;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  margin-left: 1.4rem;
  height: 28px;
  background-color: transparent;
  cursor: pointer;
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.3);
  }

  path {
    fill: ${props =>
      props.theme.isDarkMode ? props.theme.primary : props.color};
    &#light {
      opacity: ${props => (props.theme.isDarkMode ? 1 : 0)};
    }
    &#dark {
      opacity: ${props => (props.theme.isDarkMode ? 0 : 1)};
    }
  }
`;

export default DarkModeSwitcher;