import React from "react";
import { Header } from "./Header";
import { Expenditure } from "./pages/expenditure/Expenditure";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Expenditure />
      <Footer />
    </>
  );
};

export default App;
