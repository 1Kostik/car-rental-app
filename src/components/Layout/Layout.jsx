import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link,Span } from "./Layout.styled";

 const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo><Span>Car</Span> Rental</Logo>
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