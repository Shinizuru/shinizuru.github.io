import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Tos from "../components/Tos";
import Pricing from "../components/Pricing";
import Sample from "../components/Sample";

import { BackToTop } from "../components/globalStyledComponents";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Tos />
        <Pricing />
       
      </main>
      <BackToTop home={"Home"} />
    </>
  );
}
