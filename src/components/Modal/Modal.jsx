import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { selectCars } from "../../redux/selectors";
import {
  Span,
  Backdrop,
  Title,
  Info,
  CarModal,
  ButtonClose,
  ImageContainer,
  Image,
  CardTitle,
  CardList,
  Button,
  MainInfo,
  Description,
  NameCar,
  InfoLast,
  CarInfo,
  Accessories,
  Functionalities,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, carId }) => {
  const cars = useSelector(selectCars);

  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    mileage,
    img,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
  } = cars.find((item) => item.id === carId);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <CarModal>
        <ButtonClose onClick={handleBackDropClick}>
          <CloseIcon onClick={handleBackDropClick} />
        </ButtonClose>

        <ImageContainer>
          <Image src={img} alt="" />
        </ImageContainer>
        <CarInfo>
          <CardTitle>
            <li>{make}</li>
            <li>
              <NameCar>{model},</NameCar>
            </li>
            <li>{year}</li>
          </CardTitle>
          <MainInfo>
            <li>{address.split(",")[1]}</li>
            <li>|</li>
            <li>{address.split(",")[2]}</li>
            <li>|</li>
            <li>Id: {id}</li>
            <li>|</li>
            <li>Year: {year}</li>
            <li>|</li>
            <li>Type: {type}</li>
          </MainInfo>
          <CardList>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>|</li>
            <li>Engine Size: {engineSize}</li>
          </CardList>

          <Description>{description}</Description>

          <Title>Accessories and functionalities:</Title>
          <Accessories>
            <li>{accessories[0]}</li>
            <li>|</li>
            <li>{accessories[1]}</li>
            <li>|</li>
            <li>{accessories[2]}</li>
          </Accessories>
          <Functionalities>
            <li>{functionalities[0]}</li>
            <li>|</li>
            <li>{functionalities[1]}</li>
            <li>|</li>
            <li>{functionalities[2]}</li>
          </Functionalities>

          <Title>Rental Conditions:</Title>
          <Info>
            <li>
              Minimum age : <Span>25</Span>
            </li>
            <li>Valid driver's license</li>
          </Info>
          <InfoLast>
            <li>Security deposite required</li>
            <li>
              Mileage: <Span>{mileage.toLocaleString('en-US')}</Span>
            </li>
            <li>
              Price: <Span>{rentalPrice}</Span>
            </li>
          </InfoLast>
        </CarInfo>
        <Button type="button">Rental car</Button>
      </CarModal>
    </Backdrop>,
    modalRoot
  );
};
