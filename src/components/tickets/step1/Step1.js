import React, { useEffect } from "react";
import Container from "../Container";
import Sidebar from "../sidebar/Sidebar";
import MainContent from "./MainContent";

export default function Step1() {
  return (
    <Container tailwindClasses="flex flex-col xl:flex-row justify-between">
      <MainContent />
      <Sidebar />
    </Container>
  );
}
