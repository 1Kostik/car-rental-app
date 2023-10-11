import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./Layout.styled";

 const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>Car Rental</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>     
      <Outlet />
    </Container>
  );
};
export default Layout;