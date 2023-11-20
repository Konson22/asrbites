import CategoriesSection from "./CategoriesSection";
import Header from "./Header";
import PriceSection from "./PriceSection";
import WhatWeCanDo from "./WhatWeCanDo";

export default function HomePage() {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <PriceSection />
      <WhatWeCanDo />
    </div>
  );
}
