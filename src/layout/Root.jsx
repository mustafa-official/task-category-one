import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import Container from "../shared/Container/Container";

const Root = () => {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Root;
