import React from "react";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Icons

// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// import { FixedNavSpacer, ToggleSwitch } from "./globalStyledComponents";
// Images
// import Logo from "../images/logo.svg";

const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "All Projects", route: "/All-Projects" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About Me", to: "About" },
    { id: "6T", name: "Terms of Service", to: "Tos" },
    { id: "7T", name: "Pricing", to: "Pricing" },
    { id: "8T", name: "Sample", to: "Sample" },
  ],
};



// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;





export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
