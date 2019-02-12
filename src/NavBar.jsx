import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { shape, arrayOf, string } from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  height: var(--navbar-height);
  text-transform: uppercase;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem;
    :hover {
      text-decoration: underline;
    }
  }
`;

const HomeLink = styled(Link)`
  flex: 1;
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
