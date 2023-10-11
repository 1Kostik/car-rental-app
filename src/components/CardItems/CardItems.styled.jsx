import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
`;
export const iconStyles = {
  position: "absolute",
  stroke: "#3470FF",
  fill: "transparent",
  top: 14,
  right: 14,
  cursor: "pointer",
};
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  border-radius: 14px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const CardAdvertising = styled.div`
position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardList = styled.ul`
  width: 270px;
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;  
  color: #12141780;
  gap:6px;
`;
export const CardTitle = styled.ul`
  width: 270px;
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 16px;
  display: flex;
  list-style: none;
  font-weight: 500;
  color: #121417;
  gap: 4px; 
  li:last-child {
    margin-left: auto;
  }
`;
export const NameCar = styled.span`
  font-family: Manrope;
  font-size: 16px;
  display: flex;
  list-style: none;
  font-weight: 500;
  color: #3470ff;
`;
export const Button = styled.button`
  font-family: Manrope;
  font-size: 16px;
  display: flex;  
  font-weight: 500;
  background-color: #3470ff;
  width: 274px;
  height: 44px;
  border-radius: 10px;
  border-color: #3470ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  ;
  cursor: pointer;
  &:hover{
    background-color:#0B44CD;
    ;
  }; 
`;
