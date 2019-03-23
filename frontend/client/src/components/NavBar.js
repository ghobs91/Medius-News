import React, { Component } from 'react';
import styled from 'styled-components'

const Navigation = styled.section`
  height: 4rem;
  width: 100%;
  background: #6200EE;
  display: flex;
  justify-content:space-between;
  align-items: center;
`;

class NavBar extends Component {
  render() {
    return (
      <Navigation>
        <h2>Medius News</h2>
        <p>Why I built This</p>
        <br></br>
      </Navigation>
    );
  }
}

export default NavBar;