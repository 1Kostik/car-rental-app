import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Card } from "../../components/Card/Card";
import { resetFilter } from "../../redux/filtersSlice";
import { getCarsByPage } from "../../redux/operations";
import {
  selectIsLoading,
  selectError,
  selectCars,
  selectFiltredCars,
  selectIsFiltred,
} from "../../redux/selectors";
import { ChoiceForm } from "../../components/ChoiceForm/ChoiceForm";
import { Loader } from "../../components/Loader/Loader";
import { Button } from "../Catalog/Catalog.styled";
import { NoFiltred } from "../../components/NoFiltred/NoFiltred";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [isBtnShown, setIsBtnShown] = useState(true);
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const isFiltred = useSelector(selectIsFiltred);
  const filtredCars = useSelector(selectFiltredCars);
  const dispatch = useDispatch();

  const arrayForRender = isFiltred ? filtredCars : cars;

  useEffect(() => {
    dispatch(getCarsByPage(page));
    dispatch(resetFilter());
    setIsBtnShown(true);
  }, [dispatch, page]);

  useEffect(() => {
    if (arrayForRender.length === 33) {
      setIsBtnShown(false);
    }
  }, [arrayForRender.length]);

  useEffect(() => {
    const height = 426;
    if (cars.length > 8) {
      window.scrollBy({
        top: height * 1.5,
        behavior: "smooth",
      });
    }
  }, [cars]);

  const handleLoadMoreClick = () => {
    setPage((page) => page + 1);
  };

  return (
    <main>
      {error && toast.error("Ooops!..Something went wrong. Try to reload page")}
      {loading && !error && <Loader />}
      <ChoiceForm />
      <Card data={isFiltred ? filtredCars : cars} />
      {isFiltred && filtredCars?.length === 0 && <NoFiltred />}
      {isBtnShown && !loading && !isFiltred && (
        <Button onClick={handleLoadMoreClick}>Load more</Button>
      )}
    </main>
  );
};

export default Catalog;