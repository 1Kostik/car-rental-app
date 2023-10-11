import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../redux/operations";
import { resetFilter } from "../../redux/filtersSlice";
import {
  selectFavoriteCars,
  selectFiltredFavoriteCars,
  selectIsFiltred,
} from "../../redux/selectors";
import { Card } from "../../components/Card/Card";
import { ChoiceForm } from "../../components/ChoiceForm/ChoiceForm";
import { NoFavorites } from "../../components/NoFavorites/NoFavorites";
import { NoFiltred } from "../../components/NoFiltred/NoFiltred";

const Favorites = () => {
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const favorites = useSelector(selectFavoriteCars);
  const filtredFavorites = useSelector(selectFiltredFavoriteCars);
  useEffect(() => {
    dispatch(getAllCars());
    dispatch(resetFilter());
  }, [dispatch]);
  return (
    <main>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <>
          <ChoiceForm />
          <Card data={isFiltred ? filtredFavorites : favorites} />
          {isFiltred && filtredFavorites?.length === 0 && <NoFiltred />}
        </>
      )}
    </main>
  );
};

export default Favorites;
