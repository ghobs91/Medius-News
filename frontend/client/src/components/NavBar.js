import React, { Component } from 'react';
import styled from 'styled-components'

const Navigation = styled.section`
  height: 9%;
  width: 100%;
  background: #5876fc;
  display: flex;
  justify-content:space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px 3px 16px -5px rgba(0,0,0,0.75);
  position: fixed;
`;

const NavText = styled.div`
  color: white;
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

class NavBar extends Component {
  render() {
    return (
      <Navigation>
        <NavText>
          <h2>Medius News</h2>
        </NavText>
        <NavText>
          <p>Why I built This</p>
        </NavText>
      </Navigation>
    );
  }
}

export default NavBar;