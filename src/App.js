import React from "react";
import MainR from "./hoc/MainRouter";
import Navbar from "../src/components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <MainR />
    </div>
  );
}
