import styled from "styled-components";

export const FormContainer = styled.div` 
  height: 74px;
  display: flex;

  justify-content: center;
  gap: 18px;
  align-items: flex-end;
`;
export const Container = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
   

    @media screen and (min-width: 480px) {
        max-width: 480px;
    } 

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }    

    @media screen and (min-width: 1200px) {
        max-width: 1200px;
        padding-top: 80px;
    }
`;

export const Forma = styled.form`
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;   
    @media screen and (min-width: 1200px) {
        flex-wrap: nowrap;
        flex-direction: row;
    } 
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    color: #8A8A89;
    font-size: 14px;
    position: relative;
`;

export const SelectWrap = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    gap: 18px;
    }
`;

export const InputBrandWrap = styled.div`
    width: 250px;
    @media screen and (min-width: 768px) {
        width: 224px;
    }
`;

export const InputPriceWrap = styled.div`
    width: 250px;
    @media screen and (min-width: 768px) {
        width: 125px;
    }
`;

export const InputMileageWrap = styled.div`
    display: flex;
    position: relative;
    width: 250px;
    
    @media screen and (min-width: 768px) {
        width: 320px;
    }
`;

export const InputMileageText = styled.p`
    position: absolute;
    top: 35px;
    left: 22px;
    color:  #121417;    
    font-size: 16px;
    font-weight: 500;
    line-height: 1.11;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`;

export const InputMileageFrom = styled.input`
    box-sizing: border-box;
    width: 125px;     
    height: 48px;
    padding: 14px 14px 14px 70px;
    background-color:  #F7F7FB;
  
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);
    transition:250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    :focus {
        border-color:  #2684ff;
    }

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
        padding: 14px 14px 14px 86px;
    }
`;

export const InputMileageTo = styled.input`
    box-sizing: border-box;
    width: 125px; 
    height: 48px;
    padding: 14px 14px 14px 70px;
    
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 0px 14px 14px 0px;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color:  #F7F7FB;

    &:hover,
    &:focus {
        border-color: #2684ff;
    }

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
        padding: 14px 14px 14px 86px;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    

    gap: 20px;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1200px) {
        margin-top: 4px;
    }
`;

export const Button = styled.button`
    min-width: 200px;
    height: 48px;
    

    border-radius: 12px;
    background: #3470FF;
    color: #FFFFFF;
    ;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);;

    &:hover,
    &:focus {
        background-color: #0b44cd;
    }
    :disabled {
        background-color:  #8a8a89;
    }

    @media screen and (min-width: 1200px) {
        min-width: 136px;
        margin-top: 10px;
    }
`;

export const InputResetWrap = styled.div`
    display: flex;
    @media screen and (min-width: 1200px) {
        margin-top: 10px;
    }
`;
export const iconStyles = {
    fill: '#0b44cd',
    cursor: 'pointer',
};