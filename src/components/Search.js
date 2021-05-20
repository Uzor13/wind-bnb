import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  width: 18.6rem;
  height: 3rem;
  padding-left: 1rem;
  ::placeholder {
    color: #333333;
  }
`;


const Search = ({filteredData, inputValue, filterOnChange}) => {
    return (
        <div>
            <Input
                className="focus:ring-2 focus:ring-red-600 mt-6"
                placeholder='Helsinki, Finland'
                value={inputValue}
                onChange={filterOnChange}
            />
        </div>
    );
};

export default Search;