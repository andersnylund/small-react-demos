import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { shape, arrayOf, string } from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: baseline;

  a {
    text-decoration: none;
    transition: all 0.5s ease;
    color: inherit;
    padding: 1rem;
    :hover {
      background: #eee;
    }
  }
`;

const HomeLink = styled(Link)`
  flex: 1;
  font-size: 2rem;
`;

const NavBar = ({ challenges }) => {
  return (
    <Wrapper>
      <HomeLink to="/">/</HomeLink>
      {challenges.map(({ name, path }) => (
        <Link to={path} key={name}>
          {name}
        </Link>
      ))}
    </Wrapper>
  );
};

NavBar.propTypes = {
  challenges: arrayOf(
    shape({
      name: string.isRequired,
      path: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NavBar;
