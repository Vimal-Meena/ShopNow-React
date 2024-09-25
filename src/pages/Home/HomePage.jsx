import React from "react";
import {Hero} from "./components/Hero"
import { FeaturedProducts } from "./components/FeaturedProducts";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = () => {
  useTitle("ShopNow-Online Shopping");
  return <main>
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  </main>;
};
