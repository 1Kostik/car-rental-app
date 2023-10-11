import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Logo, Link, Span,LinkLogo } from "./Layout.styled";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <Container>
      <Header>
      <LinkLogo to="/">
        <Logo>
          <Span>Car</Span> Rental
        </Logo>
        </LinkLogo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
