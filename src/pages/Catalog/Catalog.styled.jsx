import styled from "styled-components";

export const Conteiner = styled.div`
display:grid;
width: 1184px;
grid-template-columns:274px 274px 274px 274px;
gap: 28px;
margin: 0px auto;
padding-top: 50px;
`;
export const Button = styled.button`
    display: block;
    color:  #3470FF;    
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 100px;
    cursor: pointer;
    background-color: transparent;
    &:hover{
        color:#0B44CD;
        background-color:transparent;
        ;
      }; 
    @media screen and (min-width: 768px) {
        margin-bottom: 150px;
    }
`;