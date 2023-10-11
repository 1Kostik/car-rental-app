import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;   
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        padding-bottom: 100px;
    }
`;