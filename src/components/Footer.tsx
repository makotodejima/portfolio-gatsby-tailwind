import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="copyright">&copy; 2019 Makoto Dejima</div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  padding: 2rem;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;