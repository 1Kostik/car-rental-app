import { CardItems } from "../CardItems/CardItems";
import { List } from "./Card.styled";

export const Card = ({ data }) => {
  return (   
      <List>
        {data &&
          data.map(
            ({
              id,
              img,
              type,
              year,
              make,
              model,
              address,
              mileage,
              engineSize,
              accessories,
              description,
              rentalPrice,
              rentalCompany,
              functionalities,
              fuelConsumption,
            }) => (
              <CardItems
                id={id}
                img={img}
                year={year}
                make={make}
                type={type}
                model={model}
                address={address}
                mileage={mileage}
                engineSize={engineSize}
                rentalPrice={rentalPrice}
                accessories={accessories}
                description={description}
                rentalCompany={rentalCompany}
                functionalities={functionalities}
                fuelConsumption={fuelConsumption}
              />
            )
          )}
      </List>   
  );
};
