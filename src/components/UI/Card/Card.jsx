import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 250px;
    height: 300px;
    margin: 20px;
    background: #b6969b;
    text-align: center;
    & div{
        display:grid;
        grid-template-columns: 3fr 1fr;
    }
    & span{
        padding: 1rem;
        color: red;
        font-weight: 900
    }

`

const Card = ({children}) => {
  return <StyledCard>{children}</StyledCard>
};

export default Card;
