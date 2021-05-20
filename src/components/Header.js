import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 1.5rem 2rem;
  @media(max-width: 600px) {
    flex-direction: column;
  }
`



const Header = ({filteredData, inputValue, filterOnChange}) => {
    return (
        <Container>
            <HeaderLogo/>
            <Search filteredData={filteredData} inputValue={inputValue} filterOnChange={filterOnChange}/>
        </Container>
    );
};

export default Header;