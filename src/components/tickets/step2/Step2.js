import React from "react";
import Container from "../Container";
import Sidebar from "../sidebar/Sidebar";
import MainContent from "./MainContent";

const Step2 = () => {
  return (
    <Container tailwindClasses="flex flex-col xl:flex-row justify-between">
      <MainContent />
      <Sidebar />
    </Container>
  );
};

export default Step2