import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { shape, arrayOf, string } from 'prop-types';

const Wrapper = styled.nav`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;

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
`;

const Home = styled.div`
  font-size: 2rem;
  text-transform: lowercase;
`;

const ChallengeLink = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
`;

const NavBar = ({ projects }) => {
  return (
    <Wrapper>
      <HomeLink to="/">
        <Home>
          /home&nbsp;
          <span role="img" aria-label="home">
            🏡
          </span>
        </Home>
      </HomeLink>
      {projects.map(({ name, path }) => (
        <ChallengeLink to={path} key={name}>
          <div>{name}</div>
        </ChallengeLink>
      ))}
    </Wrapper>
  );
};

NavBar.propTypes = {
  projects: arrayOf(
    shape({
      name: string.isRequired,
      path: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NavBar;
