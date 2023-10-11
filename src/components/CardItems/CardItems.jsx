import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/favoriteSlice";
import { selectFavorites } from "../../redux/selectors";
import { Modal } from "../Modal/Modal";
import { ReactComponent as FavoriteIcon } from "../../images/icons/faivorit.svg";
import { ReactComponent as FavoriteActiveIcon } from "../../images/icons/faivorit-active.svg";
import {
  Image,
  ImageContainer,
  CardAdvertising,
  CardList,
  CardTitle,
  NameCar,
  Button,
  iconStyles,
} from "./CardItems.styled";

export const CardItems = ({
  id,
  img,
  make,
  year,
  type,
  model,
  address,
  rentalPrice,
  accessories,
  rentalCompany,
}) => {
  const favorites = useSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  const handleAddFavorites = (favId) => {
    dispatch(addFavorite(favId));
  };
  const handleRemoveFavorites = (favId) => {
    dispatch(deleteFavorite(favId));
  };
  return (
    <>
      <CardAdvertising key={id}>
        {favorites.includes(id) ? (
          <FavoriteActiveIcon
            width="18"
            height="18"
            style={iconStyles}
            onClick={() => handleRemoveFavorites(id)}
          />
        ) : (
          <FavoriteIcon
            width="18"
            height="18"
            style={iconStyles}
            onClick={() => handleAddFavorites(id)}
          />
        )}
        <ImageContainer>
          <Image src={img} alt="" />
        </ImageContainer>
        <div>
          <CardTitle>
            <li>{make}</li>
            <li>
              <NameCar>{model},</NameCar>
            </li>
            <li>{year}</li>
            <li>{rentalPrice}</li>
          </CardTitle>
          <CardList>
            <li>{address.split(",")[1]}</li>
            <li>|</li>
            <li>{address.split(",")[2]}</li>
            <li>|</li>
            <li>{rentalCompany}</li>
          </CardList>
          <CardList>
            <li>{type}</li>
            <li>|</li>
            <li>{model}</li>
            <li>|</li>
            <li>{id}</li>
            <li>|</li>
            <li>{accessories[2]}</li>
          </CardList>
        </div>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
        {showModal && <Modal onClose={toggleModal} carId={id} />}
      </CardAdvertising>
    </>
  );
};
