import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0 0 0/50%);
  z-index: 1200;
`;

export const CarModal = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background-color: white;
  width: 541px;
  height: 752px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
`;
export const ConfirmButton = styled.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  border: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const ButtonClose = styled.div`
  position: absolute;
  stroke: transparent;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: #121417;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
    background-color:#0B44CD;
    ;
  }; 
  `;


export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  margin-top: 40px;
`;

export const Image = styled.img`
  display: block;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;
export const CarInfo = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`;
export const CardAdvertising = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainInfo = styled.ul`
 
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;
export const CardList = styled.ul`

  font-family: Manrope;
  margin-bottom: 14px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;
export const CardTitle = styled.ul`
  width: 167px;
  height: 24px;
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 18px;
  display: flex;
  list-style: none;
  font-weight: 500;
  color: #121417;
  gap: 4px;
`;
export const Description = styled.p`
  font-family: Manrope;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #121417;
  gap: 4px;
  line-height: 20px;
`;
export const Title = styled.p`
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #121417;
  gap: 4px;
  line-height: 20px;
`;
export const NameCar = styled.span`
  font-family: Manrope;
  font-size: 18px;
  display: flex;
  list-style: none;
  font-weight: 500;
  color: #3470ff;
`;
export const Button = styled.button`
  position: absolute;
  bottom: 40px;
  left: 40px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  background-color: #3470ff;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  border-color: #3470ff;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
    background-color:#0B44CD;
    ;
  }; 
`;
export const Accessories = styled.ul`
  line-height: 18px;
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;
export const Functionalities = styled.ul`
  line-height: 18px;
  font-family: Manrope;
  margin-bottom: 24px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;
export const Info = styled.ul`
  line-height: 18px;
  font-family: Manrope;
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;
export const InfoLast = styled.ul`
  line-height: 18px;
  font-family: Manrope;
  margin-bottom: 24px;
  font-size: 12px;
  display: flex;
  list-style: none;
  font-weight: 400;
  color: #12141780;
  gap: 6px;
`;

export const Span = styled.span`
  line-height: 18px;
  font-family: Manrope; 
  font-size: 12px;
  list-style: none;
  font-weight: 600;
  color: #3470FF; 
`;