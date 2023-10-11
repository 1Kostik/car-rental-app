import { useNavigate } from "react-router-dom";
import { Button, Description, SectionHero, Title } from "./Home.styled";


const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/catalog");
  };
  return (
    <main>
    <SectionHero>
      <Title>Are you looking for an inexpensive car rental in Ukraine?</Title>
      <Description>
      Welcome to Car Rental, a car rental company in Ukraine!
      </Description>
      <Button onClick={handleStart}>Get started</Button>
    </SectionHero>
  </main>
  );
};
export default Home;